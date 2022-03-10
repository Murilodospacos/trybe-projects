from collections import deque


class Queue:
    def __init__(self):
        self._data = deque()

    def __len__(self):
        return len(self._data)

    def is_empty(self):
        return self._data == []

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if not self.is_empty():
            return self._data.popleft()
        else:
            return None

    def peek(self):
        if self.is_empty():
            return None
        return self._data[0]

    def search(self, index):
        if index >= 0 and index <= len(self._data) - 1:
            return self._data[index]
        else:
            raise IndexError("Índice Inválido")
