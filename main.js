const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.loadFile('index.html')
}


// Canal: listar arquivos de um diretório
ipcMain.handle('read-dir', async (event, targetPath) => {
  try {
    const files = fs.readdirSync(targetPath, { withFileTypes: true });
    return files.map(file => ({
      name: file.name,
      isDirectory: file.isDirectory(),
      path: path.join(targetPath, file.name)
    }));
  } catch (err) {
    return { error: "Pasta inexistente ou sem permissão" };
  }
});

// IPC para ler conteúdo de arquivo (Requisito 7)
ipcMain.handle('read-file', async (event, filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.txt' || ext === '.json') {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return "Formato não suportado.";
});

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
