const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('node:path')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
      
    }
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})   

// Registra o canal 'listar-arquivos'
ipcMain.handle('listar-arquivos', async (event, caminho) => {
  const itens = fs.readdirSync(caminho)

  return itens.map(nome => {
    const caminhoCompleto = path.join(caminho, nome)
    const stat = fs.statSync(caminhoCompleto)

    return {
      name: nome,
      fullPath: caminhoCompleto,
      isDirectory: stat.isDirectory()
    }
  })
})


ipcMain.handle('ler-arquivo', async (event, caminho) => {
  return fs.readFileSync(caminho, 'utf-8')
})