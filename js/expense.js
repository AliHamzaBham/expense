 
const expenseForm = document.querySelector('#expense-form');

const expenseAmount = document.querySelector('.expense-amount');
const expenseTitle = document.querySelector('.expense-title');
const expenseDescription = document.querySelector('.expense-description');

let expense = 0; 

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    expense += parseInt(expenseAmount.value); 
    alert("Total expense:" + expense) ;
    
});
 