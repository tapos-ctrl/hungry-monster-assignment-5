fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => display(data));



const display = foodItem => {
    const item = document.getElementById('foodItem');
    for (let i = 0; i < foodItem.length; i++) {
        const items = foodItem[i];
        const ul = document.createElement('li');
        ul.innerText =items.strMeal;
        item.appendChild(li);
    }
}