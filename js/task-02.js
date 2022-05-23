const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liEl = document.querySelector("#ingredients");
console.log(liEl);

const elements = ingredients.map(option =>{
  const createliEl = 
  document.createElement("li");
  createliEl.textContent = option; 
  createliEl.classList.add("item");
  return createliEl;
  
});
liEl.append(...elements);

