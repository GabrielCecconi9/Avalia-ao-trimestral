function  calcularIMC() {
    var peso = eval(document.form.peso.value)
    var alt = eval(document.form.alt.value)
    var alt2 = alt / 100
    var IMC = peso  / (alt2 * alt2)



    function verificarIMC(imc) {
        if (imc < 17) {
          createMessage("Muito abaixo do peso", "alert")
        } else if (imc > 17 && imc <= 18.49){
          createMessage("Abaixo do peso", "warning")
        } else if (imc >= 18.5 && imc <= 24.99){
          createMessage("Peso normal", "sucess")
        } else if (imc >= 25 && imc <= 29.99){
          createMessage("Acima do peso", "warning")
        } else if (imc >= 30 && imc <= 34.99){
          createMessage("Obesidade I", "alert")
        } else {
          createMessage("Obesidade II", "danger")
        }
    }
    