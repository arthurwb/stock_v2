import os
import re

def consolidate_files(root_dir, output_file, exclude_dirs=None, exclude_files=None, exclude_extensions=None, delimiter="-------- {file_path} --------"):
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', 'venv', '__pycache__', '.git', '.next']
    
    if exclude_files is None:
        exclude_files = ['package-lock.json', 'yarn.lock', 'favicon.ico', 'README.md']
    
    if exclude_extensions is None:
        exclude_extensions = []  # Default to an empty list if no extensions are provided

    with open(output_file, 'w', encoding='utf-8') as outfile:
        for subdir, dirs, files in os.walk(root_dir):
            # Skip the excluded directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                # Skip the excluded files and files matching excluded extensions
                if file in exclude_files or any(file.endswith(ext) for ext in exclude_extensions):
                    continue
                
                file_path = os.path.join(subdir, file)
                try:
                    # Write the delimiter with the file path before the content
                    outfile.write(delimiter.format(file_path=file_path) + "\n")
                    
                    # Write the content of the file
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as infile:
                        outfile.write(infile.read())
                        outfile.write("\n")  # Optional: Add a newline after each file's content
                except Exception as e:
                    print(f"Error reading file {file_path}: {e}")

if __name__ == "__main__":
    root_dir = input("Enter the root directory: ")
    output_file = input("Enter the output file path (leave black for './util/out.txt'): ")
    if output_file == "":
        output_file = "./util/out.txt"
    
    # Example: Exclude .svg and .png files
    exclude_extensions = ['.svg', '.png']
    
    consolidate_files(root_dir, output_file, exclude_extensions=exclude_extensions)
