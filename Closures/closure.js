

function outer(){
    let x=10;
    return function inner(){
        console.log(++x);
    }
}

let a=outer();
let b=outer();

a(); //11
a(); //12
b(); //11
a(); //13