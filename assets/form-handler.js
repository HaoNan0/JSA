// Ngăn chặn hành vi gửi form (submit) mặc định cho trang Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        console.log("Login form submitted. Page navigation prevented.");
        
        // Cập nhật trạng thái nút (ví dụ)
        const button = event.target.querySelector('.login-button');
        button.textContent = 'Signing In...';
        button.disabled = true;

        // **(Trong môi trường thực tế, logic xử lý đăng nhập sẽ ở đây)**
        // Ví dụ: sử dụng fetch/XMLHttpRequest để gửi dữ liệu lên server.

        // Giả lập xử lý xong và bật lại nút sau 1 giây
        setTimeout(() => {
            button.textContent = 'Sign In';
            button.disabled = false;
        }, 1000);
    });
}

// Ngăn chặn hành vi gửi form (submit) mặc định cho trang Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        console.log("Register form submitted. Page navigation prevented.");

        // Cập nhật trạng thái nút (ví dụ)
        const button = event.target.querySelector('.signup-button');
        button.textContent = 'Creating Account...';
        button.disabled = true;
        
        // **(Trong môi trường thực tế, logic xử lý đăng ký sẽ ở đây)**

        // Giả lập xử lý xong và bật lại nút sau 1 giây
        setTimeout(() => {
            button.textContent = 'Create Account';
            button.disabled = false;
            // (Tùy chọn) Chuyển hướng người dùng sau khi đăng ký thành công
            // window.location.href = 'login.html'; 
        }, 1000);
    });
}