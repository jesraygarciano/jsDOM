// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document);
// console.log(document.head);
// document.title = 423;
// console.log(document.title);
// console.log(document.domain);
// console.log(document.all);
// console.log(document.all(25));
// console.log(document.all(10));
document.all(10).textContent = 'Gart';
// console.log(document);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerHTML = 'Gartwtf';
headerTitle.textContent = 'Hello';
headerTitle.innerHTML = '<h3>Gart</h3>';

