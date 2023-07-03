from bs4 import BeautifulSoup

def parse_table_rows(html):
    soup = BeautifulSoup(html, 'html.parser')
    rows = soup.find_all('tr')
    props = {}

    for row in rows:
        name = row.find(class_='name').text.strip()
        value_div = row.find(class_='default')
        value = value_div.text.strip()

        if value_div.find('textarea'):
            value = value_div.find('textarea').text.strip()

        props[name] = value

    return props


# Example usage
file_path = 'C:\\Users\\camer\\OneDrive\\Desktop\\chess\\test.html'

with open(file_path, 'r') as file:
    html_content = file.read()
# Example usage

html = html_content

props = parse_table_rows(html)
for name, value in props.items():
    print(f'{name}={{{value}}}')
