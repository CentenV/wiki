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

path_tree = {}
def map_paths():
    # Iterate through all the possible full paths
    for path in full_paths:
        # Break down the path
        path = path.split("/")

        # Traverse to locate the proper path
        current_level = 
            
            # Create a new node if node does not exist


def output_ts():
    
    pass

if __name__ == "__main__":
    # Set _pages in src as the current directory
    os.chdir("./src/routes/_pages")
    # Traverse and map out all paths
    traverse("./")
    # Convert paths into an object tree

    
    print(full_paths)