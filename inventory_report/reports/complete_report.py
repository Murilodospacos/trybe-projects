from inventory_report.reports.simple_report import SimpleReport


class CompleteReport():
    @classmethod
    def generate(cls, inventory):
        data = inventory
        simple_repo = SimpleReport.generate(data)
        factory = {}
        for item in data:
            if item["nome_da_empresa"] not in factory:
                factory[item["nome_da_empresa"]] = 1
            else:
                factory[item["nome_da_empresa"]] += 1
        response = ''
        for chave, fac in factory.items():
            response += f"- {chave}: {fac}\n"
        return simple_repo + "\nProdutos estocados por empresa: \n" + response
