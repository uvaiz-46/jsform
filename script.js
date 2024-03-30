let sub =document.getElementById  ('sub')                      
let mil =document.getElementById('mil');
let pas =document.getElementById('pas');
let float =document.getElementById("floatingInput");
let pass = document.getElementById("floatingPassword")

sub.addEventListener("click",()=>{
if (float.value=="") {
    mil.innerHTML='wrong'
    mil.style.color='red'
}else if(float.value!==""){
mil.innerHTML=" Correct ";
mil.style.color='green'
}
if (pass.value=="") {
    pas.innerHTML='wrong'
    pas.style.color='red'
}else if(pass.value!==""){
pas.innerHTML="Correct ";
pas.style.color='green'
}
else{
    alert('yiur  password and username are correct ');
}
})
function myFunction() {
    alert("your data added in our websir now you access");
  }
    




// let sign = document.getElementById('sign')
// let head = document.getElementById('gead')

// sign.addEventListener('click', () => {
//   head.innerHTML= "Sign Up"
//   head.style.cssText ="background-color:white; color:black;"
// sign.innerHTML="Login"
// })