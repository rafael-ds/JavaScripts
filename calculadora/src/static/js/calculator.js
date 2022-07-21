const btn = document.querySelectorAll('button')


btn.forEach(e => {
    e.addEventListener('click', function () {
        const valuer = e.value
        
        let display = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = display + valuer
        
    })
})
