from collections import deque


class Queue:
    def __init__(self):
        self._data = deque()

    def __len__(self):
        return len(self._data)

    def enqueue(self, value):
        if value in self._data:
            return None
        self._data.append(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        else:
            return self._data.popleft()

    def peek(self):
        if len(self._data) == 0:
            return None
        return self._data[0]

    def search(self, index):
        if index >= 0 and index <= len(self._data) - 1:
            return self._data[index]
        else:
            raise IndexError
