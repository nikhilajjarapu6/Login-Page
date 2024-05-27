const container=document.querySelector('.container')
const signUP=document.querySelector('#register')
const login=document.querySelector('#login')
signUP.addEventListener('click',()=>{
    container.classList.add('active')
})
login.addEventListener('click',()=>{
    container.classList.remove('active')
})

