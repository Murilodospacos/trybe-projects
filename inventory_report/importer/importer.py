from abc import ABC, abstractmethod


class Importer(ABC):
    @abstractmethod
    def import_data(self, fileName):
        # https://airbrake.io/blog/python/python-exception-handling-notimplementederror
        # Quando a implementação ainda está faltando
        raise NotImplementedError
