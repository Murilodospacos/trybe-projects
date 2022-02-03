from inventory_report.importer.importer import Importer
from json import load


class JsonImporter(Importer):
    @classmethod
    def import_data(cls, file):
        with open(file, "r") as f:
            if file.endswith(".json"):
                data = load(f)
                lista = []
                for item in data:
                    lista.append(item)
                return lista
            else:
                raise ValueError("Arquivo inválido")
