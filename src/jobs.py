import csv
from functools import lru_cache


@lru_cache
def read(path):
    # lê os dados
    with open(path) as file:
        reader_file = csv.DictReader(file, delimiter=",", quotechar='"')
        data = []
        for row in reader_file:
            data.append(row)
    return data


"""Reads a file from a given path and returns its contents
    Parameters
    ----------
    path : str
        Full path to file
    Returns
    -------
    list
        List of rows as dicts
    """
