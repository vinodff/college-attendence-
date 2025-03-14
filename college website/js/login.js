document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const studentId = document.getElementById('studentId').value;
        const password = document.getElementById('password').value;
        
        // In a real application, you would send this data to a server for authentication
        // For this demo, we'll use some hardcoded credentials
        if (studentId === 'S12345' && password === 'password') {
            // Store user info in localStorage (in a real app, you'd use secure methods)
            localStorage.setItem('studentId', studentId);
            localStorage.setItem('studentName', 'John Doe');
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});