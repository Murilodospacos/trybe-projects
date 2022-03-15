import sys
from collections import Counter


def txt_importer(path_file):
    if not path_file.endswith(".txt"):
        # https://stackoverflow.com/questions/5574702/how-to-print-to-stderr-in-python
        return sys.stderr.write("Formato inválido\n")
    try:
        with open(path_file, "r") as txtFile:
            # https://stackoverflow.com/questions/12330522/how-to-read-a-file-without-newlines
            data = txtFile.read().splitlines()
    except FileNotFoundError:
        # https://stackoverflow.com/questions/5574702/how-to-print-to-stderr-in-python
        return sys.stderr.write(f"Arquivo {path_file} não encontrado\n")
    else:
        return data


if __name__ == "__main__":
    res = txt_importer("statics/arquivo_teste.txt")
    print(res)
    line1 = res[0].split(" ")
    print(line1)
    lower_words = [word.lower() for word in line1]
    print(lower_words)
    print(Counter(lower_words)["acima"])
