const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
let listItem = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
console.log(listItem);
listItem.forEach((li) => {
  list.appendChild(li);
});
console.log(list);
