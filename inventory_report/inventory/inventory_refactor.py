from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.inventory.inventory_iterator import InventoryIterator



class InventoryRefactor:
    @classmethod
    def import_data(cls, path, type):
        with open(path, "r") as f:
            items = cls.read_files(path, f)
            if type == "simples":
                result = SimpleReport().generate(list(items))
            if type == "completo":
                result = CompleteReport().generate(list(items))
        return result
