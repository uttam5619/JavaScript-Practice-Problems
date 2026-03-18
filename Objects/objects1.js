/*
const obj={
    name:"test",
    age:20,
    message:function(){
        console.log("Hello World");
        return true;
    }
}

console.log(obj.message)
*/

/*
const obj={
    name:"test",
    age:20,
    designation:"developer",
}
console.log(obj.hasOwnProperty("address"))
*/


// find the count of uppercase and lowercase characters in the string
const str="HellO WoRld";
function countCharacters(str){
    let uppercaseCount=0;
    let lowercaseCount=0;
    for(s of str){
        if(s>='A' && s<='Z'){
            uppercaseCount++;
        }else if(s>='a' && s<='z'){
            lowercaseCount++;
        }      
    }
    return {uppercaseCount,lowercaseCount};
}

console.log(countCharacters(str))


// find the count of positive, negative and zero in the array
const arr=[1,2,3,-1,-2,0,0,0,0,0,4,7,88,9,-5,-6];
function countNumbers(arr){
    let positiveCount=0;
    let negativeCount=0;
    let zeroCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positiveCount++;
        }else if(arr[i]<0){
            negativeCount++;
        }else{
            zeroCount++;
        }
    }
    return {positiveCount,negativeCount,zeroCount};              
}
console.log(countNumbers(arr))