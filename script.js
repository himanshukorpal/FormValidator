const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password12El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')


let isValid = false
const validateForm = () => {
  // Using Constraint Api
  isValid = form.checkValidity();
  //Style main message for an Error
  // message.textContent='Please fill out all fields'
  // message.style.color = 'red'
  // messageContainer.style.borderColor= 'red'
  
}

const processFormdata =(e) =>{
  e.preventDefault()
  //Validate form
  validateForm()
}


//Event Listyener

form.addEventListener('submit', processFormdata)

