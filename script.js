function calcularIMC(){

    const formulario = document.getElementById("formulario");	
        
    const massa = +formulario.massa.value;
    const metros = +formulario.metros.value;
    
    const altura = metros / 100;
     
    const imc = massa / (altura * altura);
    
    formulario.imc.value = imc.toFixed(2);
    
    if (imc < 14.5){
        formulario.status.value = ("Desnutrição");
    }else{
        if (imc < 20.0){
            formulario.status.value = ("Peso abaixo do normal");
        }else{
            if (imc < 24.9){
                formulario.status.value = ("Peso normal");
            }else{
                if (imc < 29.9){
                    formulario.status.value = ("Sobrepeso");
                }else{
                    if (imc < 39.9){
                        formulario.status.value = ("Obesidade");
                    }else{
                        if (imc > 39.9){
                            formulario.status.value = ("Obesidade mórbida");
                            }
                        }
                    }
                }
            }
       }
    }

function calcularBhaskara(){

    const formulario = document.getElementById("formulario2");

    const a = formulario.a.value;
    const b = formulario.b.value;
    const c = formulario.c.value;

    const delta = b * b -4 * a * c

    if (!a || !b || !c) {
        createAlert("Insira os valores de a, b e c");
      } else if (a == 0) {
        createAlert("O valor de <strong>a</strong>, deve ser diferente de 0");
      } else if (delta < 0) {
        createAlert("Sem raízes reais");
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        
        formulario.x1.value = x1;
        formulario.x2.value = x2;
      }
    }