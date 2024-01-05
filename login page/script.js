function showNotes() {
    document.getElementById('content').innerHTML = '<p>This is the Notes feature.</p>';
}

function showModules() {
    document.getElementById('content').innerHTML = '<button onclick="addModule()">Add Module</button>';
}

function addModule() {
    const moduleElement = document.createElement('div');
    moduleElement.classList.add('module');
    moduleElement.textContent = 'New Module';
    document.getElementById('content').appendChild(moduleElement);
}
