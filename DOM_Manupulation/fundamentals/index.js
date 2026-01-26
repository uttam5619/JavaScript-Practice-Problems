
const list= document.getElementsByClassName('box');
console.log(list);

const List= Array.from(list);

List.forEach(item => {
    item.style.color = 'tomato'; 
    item.style.fontSize = '24px';
})

List[0].textContent = 'Hello World!';
List[1].textContent = 'Welcome to JavaScript!';
List[2].textContent = 'Have a great day!';


//_______________________________________________________________________

const greatGrandFather = document.getElementById('greatGrandFather');
const grandFather = greatGrandFather.children[1];
const father = grandFather.children[1];
const child = father.children[1];
const content = child.children[1];

greatGrandFather.addEventListener('click', () => {
    alert(greatGrandFather.id);
},true)
grandFather.addEventListener('click', (event) => {
    alert(grandFather.id);
    //event.stopPropagation();
},false)
father.addEventListener('click', (event) => {
    alert(father.id);
    //event.stopPropagation();
},false)
child.addEventListener('click', (event) => {
    alert(child.id);
    //event.stopPropagation();
},true)
content.addEventListener('click', (event) => {
    alert(content.id);
    //event.stopPropagation();
},true);


//_______________________________________________________________________

const object = {
    name: 'uttam',
    age: 24,
    address: {
        city: 'muzaffarpur',
        state: 'bihar'
    },
    hobbies: ['reading', 'coding', 'traveling'],
    contact: {
        email: 'uttamkumar@gmail.com',
        phone: ['123-456-7890','234-567-8901']
    }
}

const {name,age, contact: {email, phone: [primary_phone, secondary_phone]}} = object;

console.log(name);
console.log(age);
console.log(email);
console.log(primary_phone);
console.log(secondary_phone);