// function 값 선언 
function PrintMessage(message){
    console.log(message)
}

PrintMessage("bye");

const PrintWelcome= function(){
    console.log("hello");

}
PrintWelcome(); //printWelcom 함수 호출 
const pm =PrintMessage;
pm('good afternoon'); // good afternoon이 메세지로 들어감 


const SumAndPrint = function SumAndPrint(a,b){
    const result = a+b;
    return `결과는 ${result}입니다.`
    
}
const result =  SumAndPrint(10,20);// 함수에 return 값이 들어감 
console.log(result);

const fruitList =[
    {name: 'banana' , from: 'philipins' , cost:3000 , tax: 5500.1},
    {name: 'orange', from: 'california' , cost:2000 , tax: 4300},
    {name: 'peer', from: 'korea', cost:1000 , tax:0 },

];
const plus = (a,b) => a+b ;
     
fruitList.forEach((fruit) => {
    console.log(`${fruit.from}`),
    console.log(`${fruit.name}`),
    console.log(`total: ${ plus (fruit.cost ,fruit.tax )}`);
   
   

});



