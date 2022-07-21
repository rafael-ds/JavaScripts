const btn = document.querySelectorAll('button')

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = clique
}

function clique(){
    console.log('clicou')
}