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
    
    // Sample attendance data
    const attendanceRecords = [
        { date: '2023-09-01', subject: 'Mathematics', status: 'Present', remarks: '' },
        { date: '2023-09-01', subject: 'Physics', status: 'Present', remarks: '' },
        { date: '2023-09-01', subject: 'Chemistry', status: 'Present', remarks: '' },
        { date: '2023-09-02', subject: 'Computer Science', status: 'Present', remarks: '' },
        { date: '2023-09-02', subject: 'English', status: 'Absent', remarks: 'Medical Leave' },
        { date: '2023-09-03', subject: 'Mathematics', status: 'Present', remarks: '' },
        { date: '2023-09-03', subject: 'Physics', status: 'Late', remarks: 'Arrived 10 minutes late' },
        { date: '2023-09-04', subject: 'Chemistry', status: 'Present', remarks: '' },
        { date: '2023-09-04', subject: 'Computer Science', status: 'Present', remarks: '' },
        { date: '2023-09-05', subject: 'English', status: 'Present', remarks: '' },
        { date: '2023-09-05', subject: 'Mathematics', status: 'Absent', remarks: 'No reason provided' },
        { date: '2023-09-06', subject: 'Physics', status: 'Present', remarks: '' },
        { date: '2023-09-06', subject: 'Chemistry', status: 'Present', remarks: '' },
        { date: '2023-09-07', subject: 'Computer Science', status: 'Present', remarks: '' },
        { date: '2023-09-07', subject: 'English', status: 'Present', remarks: '' }
    ];
    
    // Function to display attendance data
    function displayAttendance(records) {
        const tableBody = document.getElementById('attendanceData');
        tableBody.innerHTML = '';
        
        if (records.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.textContent = 'No attendance records found';
            cell.style.textAlign = 'center';
            row.appendChild(cell);
            tableBody.appendChild(row);
            return;
        }
        
        records.forEach(record => {
            const row = document.createElement('tr');
            
            const dateCell = document.createElement('td');
            const date = new Date(record.date);
            dateCell.textContent = date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
            
            const subjectCell = document.createElement('td');
            subjectCell.textContent = record.subject;
            
            const statusCell = document.createElement('td');
            statusCell.textContent = record.status;
            if (record.status === 'Present') {
                statusCell.className = 'status-present';
            } else if (record.status === 'Absent') {
                statusCell.className = 'status-absent';
            } else if (record.status === 'Late') {
                statusCell.className = 'status-late';
            }
            
            const remarksCell = document.createElement('td');
            remarksCell.textContent = record.remarks || '-';
            
            row.appendChild(dateCell);
            row.appendChild(subjectCell);
            row.appendChild(statusCell);
            row.appendChild(remarksCell);
            
            tableBody.appendChild(row);
        });
    }
    
    // Initial display
    displayAttendance(attendanceRecords);
    
    // Filter functionality
    document.getElementById('applyFilters').addEventListener('click', function() {
        const subjectFilter = document.getElementById('subjectFilter').value;
        const monthFilter = document.getElementById('monthFilter').value;
        
        let filteredRecords = [...attendanceRecords];
        
        if (subjectFilter !== 'all') {
            filteredRecords = filteredRecords.filter(record => 
                record.subject.toLowerCase().includes(subjectFilter.toLowerCase())
            );
        }
        
        if (monthFilter !== 'all') {
            filteredRecords = filteredRecords.filter(record => {
                const date = new Date(record.date);
                return (date.getMonth() + 1) === parseInt(monthFilter);
            });
        }
        
        displayAttendance(filteredRecords);
    });
});