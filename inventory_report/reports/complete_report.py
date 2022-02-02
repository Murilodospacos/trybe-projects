import json
# from .simple_report import SimpleReport


class CompleteReport:
    @classmethod
    def generate(cls, inventory):
        data = json_reader(inventory)
        # simple_repo = SimpleReport.generate(data)
        factory = {}
        for item in data:
            if item["nome_da_empresa"] not in factory:
                factory[item["nome_da_empresa"]] = 1
            else:
                factory[item["nome_da_empresa"]] += 1

        # print(dir(factory))
        for chave, fac in factory.items():
            print(f"-{chave}: {fac}")

        # return (
        #         f"Produtos estocados por empresa: \n"
        #         f"- {factory[0]}\n"
        #         f"- {factory[1]}\n"
        #         f"- {factory}\n"
        # )


def json_reader(file):
    with open(file) as f:
        itens = json.load(f)
    return itens


print(CompleteReport.generate("inventory.json"))
