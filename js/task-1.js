const divCategories = document.querySelector("#categories");
const itemEl = divCategories.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((category) => {
  const titleCategories = category.querySelector("h2").textContent;
  const totaElements = category.querySelectorAll("li");
  console.log(`Category : ${titleCategories}`);
  console.log(`Elevents : ${totaElements.length}`);
});
