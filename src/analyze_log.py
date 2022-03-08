from collections import Counter
import csv


def data_read_csv(path):
    with open(path) as csvFile:
        if path.endswith(".csv"):
            csvReader = csv.reader(csvFile)
            data = list(csvReader)
            return data
        else:
            raise FileNotFoundError(f"Arquivo: {path} inválido")


# req 1.1
def customer_most_requested_dish(path, nome):
    data = data_read_csv(path)
    nomes = [item[1] for item in data if item[0] == nome]
    # https://thecleverprogrammer.com/2021/08/30/python-program-to-count-most-frequent-words-in-a-file/
    res = Counter(nomes).most_common(1)[0][0]
    return res


# req 1.2
def order_type_quantity(path, nome, pedido):
    data = data_read_csv(path)
    nomes = len(
        [item[1] for item in data if item[0] == nome and item[1] == pedido]
    )
    return nomes


# req 1.3
def customer_dishes_never_asked(path, nome):
    data = data_read_csv(path)
    all_dishes = set([dishe[1] for dishe in data])
    dishes = list(frozenset([item[1] for item in data if item[0] == nome]))[0]
    res = set([item for item in all_dishes if item != dishes])
    return res


# req 1.4
def customer_never_went(path, nome):
    data = data_read_csv(path)
    all_dishes = set([dishe[2] for dishe in data])
    dishes = list(frozenset([item[2] for item in data if item[0] == nome]))[0]
    res = set([item for item in all_dishes if item != dishes])
    return res


def analyze_log(path_to_file):
    data_read_csv(path_to_file)
    response1 = customer_most_requested_dish(path_to_file, "maria")
    response2 = order_type_quantity(path_to_file, "arnaldo", "hamburguer")
    response3 = customer_dishes_never_asked(path_to_file, "joao")
    response4 = customer_never_went(path_to_file, "joao")
    print(response3)
    with open("data/mkt_campaign.txt", "w") as file:
        file.write(f"{response1}\n{response2}\n{response3}\n{response4}\n")
    file.close()
