// using local storage

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let textError = document.getElementById('error') 
    let passError = document.getElementById('pasError')

    let compareName = "Sharmi"
    let comparePassword = "Sangee@2001"
    
    if (username == compareName && password == comparePassword ) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = './home.html';
    }
    else {
        textError.textContent = "Invalid user name"
        passError.textContent = "Invalid password"
    }

    

//     if (password == comparePassword) {
//         localStorage.setItem('password', password);
        
//     }
//     else {
//         passError.textContent="Invalid password"
//    }
    
});

