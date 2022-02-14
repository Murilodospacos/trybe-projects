from tech_news.database import search_news
from datetime import datetime


# Requisito 6
# https://stackoverflow.com/questions/8246019/case-insensitive-search-in-mongo
def search_by_title(title):
    data = search_news({"title": {"$regex": title, "$options": "i"}})
    response = []
    if not data:
        return []
    else:
        for new in data:
            response.append((
                new["title"], new["url"]
            ))
    return response


# Requisito 7
# Tive ajuda do Rogrigo Coin Instrutor
# Formatação das datas e uso do regex
def search_by_date(date):
    try:
        new_date = datetime.strptime(date, "%Y-%m-%d").date()
        data = search_news({"timestamp": {"$regex": str(new_date)}})
        response = list()
        for new in data:
            response.append((
                new["title"], new["url"]
            ))
    except ValueError:
        raise ValueError("Data inválida")
    else:
        return response


# Requisito 8
# Tive ajuda do Rogrigo Coin Instrutor
# Formatação das datas e uso do regex
def search_by_source(source):
    data = search_news(
        {"sources": {"$regex": source, "$options": "i"}})
    res = []
    for new in data:
        res.append((
            new["title"], new["url"]
        ))
    return res


# Requisito 9
# Tive ajuda do Rogrigo Coin Instrutor
# Formatação das datas e uso do regex
def search_by_category(category):
    data_new = search_news(
        {"categories": {"$regex": category, "$options": "i"}})
    resp = []
    for new in data_new:
        resp.append((
            new["title"], new["url"]
        ))
    return resp
