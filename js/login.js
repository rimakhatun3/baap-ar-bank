document.getElementById('btn-submit').addEventListener('click',function(){
   const emailFild = document.getElementById('user-email');
   const email =emailFild.value;
   const passwordFild = document.getElementById('user-password');
   const password = passwordFild.value;
   console.log(email,password)
   // do not use this
if(email==='rimamnt46@gmail.com' && password==='nusaiba'){
    window.location.href='bank.html';
}
else{
alert('invaid password please type correct password')
}
})

