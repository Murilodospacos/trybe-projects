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
    try:
        get_file = instance.search(position)
        read_file = txt_importer(get_file)
        data = {
            "nome_do_arquivo": get_file,
            "qtd_linhas": len(read_file),
            "linhas_do_arquivo": read_file,
        }
        return sys.stdout.write(str(data))
    except IndexError:
        return sys.stderr.write("Posição inválida")
