  function calcular() {
      var multiplicador = window.document.getElementById('num')

      if (multiplicador.value.length == 0) {
          window.alert("A caixa de texto está em branco, por favor digite um número")
      } else {

          var valores = window.document.querySelector('div#valo')

          var multconvert = Number(multiplicador.value)
          var c1 = multconvert * 1
          var c2 = multconvert * 2
          var c3 = multconvert * 3
          var c4 = multconvert * 4
          var c5 = multconvert * 5
          var c6 = multconvert * 6
          var c7 = multconvert * 7
          var c8 = multconvert * 8
          var c9 = multconvert * 9
          var c10 = multconvert * 10

          var resulfinal1 = window.document.getElementById('calculo')
          var resulfinal2 = window.document.getElementById('calculo')
          var resulfinal3 = window.document.getElementById('calculo')
          var resulfinal4 = window.document.getElementById('calculo')
          var resulfinal5 = window.document.getElementById('calculo')
          var resulfinal6 = window.document.getElementById('calculo')
          var resulfinal7 = window.document.getElementById('calculo')
          var resulfinal8 = window.document.getElementById('calculo')
          var resulfinal9 = window.document.getElementById('calculo')
          var resulfinal10 = window.document.getElementById('calculo')



          resulfinal1.innerText += `${multconvert} x 1 = ${c1}\n` // \n pula para a linha de baixo
          resulfinal2.innerText += `${multconvert} x 2 = ${c2}\n`
          resulfinal3.innerText += `${multconvert} x 3 = ${c3}\n`
          resulfinal4.innerText += `${multconvert} x 4 = ${c4}\n`
          resulfinal5.innerText += `${multconvert} x 5 = ${c5}\n`
          resulfinal6.innerText += `${multconvert} x 6 = ${c6}\n`
          resulfinal7.innerText += `${multconvert} x 7 = ${c7}\n`
          resulfinal8.innerText += `${multconvert} x 8 = ${c8}\n`
          resulfinal9.innerText += `${multconvert} x 9 = ${c9}\n`
          resulfinal10.innerText += `${multconvert} x 10 = ${c10}`

          resulfinal1.innerText += ''

          valores.innerHTML = `Tabuada gerada:`
      }
  }