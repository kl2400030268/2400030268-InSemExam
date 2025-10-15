function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if(username && password) {
        alert('Login successful!');
    } else {
        alert('Please enter both fields');
    }
}