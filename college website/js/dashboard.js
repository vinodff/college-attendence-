document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set user info
    document.getElementById('studentName').textContent = localStorage.getItem('studentName');
    document.getElementById('studentId').textContent = localStorage.getItem('studentId');
    
    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('studentId');
        localStorage.removeItem('studentName');
        window.location.href = 'index.html';
    });
    
    // Sample data for attendance
    const attendanceData = {
        overall: '85%',
        presentDays: 68,
        absentDays: 12,
        subjects: [
            { name: 'Mathematics', attendance: '90%', color: '#4cd137' },
            { name: 'Physics', attendance: '85%', color: '#fbc531' },
            { name: 'Chemistry', attendance: '78%', color: '#e84118' },
            { name: 'Computer Science', attendance: '92%', color: '#00a8ff' },
            { name: 'English', attendance: '80%', color: '#9c88ff' }
        ]
    };
    
    // Update attendance summary
    document.getElementById('overallAttendance').textContent = attendanceData.overall;
    document.getElementById('presentDays').textContent = attendanceData.presentDays;
    document.getElementById('absentDays').textContent = attendanceData.absentDays;
    
    // Generate subject-wise attendance
    const subjectList = document.querySelector('.subject-list');
    
    attendanceData.subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        
        const subjectHeader = document.createElement('h3');
        subjectHeader.textContent = subject.name;
        
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = subject.attendance;
        progress.style.backgroundColor = subject.color;
        
        const attendanceText = document.createElement('p');
        attendanceText.className = 'attendance-text';
        attendanceText.textContent = subject.attendance;
        
        progressContainer.appendChild(progress);
        subjectCard.appendChild(subjectHeader);
        subjectCard.appendChild(progressContainer);
        subjectCard.appendChild(attendanceText);
        
        subjectList.appendChild(subjectCard);
    });
    
    // Add CSS for progress bars
    const style = document.createElement('style');
    style.textContent = `
        .progress-container {
            background-color: #f1f1f1;
            border-radius: 5px;
            height: 10px;
            margin-bottom: 10px;
            overflow: hidden;
        }
        
        .progress {
            height: 100%;
            border-radius: 5px;
        }
        
        .attendance-text {
            font-weight: bold;
            text-align: right;
        }
    `;
    document.head.appendChild(style);
});