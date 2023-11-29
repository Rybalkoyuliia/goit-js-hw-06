const categories = document.querySelectorAll(".item");
let totalItem = categories.length;
console.log(`Number of categories: ${totalItem}`);

categories.forEach((item) => {
  const category = item.querySelector("h2");
  console.log(`Category: ${category.textContent}`);
  let elements = item.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
