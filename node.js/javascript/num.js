const isNaN123 = isNaN(123);
const isNaN234 = isNaN('234');
const isNaN235 = isNaN('235');
const isNaNHello = isNaN('hello');
/*
const 정의 한 값에 true,false,를 넣은 거임 */
console.log(isNaN123);
console.log(isNaN234);
console.log(isNaN235);
console.log(isNaNHello);

//const 연습 
const Hello =  ("joe cool");
console.log(Hello);
// 문자 개수 세기 연습
const string ='hello';
const string2='I dont want to study mathmatics so i am doing computer '

console.log('string:',string.length);
console.log('string2:',string2.length);
console.log(string2[10]);
//indexOf() 연습 
const string3 = 'hello';
console.log(string3.indexOf('hel'));
console.log(string3.indexOf('hi'));
// degree 연습 
const score="85";
let degree="";
if(score>=90){
    degree="A";
}
else if(score>=80){
    degree="B";
}
else if(score>=70){
    degree="C";
}
else {
    degree="F";
}
console.log("degree:",degree);
//switch문에 대해서 (case)는 숫자만 되는 것 같다 
const number =1;

let msg ="";
switch(number){
    case 1:
        msg="찾는  값이 아닙니다";
        break;
    case 2:
        msg=" 찾는 값입니다";
        break;
}
console.log(msg);
