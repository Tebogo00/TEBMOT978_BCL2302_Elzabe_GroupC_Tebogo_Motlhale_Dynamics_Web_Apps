//  variables form and result are declared and assigned values using the document.querySelector.
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);



//   //  an if statement checks if either dividend or divider variables are empty strings.
//   if (dividend === "" || divider === "") {
//     result.innerText = "Division not performed. Both values are required in inputs. Try again.";
//   }


//   // if either dividend or divider variables is not a valid number using the isNaN function.
//   if (isNaN(dividend) || isNaN(divider)) {
//     console.error("Invalid number provided");
//     console.trace("Call stack");
//     result.innerText = "Division not performed. Invalid number provided. Try again.";
//   }

//   //  if the value of divider is equal to 0. If it is, it means that division by zero is being attempted
//   if (divider < 0) {
//     result.innerText = "Division not performed. Invalid number provided. Try again.";
//     console.error("Division by zero");
//     console.trace("Call stack");
//     return;
//   }


    
if()

  // the division operation is performed using the dividend and divider variables.
  const quotient = dividend / divider;
  result.innerText = Number.isInteger(quotient) ? quotient : Math.floor(quotient);
});

