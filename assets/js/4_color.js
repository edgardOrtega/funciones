

function pintar(e){
    let ele = e.target
    ele.style.backgroundColor = 'black'
}


div1 = document.getElementById('ele1')
div2 = document.getElementById('ele2')
div3 = document.getElementById('ele3')
div4 = document.getElementById('ele4')

div1.addEventListener('click', pintar)
div2.addEventListener('click', pintar)
div3.addEventListener('click', pintar)
div4.addEventListener('click', pintar)