const toggle = document.querySelector('[toggle]')
const drop = document.querySelector('.drop').classList

toggle.addEventListener('click', expand)

function expand(){
    drop.toggle('drop')
}