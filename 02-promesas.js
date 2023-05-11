function sumarUnoPromesa(num) {
    console.log(num);
    var promesa = new Promise(function (resolve, reject) {
        if (num >= 7) {
            reject('numero muy grande');
            return;
        }
        setTimeout(function () {
            resolve(num + 1);
        }, 2000)
    });

    return promesa;
}

// sumarUnoPromesa(5).then(function (nuevoValor) {
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function (nuevoValor) {
//         console.log(nuevoValor);
//         sumarUnoPromesa(nuevoValor).then(function (nuevoValor) {
//             console.log(nuevoValor);
//         })
//     })
// })

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
    console.log(err);
})