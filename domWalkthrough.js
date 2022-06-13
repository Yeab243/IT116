console.dir(document);
// Gives the domain of the web page.

console.log(document.domain);
// Gives the URL of the web page.
console.log(document.URL); 

// access the title element
console.log(document.title);
console.log(document.doctype);

// helps to see what is in the head 
console.log(document.head);

// Logging the document body in the console
console.log(document.body);

// logging the document content in the console
console.log(document.all);

// Outputs the line with index of the given line 
console.log(document.all[10]);

// this changes the header
document.all[10].textContent = "I just changed the header!";

// Document Object Model can scan the tree for elements. 
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// Access the DOM with GETELEMENTBYID //////////////////
console.log(document.getElementById('header-title'));

// Creation of an object variable using the document function.
let headerTitle = document.getElementById('header-title');

// Using the object variable to change the text of the header-title id
headerTitle.textContent = "Im Changing the Header";
headerTitle.innerText = "I Am Changing It Again.";
headerTitle.style.color = 'hotpink'; 

/////////////////GetElementByClassName///////////

// Using getElementByClassName to select list-group-item and giving a varaible to item
var items = document.getElementsByClassName('list-group-item');

//This is the log for all items
console.log(items);
console.log(items[1]); 

// Styling Property Attributes through the variable.
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'Alpha Kappa Alpha';
items[1].style.color = 'green';

items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'Oooop - Coleman Love';
items[0].style.color = 'white';

// items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'Zee Phiiii - Zeta Phi Beta';
items[2].style.color = 'white';

// This is a counter which loops all the way until 10.
for (let i = 1; i <= 10; i++) {
     console.log(i);
}

for (let i = 0; i <=20; i +=2) {
    console.log(i);
}

//This counter looks all the way until 100 
for (let i = 100; i >= 0; i -=2) {

    console.log(i);

}

// incrementing a value 
for (var i = 0; i < items.length; i++) {

items[i].style.backgroundColor = 'grey';
items[i].textContent = 'I Changed The List';
items[i].style.color = 'green';

}

//Creating an array
const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];
for(let i = 0; i < myDiamonds.length; i++){
    console.log(i, myDiamonds[i]);

}

//////////////////////////////////////GetElementByTagName////////////////////////////////////////

var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

//Styling property Attributes through the variable
li[1].textContent = "Hello 2";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'crimson';
li[1].style.color = 'white';

// Declaring the variable and checking the length of the list and also incrementing through each particular item// 
for(var i = 0; i < li.length; i++){

     li[i].style.backgroundColor = 'lightgrey';
     li[i].textContent = 'Changed Text'; 

}

/////////////////////////////////Query Selector/////////////////////////////////////////////

// Selecting main-header by ID using query selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';

//select input and change the input box text
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";

// select button and change the text to SEND
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 


// select the first item and change the text color to red
var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// Declaring the last item of the list and change the text color
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';

//////////////////////////////////QuerySelectorALL//////////////////////////////////

// The variable name connect to title in html
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Yeabsira'; 

// select all odd listed-items 
var odd = document.querySelectorAll('li:nth-child(odd)')
// select all even listed-items
var even = document.querySelectorAll('li:nth-child(even)')

// for loop iterating through both created variables
for (var i = 0; i <odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}