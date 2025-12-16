document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString();
    
    document.getElementById('themeBtn').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Toggle Dark Mode';
    });
    
    document.getElementById('editJobBtn').addEventListener('click', function() {
        const newTitle = prompt('Enter new job title:');
        if (newTitle) {
            document.getElementById('jobTitle').textContent = newTitle;
        }
    });
    
    document.getElementById('toggleSkillsBtn').addEventListener('click', function() {
        const skillsSection = document.getElementById('skillsSection');
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            this.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            this.textContent = 'Show Skills';
        }
    });
    
    document.getElementById('msgBox').addEventListener('keyup', function() {
        const remaining = 200 - this.value.length;
        document.getElementById('counter').textContent = remaining;
    });
});

function validateForm() {
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    
    if (!nameField.value.trim()) {
        alert('Please enter your name');
        nameField.focus();
        return false;
    }
    
    if (!emailField.value.trim()) {
        alert('Please enter your email');
        emailField.focus();
        return false;
    }
    
    return true;
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 12) greeting = 'Good Morning!';
    else if (hour < 17) greeting = 'Good Afternoon!';
    else greeting = 'Good Evening!';
    
    console.log(greeting);
}


updateGreeting();
