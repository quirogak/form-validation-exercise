
const validateForm = (() => {

    const form = document.querySelector("form")
    const email = document.getElementById("email")
    const country = document.getElementById("country")
    const zipCode = document.getElementById("zip-code")
    const password = document.getElementById("password")
    const passwordConfirm = document.getElementById("password-confirm")

    const checkInputs = (e) => {

     console.log(e.target.id)

     const emailErrorSpan = document.querySelector("#email + span.error")
     const countryErrorSpan = document.querySelector("#country + span.error")
     const zipCodeErrorSpan = document.querySelector("#zip-code + span.error")
     const passwordErrorSpan = document.querySelector("#password + span.error")
     const passwordConfirmErrorSpan = document.querySelector("#password-confirm + span.error")

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
        
        emailErrorSpan.className = "error active"
     }

     const countryError = () => {

        if (country.value == "0"){

            countryErrorSpan.textContent = "Please enter a country."
        }

        countryErrorSpan.className = "error active"
     }

     const zipCodeError = () => {

        if (zipCode.validity.valueMissing){

            zipCodeErrorSpan.textContent = "Please enter a Zip Code"
        }
        else if (zipCode.validity.typeMismatch){

            zipCodeErrorSpan.textContent = "The entered value isn't a valid Zip Code"

        }
        else if (zipCode.validity.tooShort) {
            zipCodeErrorSpan.textContent = "The entered Zip Code should be at least "+zipCode.minLength+" characters"
        }
        else if (zipCode.validity.patternMismatch) {
            zipCodeErrorSpan.textContent = "The entered Zip Code shouldn't have more than "+6+" characters "
        }
        
        zipCodeErrorSpan.className = "error active"



     }



     const checkValidity = () => {

        //----------------------------------
   
        if (e.target.id == "email" && email.validity.valid){

            emailErrorSpan.textContent = ""
            emailErrorSpan.className = "error"

         }
         else if (e.target.id == "email" && !email.validity.valid) {
            emailError() 
         }

         //----------------------------------

         if (e.target.id == "country" && country.value == "0") {
            countryError() 
            country.validity.valid = false
         }

         else if (e.target.id == "country" && country.validity.valid){
            
            countryErrorSpan.textContent = ""
            countryErrorSpan.className = "error"
         }

         //----------------------------------

         if (e.target.id == "zip-code" && zipCode.validity.valid){

            zipCodeErrorSpan.textContent = ""
            zipCodeErrorSpan.className = "error"

         }
         else if (e.target.id == "zip-code" && !zipCode.validity.valid) {
            zipCodeError() 
         }
         
         

        }

        checkValidity()
    }

    const checkSubmit = (e) => {

        if (!email.validity.valid){
            e.preventDefault()
        }

    }

    email.addEventListener("blur",(e) => {checkInputs(e)})
    country.addEventListener("blur",(e) => {checkInputs(e)})
    zipCode.addEventListener("blur",(e) => {checkInputs(e)})
    password.addEventListener("blur",(e) => {checkInputs(e)})
    passwordConfirm.addEventListener("blur",(e) => {checkInputs(e)})
    form.addEventListener("submit",(e) => {checkSubmit(e)
        form.classList = "form-container submitted"})
    return {}

})();