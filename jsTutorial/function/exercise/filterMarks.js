filterMarks();

function filterMarks(){
    const marks=[30,40,97,89,90,91]
    const filtered = marks.filter((value)=>{
        return value>=90;
    })
    console.log(filtered)
} 

let n = prompt("Enter the number");
const arr= new Array();
for(let i = 0; i<n; i++){
    arr[i] = i+1;
}
console.log(arr)
const totalSum = arr.reduce((res,current)=> res+current)
console.log("The total sum of array: "+ arr +" is "+totalSum);

const totalProd = arr.reduce((res,current)=> res*current)
console.log("The product of array: "+ arr +" is "+totalProd);
