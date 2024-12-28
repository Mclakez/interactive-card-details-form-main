const cardNumberInput = document.getElementById('card-number-input')
const yearInput = document.getElementById('year-input')
const cvcInput = document.getElementById('cvc-input')
const monthInput = document.getElementById('month-input');
const cardNameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn')
const form = document.getElementById('form');
const thankYou = document.getElementById('completed-state')
const continueBtn = document.getElementById('continue-btn')

const cardNumber = document.getElementById('card-number')
const cardName = document.getElementById('card-name');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvc = document.getElementById('card-cvc');

const cardNumberInputSpan = document.getElementById('card-number-input-span')
const cvcInputSpan = document.getElementById('cvc-input-span')
const expirySpan = document.getElementById('expiry-span');
const cardNameInputSpan = document.getElementById('name-input-span');

const cardNumberInputContainer = document.getElementById('card-number-input-container')
const cvcInputContainer = document.getElementById('cvc')
const expirycontainer = document.getElementById('expiry-container');
const cardNameInputContainer = document.getElementById('name-input-container');

let isValid = true
   console.log('Month input border updated');

   function capitalizeName(input) {
      input.value = input.value.replace(/\b\w/g, function(char) {
         return char.toUpperCase()
      })
   }

   function checkLength(inputValue, maxLength) {
      inputValue.value = inputValue.value.slice(0, maxLength)
   }

   cvcInput.addEventListener('input', function() {
      checkLength(cvcInput, 3)
      cardCvc.textContent = cvcInput.value 
   })

   yearInput.addEventListener('input', function() {
      checkLength(yearInput, 2)
      cardYear.textContent = yearInput.value      
   })

   monthInput.addEventListener('input', function() {
      checkLength(monthInput, 2)
      if (monthInput.length === 1) {
         monthInput.value = "0" + monthInput
         cardMonth.textContent = monthInput.value
      } else {
         cardMonth.textContent = monthInput.value
      }
      
      
   })

   cardNumberInput.addEventListener('input', function() {

      cardNumberRegex = /[^0-9 ]/g
      if (cardNumberRegex.test(cardNumberInput.value)) {
         cardNumberInputSpan.style.display = "block"
         cardNumberInputSpan.textContent = "Wrong format, numbers only"
         cardNumberInput.style.border = "1px solid var(--red)"
         isValid = false
      } else if(cardNumberInput.value.trim() === "") {
         cardNumberInput.style.border = "1px solid var(--light-grayish-violet)"
      }else {
         cardNumberInputSpan.style.display = "none"
         cardNumberInput.style.border = "1px solid transparent"
         isValid = true
      }

      cardNumberInput.value = cardNumberInput.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
      cardNumber.textContent = cardNumberInput.value
   })

   cardNameInput.addEventListener('input', function() {
     
      cardNameInput.value = cardNameInput.value.replace(/\b\w/g, function(char) {
         return char.toUpperCase()
      })
      cardName.textContent = cardNameInput.value
   })
   
form.addEventListener('submit', (event) => {
   
   if (yearInput.value === "") {
      isValid = false
      expirySpan.style.display = "block"
      expirySpan.textContent = "Can't be blank"
      yearInput.style.border = "1px solid var(--red)"
   }

   if (monthInput.value === "") {
      isValid = false
      expirySpan.style.display = "block"
      expirySpan.textContent = "Can't be blank"
      monthInput.style.border = "1px solid var(--red)"
   } else if (monthInput.value > 12 || monthInput.value < 1) {
      isValid = false
      expirySpan.style.display = "block"
      expirySpan.textContent = "Invalid Month"
      monthInput.style.border = "1px solid var(--red)"
   }

   if (monthInput.value < 10) {
      isValid = true
      cardMonth.textContent ='0' + monthInput.value
   } 

   if (cvcInput.value === "") {
      isValid = false
      cvcInputSpan.style.display = "block"
      cvcInputSpan.textContent = "Can't be blank"
      cvcInput.style.border = "1px solid var(--red)"
   } else if (cvcInput.value.length < 3) {
      isValid = false
      cvcInputSpan.style.display = "block"
      cvcInputSpan.textContent = "3 numbers needed"
      cvcInput.style.border = "1px solid var(--red)"
   }

   if (cardNumberInput.value === "") {
      isValid = false
      cardNumberInputSpan.style.display = "block"
      cardNumberInputSpan.textContent = "Can't be blank"
      cardNumberInput.style.border = "1px solid var(--red)"
   } else if (cardNumberInput.value.length < 16) {
      isValid = false
      cardNumberInputSpan.style.display = "block"
      cardNumberInputSpan.textContent = "Characters should be 16"
      cardNumberInput.style.border = "1px solid var(--red)"
   }

   if (cardNameInput.value === "") {
      isValid = false
     cardNameInputSpan.style.display = "block"
     cardNameInputSpan.textContent = "Can't be blank"
     cardNameInput.style.border = "1px solid var(--red)"
   }

   if (!isValid) {
      event.preventDefault()
   } 

   if (isValid) {
      event.preventDefault()   
      thankYou.style.display = 'block'
      form.style.display = 'none'
      console.log('working', form, thankYou, continueBtn);
      
   }
   
})

continueBtn.addEventListener('click', () => {
   location.reload()
})
