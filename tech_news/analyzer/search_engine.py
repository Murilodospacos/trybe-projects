from tech_news.database import search_news


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
def search_by_date(date):
    """Seu código deve vir aqui"""


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
