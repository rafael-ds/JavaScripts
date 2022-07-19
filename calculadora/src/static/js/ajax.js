function loadPage(url){
    const xhr = new XMLHttpRequest()

    xhr.onload = function(){
        document.getElementById('display').innerHTML = this.responseText
    }   


    xhr.open("GET", url)
    xhr.send()
}