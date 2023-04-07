let num1= 3;
let num2= 4;
switch (num1){
    case 1:
        num1+=6;
        break;
    case 2:
        num1+=7;
        break;
    case 3:
        num1+=8;
        break;
    default:
        num1+=10;
}
const multiply=(num1,num2) => {
    num1+num2
}
multiply(2,4)

const carinfo={
    type:'toyota',
    warning:'1 year'
    
}

const data={
    name:'thain',
    age:33,
    hobby:'swimming',
    car:carinfo,
    walk: ()=>{
        alert("Thazin is swimming....")
    },
    mul: (num1,num2)=>{
        num1*num2
    }
}
data.name
data.walk()

data['name']