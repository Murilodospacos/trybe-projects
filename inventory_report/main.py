import sys
from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
from inventory_report.importer.xml_importer import XmlImporter
from inventory_report.inventory.inventory_refactor import InventoryRefactor


def main():
    if len(sys.argv) < 3:
        return sys.stderr.write("Verifique os argumentos\n")
    path = str(sys.argv[1])
    type = str(sys.argv[2])
    if path.endswith(".csv"):
        item = InventoryRefactor(CsvImporter)
        return sys.stdout.write(item.import_data(path, type))
    elif path.endswith(".json"):
        item = InventoryRefactor(JsonImporter)
        return sys.stdout.write(item.import_data(path, type))
    else:
        item = InventoryRefactor(XmlImporter)
        return sys.stdout.write(item.import_data(path, type))
