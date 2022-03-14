
const incomeForm = document.querySelector('#income-form');

const incomeAmount = document.querySelector('.income-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeDescription = document.querySelector('.income-description');
 
let income = 0; 

incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    income += parseInt(incomeAmount.value); 
    alert( "Total Income: " + income);

     
});
 
  