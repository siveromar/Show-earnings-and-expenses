/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var earning;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earning = [0, 0, 0, 0, 0];
let element_total = document.getElementById('total');
element_total.innerText = earning.reduce((a,b) => a+b, 0);


document.getElementById('add_number').addEventListener('click', (event) => {
  earning.push(getNumberOrString(document.getElementById('earning').value));
  earning.shift();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = earning.reduce((a,b) => a+b, 0);

});
