//Exercise 1 - Create an array of your 6 favorite things (or more)

let favItems = ['Food', 'Dogs', 'Energy Drinks', 'Sleep', 'Plants'];

let secondFav = favItems[1];
console.log("My second favorite thing is " + secondFav);
//Exercise 2 - Access your most favorite thing from the array and show it on the page

let myFavlist = document.getElementById('my-favorite');
myFavlist.innerHTML = `<li>${secondFav}</li>`;

//Exercise 3 - change your favorite thing and show it on the page

myFavlist[3] = "Traveling";
myFavlist.innerHTML = `<li>${myFavlist[3]}</li>`;
myFavlist.innerHTML = `<li>${myFavlist[4]}</li>`;

//Exercise 4 - Use the length property to show the number of items in your array

let total = document.getElementById('total');
total.textContent = favItems.length;

/*Exercise 5 - Iterate through the array and show it on the page using:
 1. A for loop with the of keyword
 2. Edit the for loop to use the in keyword to show the index numbers
 */

let allFavorites = document.getElementById('all-favorites');
for (let favorite of favItems) {
    allFavorites.innerHTML += `<li>${favorite}</li>`;
}


/*Exercise 6 - Iterate through the array and show it on the page
1. Comment out the for loop in exercise 5
2. Iterate through the array and show it on the page using
the .forEach() method.
*/




//Exercise 7 - Concatenation of arrays


//Exercise 8 - Push a new item to your array and show the updated array on the page


//Exercise 9 - Pop an item from your array and show the updated array on the page



/******************* Nested array practice for advanced students *****************/

/*let nested = document.getElementById('nested');
let desserts = [
    'oranges',
    'apples',
    ['pie', 'tart'],
    ['ice cream', 'cake', 'candy'],
    ['soda', 'cream']
]

desserts.forEach(function (item) {
    nested.innerHTML += `<li>${item}</li>`;
});

let looped = document.getElementById('nested-looped');

let yummies = [
    'chilies',
    'favorites',
    ['pie', 'tart'],
    ['ice cream', 'cake', 'candy'],
    ['soda', 'cream'],
    ['curry noodles', 'shrimp']
]

/*
for (let arrays of yummies) {
    if (arrays instanceof Array) {
        for (let item of arrays) {
            looped.innerHTML += `<li>${item}</li>`;
        }
    }else {
        looped.innerHTML += `<li>${arrays}</li>`;
    }
}
*/
/*
yummies.forEach(function (arrays) {
    if (arrays instanceof Array) {
        arrays.forEach(function (item) {
            looped.innerHTML += `<li>${item}</li>`;
        });
    } else {
        looped.innerHTML += `<li>${arrays}</li>`;
    }
});*/