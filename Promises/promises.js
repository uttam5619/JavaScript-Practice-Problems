

const p= new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello world')
  }, 2000);
})

console.log(p); //-> Promise { <pending> }
/* Note:- console.log('hellow world') will get executed but the promise will remain pending,
This will hold the other tasked which was supposed to be execute either after the eventual completion
or failure of the asynchronous operation. 
*/

const p1= new Promise((resolve, reject) => {
    let flag= false
    setTimeout(() => {
        console.log('hello world from p1')
        flag= true
        if(flag){
            resolve('Promise resolved successfully')
        }
        else{
            reject('Promise rejected')
        }
    },5000)

})

p1.then((message) => {
    console.log('Inside then: ', message);
}).catch((error) => {
    console.log('Inside catch: ', error);
});

