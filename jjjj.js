registerBtn.addEventListener('click', function() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.some(u => u.username === username)) {
        registerError.textContent = 'Пользователь уже существует';
        return;
    }

    const newUser = { 
        username, 
        password, 
        subscriptions: []  // <-- Добавляем пустой массив подписок
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    window.location.href = 'index.html';
});