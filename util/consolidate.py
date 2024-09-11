import os

def consolidate_files(root_dir, output_file, exclude_dirs=None, exclude_files=None, delimiter="-------- {file_path} --------"):
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', 'venv', '__pycache__', '.git']
    
    if exclude_files is None:
        exclude_files = ['package-lock.json', 'yarn.lock']

    with open(output_file, 'w', encoding='utf-8') as outfile:
        for subdir, dirs, files in os.walk(root_dir):
            # Skip the excluded directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            for file in files:
                # Skip the excluded files
                if file in exclude_files:
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
    output_file = input("Enter the output file path (including the file name, e.g., consolidated_output.txt): ")
    consolidate_files(root_dir, output_file)
