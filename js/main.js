
var elForm = document.querySelector(".form-fiz")
var elInput = document.querySelector(".form-input")
var elResalt = document.querySelector(".result")


elForm.addEventListener("submit", function(evt)
{

  evt.preventDefault();
  var elInputValue = Number(elInput.value);

  if (elInputValue % 15 == 0) 
  {
    elResalt.textContent = "FizzBuuz"
  }
  else if(elInputValue % 5 == 0)
  {
    elResalt.textContent = "Fizz"
  } 
  
  else if(elInputValue % 3 == 0)
  {
    elResalt.textContent = "Buzz"
  }
  else
  {
    elResalt.textContent = "Kiritilgan malumot porametrlarimizga tog'ri kelmadi !"
  }



})



