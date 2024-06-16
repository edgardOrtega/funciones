let ele1 = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
        ele1.style.backgroundColor = '#EFC3CA';
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
        ele1.style.backgroundColor = '#ff8000';
    }else if (event.key === 'd') {
        /* Cambiar a color 2 */
            ele1.style.backgroundColor = '#87CEEB';
    }else if (event.key === 'q') {
        /* ACrear nuevo div mismas dimensiones morado */
            var newDiv = document.createElement('div');
            newDiv.style.width ='200px';
            newDiv.style.height ='200px';
            newDiv.style.backgroundColor ='#4A2364';
            document.body.appendChild(newDiv);
    }else if (event.key === 'w') {
        /* ACrear nuevo div mismas dimensiones gris */
        var newDiv = document.createElement('div');
        newDiv.style.width ='200px';
        newDiv.style.height ='200px';
        newDiv.style.backgroundColor ='#808080';
        document.body.appendChild(newDiv);
    }else if (event.key === 'e') {
        /* ACrear nuevo div mismas dimensiones cafe */
        var newDiv = document.createElement('div');
        newDiv.style.width ='200px';
        newDiv.style.height ='200px';
        newDiv.style.backgroundColor ='#804000';
        document.body.appendChild(newDiv);
    }
})