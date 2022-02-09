import requests
import time


# Requisito 1
def fetch(url):
    try:
        for _ in range(20):
            response = requests.get(url)
            time.sleep(3)
        response.raise_for_status()
    except requests.HTTPError:
        ...
    except requests.Timeout:
        ...
    else:
        return response.text


# Requisito 2
def scrape_novidades(html_content):
    """Seu código deve vir aqui"""


# Requisito 3
def scrape_next_page_link(html_content):
    """Seu código deve vir aqui"""


# Requisito 4
def scrape_noticia(html_content):
    """Seu código deve vir aqui"""


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
