// Authentication management with functions

// Get current user from localStorage
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Check if user is logged in
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Login user
function loginUser(userData) {
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
}

// Logout user
function logoutUser() {
    localStorage.removeItem('currentUser');
    return true;
}

// Register new user
function registerUser(userData) {
    // Get existing users or create new array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
        return { success: false, message: 'Email already exists' };
    }

    // Add new user
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'Registration successful' };
}

// Validate login credentials
function validateLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        return { success: true, user: user };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
}

// Update navigation based on login status
function updateNavigation() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    if (isLoggedIn()) {
        const currentUser = getCurrentUser();
        // User is logged in - show logout and user info
        navLinks.innerHTML = `
            <li><a href="index.html">Home</a></li>
            <li><span class="user-info">Welcome, ${currentUser.firstName}!</span></li>
            <li><a href="#" id="logoutBtn">Logout</a></li>
        `;
        
        // Add logout event listener
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
                updateNavigation();
                // Redirect to home page
                if (window.location.pathname.includes('login.html') || 
                    window.location.pathname.includes('register.html')) {
                    window.location.href = 'index.html';
                } else {
                    // Reload current page to update UI
                    window.location.reload();
                }
            });
        }
    } else {
        // User is not logged in - show login/register
        navLinks.innerHTML = `
            <li><a href="index.html">Home</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Sign Up</a></li>
        `;
    }
}

// Check if user should be redirected from auth pages
function checkAuthRedirect() {
    if (isLoggedIn()) {
        const currentPage = window.location.pathname;
        if (currentPage.includes('login.html') || currentPage.includes('register.html')) {
            // User is already logged in, redirect to home
            window.location.href = 'index.html';
        }
    }
}

// Check if user needs to login for protected actions
function requireLogin(action) {
    if (!isLoggedIn()) {
        // Show alert and redirect to login
        alert('Please login to continue');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
    checkAuthRedirect();
});
