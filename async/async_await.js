
console.log('Get started');

async function getData() {

    const p= new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = 'Here is your data';
            resolve(data);
        },5000)
    })
    const result = await p;

    for(let i = 0; i < 5; i++) {
        console.log('Processing other tasks', i);   
    }

    return result;
}

const dataPromise = getData();

dataPromise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
});



async function returnData(){
    return 'true'; // new Promise.resolve('true');
}

const p = returnData();
p.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error('Error:', error);
});
