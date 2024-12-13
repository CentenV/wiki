# Map out all routes and export to a ts file
# Vincent Nguyen
import os
from bisect import insort
import json


# Traerse paths finding what directories contain an index.tsx file
full_paths = []
def traverse(folder):
    for entry in os.listdir(folder):
        current_entry_path = os.path.join(folder, entry)
        if os.path.isdir(current_entry_path):
            traverse(current_entry_path)
        if entry == "index.tsx":
            full_paths.append(folder[2:])

def map_paths():
    path_tree = {}
    # Iterate through all the possible full paths
    for path in full_paths:
        # Break down the path
        splitted_path = path.split("/")

        # Traverse to locate the proper path
        current_level = path_tree
        for level in splitted_path:
            # Add to children
            if level in current_level.keys():
                current_level = current_level[level]
            # Create a new node if node does not exist
            else:
                current_level[level] = {}            
    return path_tree

def output_ts():
    
    pass

if __name__ == "__main__":

    print("Mapping URLs..........")
    # Set _pages in src as the current directory
    os.chdir("./src/routes/_pages")
    # Traverse and map out all paths
    traverse("./")
    # Convert paths into an object tree
    tree = map_paths()
    # Output to JSON file
    with open("map.json", "w") as map_file:
        map_file.write(json.dumps(tree))

    
    print(full_paths)