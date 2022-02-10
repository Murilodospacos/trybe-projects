import requests
from parsel import Selector
import time


# Requisito 1
def fetch(url):
    try:
        for _ in range(5):
            response = requests.get(url)
            time.sleep(3)
        response.raise_for_status()
    except (requests.HTTPError, requests.Timeout):
        return None
    else:
        return response.text


# Requisito 2 - Tive ajuda do Mauricio / Explicação Xpath
def scrape_novidades(html_content):
    selector = Selector(html_content)
    path1 = "/html/body/div[1]/main/div/div/"
    path2 = "div[1]/div[2]//div/article/div/h3/a/@href"
    list_urls = selector.xpath(path1+path2).getall()
    return list_urls


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    next_link = selector.css(
            "div.tec--list a.tec--btn::attr(href)"
        ).get()
    if not next_link:
        return None
    return next_link


# Requisito 4
def scrape_noticia(html_content):
    """Seu código deve vir aqui"""


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
