const {authForm}=document.forms

authForm.addEventListener('submit', async (event) =>{
      event.preventDefault()
  try
      {const data= Object.fromEntries(new FormData(authForm))
const response= await fetch("/api/auth", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
})
if (!response.ok){
    console.log("ошибка");
}
window.location.href='/'
}
catch(error){
    console.log(error);
}
})