//  variables form and result are declared and assigned values using the document.querySelector.
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);



 // if either dividend or divider variables are empty strings.
   if (dividend === "" || divider === "") {
     result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  }


// if either dividend or divider variables is not a valid number using the isNaN function.
   else if (isNaN(dividend) || isNaN(divider)) {
     document.body.innerHTML = "Division not performed. Invalid number provided. Try again.";
     console.error("Call stack");
   }

//  if the value of divider is smaller than 0. 
  else if (divider < 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Call stack");
  }


  // dividing numbers result in a decimal number
  else{
  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult
  }
})