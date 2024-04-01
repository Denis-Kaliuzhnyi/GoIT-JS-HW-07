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
];

const imagesGallery = document.querySelector(".gallery");
const container = document.createDocumentFragment();

const allPictures = images.forEach((image) => {
  const elLi = document.createElement("li");
  const elImage = document.createElement("img");

  elImage.src = image.url;
  elImage.alt = image.alt;

  elLi.appendChild(elImage);
  container.appendChild(elLi);
});

imagesGallery.append(container);

// виходить, потрібно створити ще один контейнер, щоб до нього все зібрати, а потім вже його вставляти у ДОМ-дерево?*
// Щось я пропустив "const container = document.createDocumentFragment();" - цей момент (я всі лекції та практику передивляюсь), а в якій лекції було про це???*

