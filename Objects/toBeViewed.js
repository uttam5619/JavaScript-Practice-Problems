/*
function Parent() {
    this.name = 'Parent';
}
Parent.prototype.getName = function() {
    return this.name;
};

function Child() {
    this.name = 'Child';
}
Child.prototype = Object.create(Parent.prototype);

const child = new Child();
console.log(child.getName());
*/
