from bs4 import BeautifulSoup
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
    list_urls = selector.xpath(path1 + path2).getall()
    return list_urls


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    next_link = selector.xpath(
        # "div.tec--list a.tec--btn::attr(href)"
        "/html/body/div[1]/main/div/div/div[1]/div[2]/a/@href"
    ).get()
    if not next_link:
        return None
    return next_link


# Requisito 4
def scrape_noticia(html_content):
    selector = Selector(html_content)

    url = selector.css('link[rel=canonical]::attr(href)').get()

    title = selector.css("h1.tec--article__header__title::text").get()

    timestamp = selector.css("time#js-article-date::attr(datetime)").get()

    writer = selector.css(
        ".z--font-bold *::text").get()
    if not writer:
        writer = None
    else:
        writer = writer.strip()

    shares_count = (
            selector.css("div.tec--toolbar__item::text").get()
        )

    if not shares_count:
        shares_count = 0
    else:
        shares_count = [
            int(s) for s in shares_count.split() if s.isdigit()
        ][0]

    comments_count = int(
        selector.css("button#js-comments-btn::attr(data-count)").get()) or 0

    # https://stackoverflow.com/questions/328356/extracting-text-from-html-file-using-python
    summary = BeautifulSoup(
        selector.css(
            'div.tec--article__body > p').getall()[0], 'html.parser'
            ).get_text()

    # https://www.journaldev.com/23763/python-remove-spaces-from-string
    sources_all = selector.css('div.z--mb-16 div a::text').getall()
    sources = [source.strip() for source in sources_all]

    categories_all = selector.css(
        "div#js-categories a::text").getall()
    categories = [categorie.strip() for categorie in categories_all]

    return {
            "url": url,
            "title": title,
            "timestamp": timestamp,
            "writer": writer,
            "shares_count": shares_count,
            "comments_count": comments_count,
            "summary": summary,
            "sources": sources,
            "categories": categories,
        }

# https://www.tecmundo.com.br/dispositivos-moveis/215327-pixel-5a-tera-lancamento-limitado-devido-escassez-chips.htm
# url1 = "https://www.tecmundo.com.br/mobilidade-urbana-smart-cities/"
# url2 = "155000-musk-tesla-carros-totalmente-autonomos.htm"
# print(scrape_noticia(fetch(url1 + url2)))


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
