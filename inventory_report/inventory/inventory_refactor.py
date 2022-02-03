from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.inventory.inventory_iterator import InventoryIterator


class InventoryRefactor(InventoryIterator):
    def __init__(self, importer):
        self.importer = importer
        self.data = []

    def import_data(self, path, type):
        report_data = self.importer.import_data(path)

        self.data.extend(report_data)

        if type == "simples":
            return SimpleReport().generate(list(report_data))
        if type == "completo":
            return CompleteReport().generate(list(report_data))

    def __iter__(self):
        return InventoryIterator(self.data)
