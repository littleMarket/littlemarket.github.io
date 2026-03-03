document.addEventListener('DOMContentLoaded', () => {
    // Basic Auth
    const PIN = '2026';
    const authOverlay = document.getElementById('auth-overlay');
    const dashboard = document.getElementById('dashboard');
    const pinInput = document.getElementById('pin-input');
    const loginBtn = document.getElementById('login-btn');
    const authError = document.getElementById('auth-error');
    const logoutBtn = document.getElementById('logout-btn');

    // Check if already authenticated in this session
    if (sessionStorage.getItem('adminAuth') === 'true') {
        showDashboard();
    }

    loginBtn.addEventListener('click', handleLogin);
    pinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('adminAuth');
        dashboard.classList.add('hidden');
        authOverlay.classList.add('active');
        pinInput.value = '';
        authError.classList.add('hidden');
    });

    function handleLogin() {
        if (pinInput.value === PIN) {
            sessionStorage.setItem('adminAuth', 'true');
            showDashboard();
        } else {
            authError.classList.remove('hidden');
            pinInput.value = '';
            pinInput.focus();
        }
    }

    function showDashboard() {
        authOverlay.classList.remove('active');
        dashboard.classList.remove('hidden');
        loadState();
    }

    // State Management using localStorage
    const tasks = document.querySelectorAll('.task-card');

    function loadState() {
        const savedState = JSON.parse(localStorage.getItem('adminTrackerState')) || {};
        
        tasks.forEach(task => {
            const id = task.dataset.id;
            if (savedState[id] && savedState[id].completed) {
                markTaskCompleted(task, savedState[id].date);
            }
        });
    }

    function saveState() {
        const state = {};
        tasks.forEach(task => {
            const id = task.dataset.id;
            const isCompleted = task.classList.contains('completed');
            if (isCompleted) {
                const dateText = task.querySelector('.date-val').textContent;
                state[id] = { completed: true, date: dateText };
            }
        });
        localStorage.setItem('adminTrackerState', JSON.stringify(state));
    }

    function markTaskCompleted(task, dateStr) {
        task.classList.add('completed');
        task.querySelector('.mark-done-btn').classList.add('hidden');
        const completedInfo = task.querySelector('.completed-info');
        completedInfo.classList.remove('hidden');
        completedInfo.querySelector('.date-val').textContent = dateStr;
    }

    // Event Listeners for Tasks
    tasks.forEach(task => {
        const markDoneBtn = task.querySelector('.mark-done-btn');
        
        markDoneBtn.addEventListener('click', () => {
            const today = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            markTaskCompleted(task, today);
            saveState();
        });
    });
});
