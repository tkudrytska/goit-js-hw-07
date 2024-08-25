const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const title = item.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const elements = item.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
});



