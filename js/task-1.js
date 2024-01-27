const categories = document.querySelectorAll('.item');
const categoriesLength = categories.length;

console.log(`Кількість категорій: ${categoriesLength}`);

categories.forEach(cat => {
    const catTitle = cat.querySelector('h2').textContent;
    const catElements = cat.querySelectorAll('ul li');

    console.log(`Категорія: ${catTitle}`);
    console.log(`Кількість елементів: ${catElements.length}`);
})