async function listar(caminho) {
  const arquivos = await window.api.listarArquivos(caminho)
  console.log(arquivos)
  // arquivos é um array de objetos { name, fullPath, isDirectory }
}

listar('C:/Users/SeuUsuario')

const conteudo = await window.api.lerArquivo('C:/pasta/arquivo.txt')
console.log(conteudo)