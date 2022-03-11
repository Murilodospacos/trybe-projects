# from ting_file_management.queue import Queue
from ting_file_management.file_management import txt_importer
import sys


# Tive ajuda do Mauricio
def process(path_file, instance):
    instance.enqueue(path_file)
    file = txt_importer(path_file)
    data = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(file),
        "linhas_do_arquivo": file,
    }
    return sys.stdout.write(str(data))


def remove(instance):
    if len(instance) == 0:
        return sys.stdout.write("Não há elementos\n")

    path_file = instance.dequeue()
    return sys.stdout.write(f"Arquivo {path_file} removido com sucesso\n")


def file_metadata(instance, position):
    """Aqui irá sua implementação"""


# if __name__ == "__main__":
#     project = Queue()
#     print(remove(project))
    # print(process("statics/arquivo_teste.txt", project))
