const btn = document.querySelectorAll('button')


btn.forEach(e => {
    e.addEventListener('click', function(){
        console.log('clicando')
    })
})