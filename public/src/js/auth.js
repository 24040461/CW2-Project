
//ref https://www.youtube.com/watch?v=aN1LnNq4z54&list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ&index=2
// ref google.firebase

//listen to auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
        document.getElementById('loggedIn').innerHTML = 'Logged In'
        document.getElementById('login-form').style.display = "none"
       
    } else {
        console.log('user logged out');
    }
})

//login
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        
        loginForm.reset();
    });
});

// //logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     auth.signOut().then(() => {
       
//     })
// })