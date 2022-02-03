from inventory_report.importer.importer import Importer
import xml.etree.ElementTree as ET


class XmlImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if path.endswith(".xml"):
            tree = ET.parse(path)
            root = tree.getroot()
            xml_list = []
            for child in root:
                xml_dict = {}
                for i in range(len(child)):
                    xml_dict[child[i].tag] = child[i].text
                xml_list.append(xml_dict)
            return xml_list
        else:
            raise ValueError("Arquivo inválido")
