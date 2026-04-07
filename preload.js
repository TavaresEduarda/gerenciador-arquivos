const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  listarArquivos: (caminho) => ipcRenderer.invoke('listar-arquivos', caminho),
  lerArquivo: (caminho) => ipcRenderer.invoke('ler-arquivo', caminho)
})