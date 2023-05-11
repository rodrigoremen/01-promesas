console.log('Hola mundo');

function sumarUno(num, callback) {
    if (num >= 7) {
        callback('numero muy grande');
        return;
    }
    setTimeout(function () {
        callback(null, num + 1);
    }, 2000)
}

sumarUno(5, function (error, nuevoValor) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(nuevoValor);
    sumarUno(nuevoValor, function (error, nuevoValor2) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(nuevoValor2);
        sumarUno(nuevoValor2, function (error, nuevoValor3) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(nuevoValor3);
        })
    })
})