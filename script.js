document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const department = document.getElementById('registerDepartment').value;

    // Guardar datos en la base de datos (simulación)
    console.log(`Registro: ${email}, ${password}, ${department}`);
    showDashboard();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Verificar datos en la base de datos (simulación)
    console.log(`Login: ${email}, ${password}`);
    showDashboard();
});

function showDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
}

document.getElementById('inventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const item = document.getElementById('item').value;
    const assignedTo = document.getElementById('assignedTo').value;

    const li = document.createElement('li');
    li.textContent = `${item} - Asignado a: ${assignedTo}`;
    document.getElementById('inventoryList').appendChild(li);

    document.getElementById('inventoryForm').reset();
});
