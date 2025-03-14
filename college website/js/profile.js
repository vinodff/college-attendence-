document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set user info in header
    document.getElementById('studentName').textContent = localStorage.getItem('studentName');
    document.getElementById('studentId').textContent = localStorage.getItem('studentId');
    
    // Set user info in profile
    document.getElementById('profileName').textContent = localStorage.getItem('studentName');
    document.getElementById('profileId').textContent = localStorage.getItem('studentId');
    
    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('studentId');
        localStorage.removeItem('studentName');
        window.location.href = 'index.html';
    });
    
    // Edit profile button functionality
    document.querySelector('.edit-profile-btn').addEventListener('click', function() {
        alert('Edit profile functionality would be implemented here in a real application.');
    });
    
    // Change password button functionality
    document.querySelector('.change-password-btn').addEventListener('click', function() {
        alert('Change password functionality would be implemented here in a real application.');
    });
});