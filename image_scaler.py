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
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669162155i/63645843.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650996799i/60888209.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609069628i/55559974.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667961181i/63260494.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620320337i/57964597.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643764782i/60288155.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571424644i/48501084.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646091646i/60526795.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671302766i/69621499.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658172758i/61588227.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589518349i/53415675.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569673909l/51938719.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658378414i/61637090.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614114118i/57189884.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622362898i/58199715.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633627443i/59236334.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620525458i/57968407.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632799061i/59089569.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610785419i/56683041.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619486020i/57866482.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660857215i/62015939.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609238529i/54896925.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593386594i/54310257.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598478055i/55134991.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657091322i/61400806.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1576541059i/49340483.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654569997i/37654736.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551728924i/44244559.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1458931124i/29618814.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1502183831i/35962125.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1530687432i/40715131.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673898972i/78728163.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661024493i/62033719.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1538183558i/42092378.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663541195i/62632697.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610436243i/56644452.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659823724i/41033158.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635786993i/59513691.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654297527i/61220616.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548677535i/43726809.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609804807i/56557030.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1564223577l/52284628.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1613516557i/57102038.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629205376i/58793351.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645292815i/60451926.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625234729i/58473013.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619576685i/57880084.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633135638i/59128157.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679956501i/123520444.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522484721i/39689323.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638919471i/59770974.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1496116466i/35192342.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1486921647i/34234639.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654571019i/30558257.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549665420i/43895146.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542890623i/42928898.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583703351i/52220756.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658223182i/44420185.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666858030i/63110570.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1499131662i/35596177.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593396004i/54311585.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508855442i/36469357.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641425509i/60042260.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661063817i/62037416.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588252360i/53300479.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648124308i/60682858.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646466773i/60134321.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586313389i/53039345.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1495361523i/35181930.jpg"
]
output_folder = 'source_covers'
target_size = (400, 400)

download_and_scale_images(image_urls, output_folder, target_size)
