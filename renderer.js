let currentPath = window.api.homeDir();
const pathDisplay = document.getElementById('current-path');
const fileList = document.getElementById('file-list');
const contentDiv = document.getElementById('content');

async function loadDir(targetPath) {
    const data = await window.api.readDir(targetPath);
    
    if (data.error) {
        alert(data.error);
        return;
    }

    currentPath = targetPath;
    pathDisplay.innerText = `Caminho: ${currentPath}`;
    fileList.innerHTML = '';

    data.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.isDirectory ? `📁 ${item.name}` : `📄 ${item.name}`;
        li.className = item.isDirectory ? 'folder' : 'file';
        
        li.onclick = () => {
            if (item.isDirectory) {
                loadDir(item.path); // Requisito 4 e 6
            } else {
                displayFile(item.path); // Requisito 7
            }
        };
        fileList.appendChild(li);
    });
}



// Inicialização
loadDir(currentPath);