
const validateForm = (() => {

    const form = document.querySelector("form")
    const email = document.getElementById("email")
    const country = document.getElementById("country")
    const zipCode = document.getElementById("zip-code")
    const password = document.getElementById("password")
    const passwordConfirm = document.getElementById("password-confirm")

    const checkInputs = (e) => {

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

     //in the password validation, i will try to validate as much as possible using JS only.

     const passwordError = () => {

        const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        const minCharacters = /^.{8,}$/
        const upperCase = /.*[A-Z]/
        const oneNumber = /\d/

        if (password.validity.valueMissing){

            passwordErrorSpan.textContent = "Please enter a password"
        }

        else if (!minCharacters.test(password.value)) {
            passwordErrorSpan.textContent = "The entered password should be at least 8 characters long"
        }

        else if (!upperCase.test(password.value)){

            passwordErrorSpan.textContent = "The entered password requires at least one upper case character."

        }

        else if (!oneNumber.test(password.value)){

            passwordErrorSpan.textContent = "The entered password requires at least one number."

        }

        else if (!specialCharacters.test(password.value)){

            passwordErrorSpan.textContent = "The entered password requires a special character."

        }
        
        else if (password.validity.patternMismatch) {
            console.log(password.value)

        }
        
        passwordErrorSpan.className = "error active"

     }

     const passwordConfirmError = () => {

        if (password.validity.valid == false) {

            passwordConfirmErrorSpan.textContent = "The entered password does not match the previous one."
        }

        passwordConfirmErrorSpan.className = "error active"
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


         //----------------------------------

         if (e.target.id == "password" && password.validity.valid){

            passwordErrorSpan.textContent = ""
            passwordErrorSpan.className = "error"

         }
         else if (e.target.id == "password" && !password.validity.valid) {
            passwordError() 
         }

          //----------------------------------

          if (e.target.id == "password-confirm" && passwordConfirm.validity.valid){


            passwordConfirmErrorSpan.textContent = ""
            passwordConfirmErrorSpan.className = "error"

         }
         else if (e.target.id == "password-confirm" && !passwordConfirm.validity.valid) {
            passwordConfirmError() 
            
         }
         

        }

        checkValidity()
    }

    const checkPasswordConfirm = () => {

        if (password.value != passwordConfirm.value){

            passwordConfirm.setCustomValidity("Invalid field.");
        }
        else {
            passwordConfirm.setCustomValidity("");
        }
        
    }

    const checkSubmit = (e) => {

        if (!email.validity.valid ||!zipCode.validity.valid || !country.validity.valid || !password.validity.valid || !passwordConfirm.validity.valid){
            e.preventDefault()
        }
        

    }


    const putEventListeners = () => {

    email.addEventListener("blur",(e) => {checkInputs(e)})
    country.addEventListener("blur",(e) => {checkInputs(e)})
    zipCode.addEventListener("blur",(e) => {checkInputs(e)})
    password.addEventListener("blur",(e) => {checkInputs(e)})
    passwordConfirm.addEventListener("blur",checkPasswordConfirm)
    passwordConfirm.addEventListener("blur",(e) => {checkInputs(e)})
    form.addEventListener("blur",(e) => {checkSubmit(e)
        form.classList = "form-container submitted"})

    email.addEventListener("input",(e) => {checkInputs(e)})
    country.addEventListener("input",(e) => {checkInputs(e)})
    zipCode.addEventListener("input",(e) => {checkInputs(e)})
    password.addEventListener("input",(e) => {checkInputs(e)})
    passwordConfirm.addEventListener("input",checkPasswordConfirm)
    passwordConfirm.addEventListener("input",(e) => {checkInputs(e)})
    form.addEventListener("submit",(e) => {checkSubmit(e)
        form.classList = "form-container submitted"})

    }
    return {putEventListeners}


})();

validateForm.putEventListeners()