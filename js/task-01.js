const list  = document.querySelectorAll('li.item');

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll('#categories>li');

ul.forEach(elem =>{
    console.log(`Category: ${elem.firstElementChild.textContent},
    Elements: ${elem.lastElementChild.children.length}`);
});

