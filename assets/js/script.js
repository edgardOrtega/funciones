const ele = document.getElementById("ele1");

function pintar(arg){
    ele.style.backgroundColor = arg;
}

ele.addEventListener("click", function(){
    ele.style.backgroundColor = 'yellow';
});




pintar('green');