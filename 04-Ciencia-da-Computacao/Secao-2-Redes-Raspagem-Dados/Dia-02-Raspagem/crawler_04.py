import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

response = requests.get(url)
selector = Selector(text=response.text)

title = selector.css("h1::text").get()
price = selector.css(".price_color::text").get()
price_without_symbol = price.replace("Â£", "")
description = selector.css("#product_description + p::text").get()
img_url = selector.css(".item.active img::attr(src)").get()
stock = selector.css(".product_main .availability::text").re_first("\d")


print(f"{title}, {price_without_symbol}, {description}, {img_url}, {stock}")
