const {addAlbum}=document.forms

addAlbum.addEventListener('submit', async (event) =>{
      event.preventDefault()
  try
      {const data= Object.fromEntries(new FormData(addAlbum))
const response= await fetch("/api/addAlbum", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
})
if (!response.ok){
    console.log("ошибка");
}
// window.location.href='/'
}
catch(error){
    console.log(error);
}
})