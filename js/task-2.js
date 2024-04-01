const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  // {
  //   url:
  //     'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   alt: 'Elephant Beside on Baby Elephant',
  // },
  // {
  //   url:
  //     'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   alt: 'Blue Geeen and Orange Parrot',
  // },
  // {
  //   url:
  //     'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   alt: 'Zebras on Zebra',
  // },
];

const imagesGallery = document.querySelector(".gallery");
// тут я зачіпаюсь за ul

const allPictures = images.map( image => {
  const elLi = document.createElement("li");
  // додаю елемент li
  const elImage = document.createElement("img");
  // додаю елемент img

  elImage.src = image.url;
  // визначаю посилання на IMG
  elImage.alt = image.alt;
  // визначаю значення alt

  elLi.appendChild(elImage);
  // додаю картинку до li
  imagesGallery.appendChild(elLi);
  // додаю елемент li до ul
});

imagesGallery.append(allPictures)
// дадаю значення (едементи) allPictures до imagesGallery (ul)

