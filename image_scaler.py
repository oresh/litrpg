import os
import requests
from PIL import Image
from io import BytesIO


def download_and_scale_images(image_urls, output_folder, target_size):
    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    for url in image_urls:
        # Download the image
        response = requests.get(url)
        if response.status_code == 200:
            # Open the downloaded image using Pillow
            image = Image.open(BytesIO(response.content))

            # Scale the image to the target size
            image.thumbnail(target_size)

            # Extract the filename from the URL
            filename = url.split('/')[-1]

            # Save the scaled image to the output folder
            output_path = os.path.join(output_folder, filename)
            image.save(output_path)

            print(f"Image '{filename}' saved.")


# Example usage
image_urls = [
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654573360i/34403860.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587599606i/53246788.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516906901i/38203841.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1637439779i/59661342.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1530779698i/40723806.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677845225i/49337213.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570392491l/52528598.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622993331i/58272715.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438682042i/25342750.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550881974i/44091759.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607629179i/56243234.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533582627i/41059439.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550716618i/44078188.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542412364i/42847216.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511239006i/36633640.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552618106i/44433385.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588270657i/53302081.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617941878i/57673195.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544913887i/43243242.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582439679i/51589132.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554964789i/45019567.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1613358970i/57065516.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565722100l/51643271.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617058963i/57573709.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536768582i/41815341.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669589139i/63856410.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639204812i/59799181.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643043542i/60202412.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677667369i/123078687.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622865566i/58263078.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667309380i/63188324.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644399359i/60378765.jpg",
]
output_folder = 'source_covers'
target_size = (400, 400)

download_and_scale_images(image_urls, output_folder, target_size)
