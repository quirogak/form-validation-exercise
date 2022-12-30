
const validateForm = (() => {

    const form = document.querySelector(".form-container")
    const email = document.getElementById("email")
    const country = document.getElementById("country")
    const zipCode = document.getElementById("zip-code")
    const password = document.getElementById("password")
    const passwordConfirm = document.getElementById("password-confirm")

    const checkInputs = (e) => {

     console.log(e.target.id)

     const emailErrorSpan = document.querySelector("#email + span.error")

     const emailError = () => {

        if (email.validity.valueMissing){

            emailErrorSpan.textContent = "Please enter an email address"
        }
        else if (email.validity.typeMismatch){

            emailErrorSpan.textContent = "The entered value isn't an email address"

        }
        else if (email.validity.tooShort) {
            emailErrorSpan.textContent = "The entered email should be at least "+email.minLength+" characters"
        }
     }

     const checkValidity = () => {
   
        if (e.target.id == "email" && email.validity.valid){

            emailErrorSpan.textContent = ""
            emailErrorSpan.className = "error"
         }
         else {
            emailError() 
         }

        }

        checkValidity()

     


    }

    email.addEventListener("input",(e) => {checkInputs(e)})
    country.addEventListener("input",(e) => {checkInputs(e)})
    zipCode.addEventListener("input",(e) => {checkInputs(e)})
    password.addEventListener("input",(e) => {checkInputs(e)})
    passwordConfirm.addEventListener("input",(e) => {checkInputs(e)})
    

    return {}

})();