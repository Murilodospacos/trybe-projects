from ting_file_management.file_management import txt_importer


def exists_word(word, instance):
    lista = list()
    for index in range(len(instance)):
        path_file = instance.search(index)
        content_file = txt_importer(path_file)
        ocurrencies_list = list()
        for index, line in enumerate(content_file):
            if word.lower() in line.lower():
                ocurrencies_list.append({"linha": index + 1})
        if ocurrencies_list:
            lista.append(
                {
                    "palavra": word,
                    "arquivo": path_file,
                    "ocorrencias": ocurrencies_list,
                }
            )
    return lista


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
