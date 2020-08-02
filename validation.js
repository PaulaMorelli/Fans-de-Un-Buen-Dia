console.log ("test")
const form = document.querySelector("#form")
const emailInput = document.querySelector("#emailInput") 
const emailHelp = document.querySelector("#emailHelp") 


form.addEventListener("submit",(event) =>
{
    event.preventDefault()  
    if (emailInput.value === "")
        {
            emailHelp.innerText = "Ingrese un email válido."
        } 
    else {
        form.submit();
    }
})

