import csv

# https://stackoverflow.com/questions/24662571/python-import-csv-to-list


fileTXT = "data/mkt_campaign.txt"


def analyze_log(path_to_file):
    with open(fileTXT, "w") as txtFile:
        with open(path_to_file, "r") as csvFile:
            if path_to_file.endswith(".csv"):
                [
                    txtFile.write(" ".join(row) + "\n")
                    for row in csv.reader(csvFile)
                ]
                txtFile.close()
            else:
                raise FileNotFoundError(f"Arquivo: {path_to_file} inválido")


# with open(path_to_file) as csvFile:
#             if path_to_file.endswith(".csv"):
#                 csvReader = csv.DictReader(csvFile)
#                 data = list(csvReader)
#             else:
#                 raise FileNotFoundError(f"Arquivo: {path_to_file} inválido")
