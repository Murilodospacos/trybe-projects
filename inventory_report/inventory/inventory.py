from csv import DictReader
from json import load
import xml.etree.ElementTree as ET
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def read_files(cls, path, file):
        if path.endswith(".csv"):
            return DictReader(file, delimiter=",", quotechar='"')
        elif path.endswith(".json"):
            return load(file)
        else:
            tree = ET.parse(path)
            root = tree.getroot()
            xml_list = []
            for child in root:
                xml_dict = {}
                for i in range(len(child)):
                    xml_dict[child[i].tag] = child[i].text
                xml_list.append(xml_dict)
        return xml_list

    @classmethod
    def import_data(cls, path, type):
        with open(path, "r") as f:
            items = cls.read_files(path, f)
            if type == "simples":
                result = SimpleReport().generate(list(items))
            if type == "completo":
                result = CompleteReport().generate(list(items))
        return result
