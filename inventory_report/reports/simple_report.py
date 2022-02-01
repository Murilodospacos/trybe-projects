from datetime import date

# from datetime import datetime


class SimpleReport:
    @classmethod
    def generate(cls, inventory):
        factory = {}
        fabrication_date = []
        validate_date_valid = []
        data = inventory
        for item in data:
            split_fabrication_date = item["data_de_fabricacao"].split("-")
            fabrication_date.append(
                date(
                    int(split_fabrication_date[0]),
                    int(split_fabrication_date[1]),
                    int(split_fabrication_date[2]),
                )
            )

            split_validate_date = item["data_de_validade"].split("-")
            validate_date = date(
                int(split_validate_date[0]),
                int(split_validate_date[1]),
                int(split_validate_date[2]),
            )

            if validate_date > date.today():
                validate_date_valid.append(validate_date)

            if item["nome_da_empresa"] not in factory:
                factory[item["nome_da_empresa"]] = 1
            else:
                factory[item["nome_da_empresa"]] += 1

        return (
            f"Data de fabricação mais antiga: {min(fabrication_date)}\n"
            f"Data de validade mais próxima: {min(validate_date_valid)}\n"
            f"Empresa com maior quantidade de produtos "
            f"estocados: {max(factory)}\n"
        )
