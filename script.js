const one =document.getElementById('1');
const two=document.getElementById('2');
const three=document.getElementById('3');
const four=document.getElementById('4');
const five =document.getElementById('5');
const six=document.getElementById('6');
const seven =document.getElementById('7');
const eight=document.getElementById('8');
const nine=document.getElementById('9');
const zero=document.getElementById('0');
console.log(Number(one.innerText))
const plus=document.getElementById('plus');
const minus=document.getElementById('minus')
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');
const equal=document.getElementById('equal')

//const Obracket=document.getElementById('open');
//const Cbracket=document.getElementById('close');
const allClear=document.getElementById('ac');
const decimal=document.getElementById('decimal')
const back=document.getElementById('back')

const topBar=document.querySelector('.top-bar');
const bottomBar=document.querySelector('.bottom-bar');

let decimaladded=false;//VARIABLE FOR PREVENTING DOUBLE DECIMAL POINTS

//OBJECT FOR HANDLING OPERATORS

let operatorObj={
    added:false,
    value:''
}

//ADDS NUMBERS TO SCREEN

function addNumber(e){
   
    bottomBar.textContent+=e.target.textContent

}

//handling operations

function handleExp(e){
    let lengthy=topBar.textContent.length
    let op=topBar.textContent[lengthy-1]
    let topval=Number(topBar.textContent.slice(0,lengthy-1));
    let botval=Number(bottomBar.textContent);
    let ans
    if(op=='-'){
        ans=topval-botval;
    }else if(op=='+'){
        ans=topval+botval
    }else if(op=='*'){
        ans=topval*botval;
    }else{
        ans=topval/botval
    }
    decimaladded=false
    topBar.textContent=ans+e.target.textContent;
    bottomBar.textContent=''

}
//Add minus operator

function addMinus(e){
    //allows there to be negative integers
    if(bottomBar.textContent==''){
        addNumber(e)

    }else if(bottomBar.textContent!=='-'&&operatorObj.added==false){
        topBar.textContent=bottomBar.textContent+e.target.textContent;
       bottomBar.textContent='';
       operatorObj.added=true
    }else if(operatorObj.added==true){
        handleExp(e)
       
    }
}

//handles plus operator
function addPlus(e){
    if(operatorObj.added==false){
        topBar.textContent=bottomBar.textContent+e.target.textContent;
        bottomBar.textContent='';
        operatorObj.added=true
    }else{
        handleExp(e)
       
    }
}

//hanles division

function addDivide(e){
    if(operatorObj.added==false){
        topBar.textContent=bottomBar.textContent+e.target.textContent;
        bottomBar.textContent='';
        operatorObj.added=true
    }else{
        handleExp(e)
       
    }

}

//handles multiplication


function addMultiply(e){
    if(operatorObj.added==false){
        topBar.textContent=bottomBar.textContent+e.target.textContent;
        bottomBar.textContent='';
        operatorObj.added=true
    }else{
        handleExp(e)
       
    }
}

//handles adding decimal point
function addDecimal(e){
    console.log(decimaladded)
    if(bottomBar.textContent!==''&&bottomBar.textContent!=='-'&& decimaladded==false){
        decimaladded=true;
       
        addNumber(e)
        
    }
}

//handles the all-clear button

function aClear(e){
bottomBar.textContent='';
topBar.textContent='';
decimaladded=false;
operatorObj.added=false

}

//handles equal button

function addEqual(e){
    handleExp(e);
    topBar.textContent=topBar.textContent.slice(0,topBar.textContent.length-1)
    bottomBar.textContent=''
    operatorObj.added=false;
    decimaladded=false;


}

//handles backspace button

function backspace(e){
    if(bottomBar.textContent>=1){
    bottomBar.textContent=bottomBar.textContent.slice(0,bottomBar.textContent.length-1)
    }
}


//EVENT HANDLING

one.addEventListener('click',addNumber)
two.addEventListener('click',addNumber)
three.addEventListener('click',addNumber)
four.addEventListener('click',addNumber)
five.addEventListener('click',addNumber)
six.addEventListener('click',addNumber)
seven.addEventListener('click',addNumber)
eight.addEventListener('click',addNumber)
nine.addEventListener('click',addNumber)
zero.addEventListener('click',addNumber)
decimal.addEventListener('click',addDecimal)

plus.addEventListener('click',addPlus)
minus.addEventListener('click',addMinus)
divide.addEventListener('click',addDivide)
multiply.addEventListener('click',addMultiply)
allClear.addEventListener('click',aClear)
equal.addEventListener('click',addEqual)
back.addEventListener('click',backspace)