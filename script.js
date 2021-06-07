const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password12El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')


let isValid = false
let passwordsMatch = false
const validateForm = () => {
  // Using Constraint Api
  isValid = form.checkValidity();
  //Style main message for an Error
  if(!isValid){
    message.textContent='Please fill out all fields'
    message.style.color = 'red'
    messageContainer.style.borderColor= 'red'
    // to save time not to execute further code
    return
  } 
  //check to see if password match
  if(password1El.value === password12El.value){
    passwordsMatch = true
    password1El.style.borderColor = 'green'
    password12El.style.borderColor = 'green'
  } else {
      passwordsMatch = false
      message.textContent = "Make Sure Password Match.."
      message.style.color = 'red'
      messageContainer.style.borderColor ='red';
      password1El.style.borderColor = 'red'
      password12El.style.borderColor = 'red'
      return
  }

  if(isValid && passwordsMatch){
      message.textContent ="Sucessfull Register"
      message.style.color = 'green'
      messageContainer.style.borderColor = 'green'
  }
}
const storeFormData = () => {
  const user ={
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.password,
    password: form.password.value
  }
  //send to server
  console.log(user)
}

const processFormdata =(e) =>{
  e.preventDefault()
  //Validate form
  validateForm()
  if(isValid && passwordsMatch){
    storeFormData()
  }
}


//Event Listyener

form.addEventListener('submit', processFormdata)

