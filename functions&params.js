const fname = 'justin';
const youtuber = 'youtuber';

///older
function toUpper(text) {
    const upperCase = text.toUpper();
    console.log(upperCase);
    

}

toUpper (fname);
toUpper(youtuber);


function adder (num1, num2) { 
    console.log(num1 + num2);
}
adder(10, 5);

///modern
const toUpperCase = function (){
    asasdff
}


///es7
const adder =() => {
    asafd
}


/// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

function adder (var1, var2) {
    return var1 + var2;
}
adder(10, 5);


let x = myFunction(4, 3);   /// Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             /// Function returns the product of a and b
}
///12


let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); /// Hello, John

let userName1 = 'John';

function showMessage() {
  userName1 = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); /// John before the function call

showMessage();

alert( userName ); /// Bob, the value was modified by the function

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); /// Ann: Hello! (*)
  showMessage('Ann', "What's up?"); /// Ann: What's up? (**)

///https://javascript.info/function-basics