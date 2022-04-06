let ver_resutado = document.getElementById('ver_resutado');



function calcular(tipo, valor) {

    if (tipo === 'acao') {


        if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {

            ver_resutado.value += valor

        }



        if (valor === 'c') {
            ver_resutado.value = ''

        }




        if (valor === '=') {
            var resultado;

            resultado = eval(ver_resutado.value)

            ver_resutado.value = resultado
        }







    } else if (tipo === 'tipo') {

        ver_resutado.value += valor



    }





}