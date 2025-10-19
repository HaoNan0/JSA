// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validate login credentials
        const result = validateLogin(email, password);
        
        const button = event.target.querySelector('.login-button');
        
        if (result.success) {
            // Login successful
            button.textContent = 'Signing In...';
            button.disabled = true;
            
            // Login user
            loginUser(result.user);
            
            // Redirect to home page after successful login
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            // Login failed
            button.textContent = 'Sign In Failed';
            button.style.backgroundColor = '#dc2626';
            
            // Show error message
            alert(result.message);
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.textContent = 'Sign In';
                button.disabled = false;
                button.style.backgroundColor = '#1e40af';
            }, 2000);
        }
    });
}

// Register form handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        // Validate form
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (!terms) {
            alert('Please accept the Terms of Service');
            return;
        }
        
        // Create user data
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            registeredAt: new Date().toISOString()
        };
        
        // Register user
        const result = registerUser(userData);
        
        const button = event.target.querySelector('.signup-button');
        
        if (result.success) {
            // Registration successful
            button.textContent = 'Account Created!';
            button.style.backgroundColor = '#059669';
            button.disabled = true;
            
            // Show success message and redirect to login
            setTimeout(() => {
                alert('Registration successful! Please login with your credentials.');
                window.location.href = 'login.html';
            }, 1000);
        } else {
            // Registration failed
            button.textContent = 'Registration Failed';
            button.style.backgroundColor = '#dc2626';
            
            // Show error message
            alert(result.message);
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.textContent = 'Create Account';
                button.disabled = false;
                button.style.backgroundColor = '#1e40af';
            }, 2000);
        }
    });
}