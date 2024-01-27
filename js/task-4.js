const form = document.querySelector('.login-form');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const emailVal = event.target.elements.email.value;
    const passwordVal = event.target.elements.password.value;
   
    if(emailVal === '' || passwordVal === ''){
        alert('All form fields must be filled in');
    }else{
        const formData = {
            email: emailVal,
            password: passwordVal,
        };
        console.log(formData);
        form.reset();
    }   
})

