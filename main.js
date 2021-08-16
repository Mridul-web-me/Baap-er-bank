document.getElementById('submit-button').addEventListener('click', function (){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    // Get user Password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'bank.html';
    }
    else{
       creaElement
    }
})