const {regUser}=document.forms

regUser.addEventListener('submit', async (event) =>{
      event.preventDefault()
  try
      {const data= Object.fromEntries(new FormData(regUser))
const response= await fetch("/api/registration", {
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