from collections.abc import Iterator


class InventoryIterator(Iterator):
    def __init__(self, list):
        self.i = 0
        self.list = list
 
    def __next__(self):
        if self.i == len(self.list):
            raise StopIteration
        else:
            item = self.list[self.i]
            self.i += 1
            return item
