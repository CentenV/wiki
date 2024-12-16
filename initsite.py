# Initializes the webpage by compiling the necessary resources
# Vincent Nguyen, CentenV
import os
from bisect import insort
import json

ROOT = os.getcwd()

# Traverse paths finding what directories contain an page.mdx file
def traverse(folder):
    os.chdir(folder)
    full_paths = []

    # Find the full folder paths of any pages
    def traverse_helper(folder):
        for entry in os.listdir(folder):
            current_entry_path = os.path.join(folder, entry)
            if os.path.isdir(current_entry_path):
                traverse_helper(current_entry_path)
            if entry == "page.tsx":
                full_paths.append(folder)

    traverse_helper(folder)

    # Resolve full paths into page paths
    page_paths = [path.split("/")[path.split("/").index("(pages)") + 1:] for path in full_paths]
    page_paths = ["/".join(splitted_paths) for splitted_paths in page_paths]
    
    return (page_paths, full_paths)

# Resolves the list of all possible full paths into a tree
def map_paths(paths):
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

# # Go through all Markdown files and resolve page titles
# def resolve_page_titles():
#     md_titles = {}
#     for entry in os.listdir():
#         # Markdown file identified
#         if entry[-3:] == ".md":
#             # Read file
#             with open(entry) as f:
#                 lines = f.readlines()
#                 # Find the first line with the h1 (#) tag
#                 title = None
#                 for line in lines:
#                     # Update title when line is found and terminate the search process
#                     if line.split(" ")[0] == "#":
#                         title = line[1:].strip()
#                         break
#                 # Log entry
#                 if title == None:
#                     md_titles[entry[:-3]] = entry[:-3]
#                 else:
#                     md_titles[entry[:-3]] = title
#     return md_titles


if __name__ == "__main__":
    # Locate all the page URLs
    print("Traversing URLs..........")
    (page_paths, full_paths) = traverse(f"{ROOT}/app/(pages)")

    # Map all the paths into a tree
    print("Building URL Tree..........")
    tree = map_paths(page_paths)
    os.chdir(f"{ROOT}/public")
    with open("wikimap.json", "w") as map_file:
        map_file.write(json.dumps(tree))

    # Resolve page titles
    print("Resolving page titles..........")
    # os.chdir("pages")
    # page_titles = resolve_page_titles()
    # with open("pagetitles.json", "w") as title_file:
    #     title_file.write(json.dumps(page_titles))