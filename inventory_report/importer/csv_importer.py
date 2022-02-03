from inventory_report.importer.importer import Importer
import csv


class CsvImporter(Importer):
    @classmethod
    def import_data(cls, file):
        with open(file, "r") as f:
            if file.endswith(".csv"):
                data = csv.DictReader(f, delimiter=",", quotechar='"')
                lista = []
                for item in data:
                    lista.append(item)
                return lista
            else:
                raise ValueError("Arquivo inválido")
