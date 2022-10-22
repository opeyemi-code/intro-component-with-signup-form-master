//selectors for all elements needed
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const emailField = document.getElementById('email');
const emailErrorIcon = document.querySelector('.email-error-icon');


form.addEventListener('submit', inputChecker);

//function to check if the inputFields are empty

function inputChecker (e){
  e.preventDefault();
  
  inputs.forEach((input)=>{
    
    const inputValue = input.value.trim();
    const inputName = input.getAttribute('name');
    
    if(inputValue === ""){
      
      sayErrorMessage();
    }
    else{

      successMessage();
    }
    
    // Function for the error message if the input field(s) is/are empty
    
    function sayErrorMessage(){
      
      input.style.borderColor = 'red';

      input.parentElement.nextElementSibling.classList.add('error-icon');
      
      input.parentElement.nextElementSibling.nextElementSibling.innerHTML = `<em>${inputName} cannot be empty</em>`;
      
      input.parentElement.nextElementSibling.nextElementSibling.classList.add('error-msg');
    }
    
        // Function for the success message if the input field(s) is/are empty

    function successMessage (){
      
      input.style.borderColor = 'green';
      
      input.parentElement.nextElementSibling.classList.remove('error-icon');
      
      input.parentElement.nextElementSibling.nextElementSibling.classList.remove('error-msg');
    }
  })
  
    
  isEmailChecker();
}

//Function that checks for the validity of the email value

function isEmailChecker(emailValue){
  
    const emailFieldValue = emailField.value.trim();

  const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  const emailTest = regEx.test(emailFieldValue);
  
  if (emailFieldValue.length > 0 && !emailTest){
    
    emailField.parentElement.nextElementSibling.nextElementSibling.innerHTML = `<em>Looks like this is not an email</em>`;
    
    emailField.parentElement.nextElementSibling.nextElementSibling.classList.add('error-msg');
    
    emailField.classList.add('incorrect-email');

    emailField.setAttribute('style', 'border-color: red');
    
    emailErrorIcon.style.display ='block';
  }
  else{
    if(emailFieldValue.length > 0 && emailTest){
      
      emailErrorIcon.style.display ='none';
      
    emailField.classList.remove('incorrect-email');
    }
  }
}
