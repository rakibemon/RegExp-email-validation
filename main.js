function checkEmailValid(email){
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gmi;
    const errorMessage = document.getElementById('error');
    const okayMessage = document.getElementById('okay');
    if(email.match(regexp)){
        errorMessage.style.display='none'
        okayMessage.style.display='block'
        okayMessage.style.color='green';
    }
    else{
        errorMessage.style.display='block'
        okayMessage.style.display='none'
        errorMessage.style.color='red'
    }
};
document.getElementById('submit-button').addEventListener('click',()=>{
    const input = document.getElementById('email')
    checkEmailValid(input.value)
});