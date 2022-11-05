import requests

url = "https://api.github.com/users"

response = requests.get(url)
users = response.json()

for user in users:
    print(f"User: {user['login']} - {user['url']}")
