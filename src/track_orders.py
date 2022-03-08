from collections import Counter

# Tive ajuda do Mauricio leiri para entender esse requisito


# [[customer, order, day], [customer, order, day]]
class TrackOrders:
    def __init__(self):
        self.lista_pedidos = []

    # https://www.analyticsvidhya.com/blog/2021/08/explore-the-magic-methods-in-python/#:~:text=__len__%20magic%20method%20is%20used%20to%20find%20the,attribute%20which%20is%20usually%20containers.&text=When%20we%20invoke%20the%20len,the%20__len__%20method.
    def __len__(self):
        return len(self.lista_pedidos)

    def add_new_order(self, costumer, order, day):
        order_new = [costumer, order, day]
        self.lista_pedidos.append(order_new)

    def get_most_ordered_dish_per_costumer(self, costumer):
        nomes = [item[1] for item in self.lista_pedidos if item[0] == costumer]
        # https://thecleverprogrammer.com/2021/08/30/python-program-to-count-most-frequent-words-in-a-file/
        res = Counter(nomes).most_common(1)[0][0]
        return res

    def get_never_ordered_per_costumer(self, costumer):
        all_dishes = set([dishe[1] for dishe in self.lista_pedidos])
        dishes = list(
            frozenset(
                [item[1] for item in self.lista_pedidos if item[0] == costumer]
            )
        )[0]
        res = set([item for item in all_dishes if item != dishes])
        return res

    def get_days_never_visited_per_costumer(self, costumer):
        all_dishes = set([dishe[2] for dishe in self.lista_pedidos])
        dishes = list(
            frozenset(
                [item[2] for item in self.lista_pedidos if item[0] == costumer]
            )
        )[0]
        res = set([item for item in all_dishes if item != dishes])
        return res

    def get_busiest_day(self):
        days = [item[2] for item in self.lista_pedidos]
        # https://thecleverprogrammer.com/2021/08/30/python-program-to-count-most-frequent-words-in-a-file/
        res = Counter(days).most_common(1)[0][0]
        return res

    def get_least_busy_day(self):
        days = [item[2] for item in self.lista_pedidos]
        # https://thecleverprogrammer.com/2021/08/30/python-program-to-count-most-frequent-words-in-a-file/
        res = Counter(days).most_common()[-1][0]
        return res

    def get_order_frequency_per_costumer(self, param1, param2):
        pass
