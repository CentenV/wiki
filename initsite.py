# Initializes the webpage by compiling the necessary resources
# Vincent Nguyen, CentenV
import os
from bisect import insort
import json

ROOT = os.getcwd()
WIKI_MAP_OUTPUT = "public/wikimap.json"

def prnt_warning(msg):
	print(f"Warning: {msg}");

def reconcile_and_output(output_path, data):
	os.chdir(ROOT)

	# Check if file exists
	# if os.path.exists(output_path):
	# 	with open(output_path) as out_file:
			
	# else:
	# 	with open(output_path, "w") as out_file:
	# 		out_file.write(json.dumps(data, indent=4))
	with open(output_path, "w") as out_file:
		out_file.write(json.dumps(data, indent=4))

def traverse(folder):
	"""Traverse paths finding what directories contain an page.mdx file

	Args:
		folder (str): The folder where all the wiki pages

	Returns:
		_type_: _description_
	"""
	os.chdir(folder)
	pages = []

	# Find the full folder paths of any pages
	def traverse_helper(folder):
		folder_entries = os.listdir(folder)
		# Classify folder/path as intermediate or content page
		split_trimmed_path = folder.split("/")[folder.split("/").index("(pages)") + 1:]
		url_relative_path = "/".join(split_trimmed_path)
		if "page.tsx" in folder_entries and "content.mdx" in folder_entries:        # Content page
			if len(folder_entries) != 2:
				prnt_warning(f"{folder} contains subdirectories/additional files that may be ignored")
			pages.append((url_relative_path, folder, True))
			print(f"content found: {url_relative_path} at {folder}")
			return
		elif "page.tsx" in folder_entries:
			pages.append((url_relative_path, folder, False))
			print(f"intermediate found: {url_relative_path} at {folder}")

		# Go through all folders 
		for entry in os.listdir(folder):
			current_entry_path = os.path.join(folder, entry)
			if os.path.isdir(current_entry_path):
				traverse_helper(current_entry_path)

	traverse_helper(folder)
	
	return pages

def map_paths(paths):
	"""Resolves the list of all possible full paths into a tree

	Args:
		paths -> str[]: List of relative page URLs (i.e. development/cpp) 

	Returns:
		dict: URL tree based on objects. Keys are the tree name and the value is an object store of children
	"""

	path_tree = {}

	# Iterate through all the possible full paths
	for path in paths:
		# Break down the path
		splitted_path = path.split("/")
		# Traverse to locate the proper path
		current_level = path_tree
		for level in splitted_path:
			# Create a new node if node does not exist
			if level not in current_level.keys():
				current_level[level] = {}
			# Add to children
			current_level = current_level[level]

	return path_tree

def resolve_page_titles(args):
	"""Go through all Markdown files and resolve page titles

	Args:
		paths -> str[]: List of relative page URLs and the absolute paths to the directories

	Returns:
		_type_: _description_
	"""

	md_titles = {}

	for (relativeURLs, absolutePath) in args:
		# Read file
		with open(f"{absolutePath}/content.mdx") as f:
			lines = f.readlines()
			# Find the first line with the h1 (#) tag
			title = None
			for line in lines:
				# Update title when line is found and terminate the search process
				if line.split(" ")[0] == "#":
					title = line[1:].strip()
					break
			# Log entry
			if title == None:
				md_titles["/" + relativeURLs] = relativeURLs.split("/")[-1:][0]
				prnt_warning(f"No title provided at page {relativeURLs}")
			else:
				md_titles["/" + relativeURLs] = title
				print(f"{relativeURLs} -> {title}")

	return md_titles


if __name__ == "__main__":
	# Locate all the page URLs
	print("\nTraversing URLs..........")
	pages = traverse(f"{ROOT}/app/(pages)")
	# Map all the paths into a tree
	print("\nBuilding URL Tree..........")
	tree = map_paths([page[0] for page in pages])
	print(json.dumps(tree, indent=4))
	# Resolve page titles
	print("\nResolving page titles..........")
	page_titles = resolve_page_titles([page[:-1] for page in pages if page[2]])
	
	# Reconcile and output
	tree["reconciletest"] = {}		# test
	reconcile_and_output("public/wikimap.json", tree)
	reconcile_and_output("public/pagedata.json", page_titles)
	