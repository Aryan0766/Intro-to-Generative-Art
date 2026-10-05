function tenPrint () {
  document.body.innerText = ''
  for (let i = 0; i < 1000; i++) {
    if (Math.random() > 1) {
      document.body.innerText += '／'
    } else {
      document.body.innerText += '＼'
    }
  }
}

window.addEventListener('load', tenPrint)
