
var numero1 = 0
var operacion = "";
var termina = false;
var resultado = 0;
function saludar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    alert("Hola " + nombre + " " + apellido)
}
function sumar(num1, num2) {
    var resultado = num1 + num2;
    console.log("La suma es: " + resultado);
    alert("La Suma es: " + resultado)
}
function multi(num1, num2) {
    var resultado = num1 * num2;
    alert("La Multiplicacion es: " + resultado)
}
function divide(num1, num2) {
    if (num2 == 0) {
        alert("El divisor no puede ser cero")
    } else {
        var resultado = num1 / num2;
        alert("La Division es: " + resultado)
    }
}
function resta(num1, num2) {
    var resultado = num1 - num2;
    alert("La Resta es: " + resultado)
}

function Escribir(P_N) {
    //var numero = document.getElementById("btnUno").innerText;
    var pantalla = document.getElementById("txtResultado");

    if (termina == true) {
        pantalla.value = "";
        termina = false;
        if (pantalla.value == 0) {
            pantalla.value = P_N;
        } else {
            pantalla.value += P_N;
        }
        
    } else if (termina == false) {
        if (pantalla.value == 0) {
            pantalla.value = P_N;
        } else {
            pantalla.value += P_N;
        }
    }
}

function Operar(P_Signo) {
    var pantalla = document.getElementById("txtResultado");
    switch (P_Signo) {
        case "+":
            numero1 = Number(pantalla.value)
            pantalla.value = "";
            operacion = "+";
            EscribirHistoria(numero1 + " " + operacion, "operar")
            break;
        case "-":
            numero1 = Number(pantalla.value)
            pantalla.value = "";
            operacion = "-";
            EscribirHistoria(numero1 + " " + operacion, "operar")
            break;
        case "*":
            numero1 = Number(pantalla.value)
            pantalla.value = "";
            operacion = "*";
            EscribirHistoria(numero1 + " " + operacion, "operar")
            break;
        case "/":
            numero1 = Number(pantalla.value)
            pantalla.value = "";
            operacion = "/";
            EscribirHistoria(numero1 + " " + operacion, "operar")
            break;
        case "%":
            numero1 = Number(pantalla.value)
            pantalla.value = "";
            operacion = "%";
            EscribirHistoria(numero1 + " " + operacion, "operar")
            break;
    }
}

function Resultado() {
    var pantalla = document.getElementById("txtResultado");
    
    switch (operacion) {
        case "+":
            resultado = numero1 + Number(pantalla.value)
            EscribirHistoria(numero1 + " " + operacion, "resultado")
            break;
        case "-":
            resultado = numero1 - Number(pantalla.value)
            EscribirHistoria(numero1 + " " + operacion, "resultado")
            break;
        case "*":
            resultado = numero1 * Number(pantalla.value)
            EscribirHistoria(numero1 + " " + operacion, "resultado")
            break;
        case "/":
            var numero2 = Number(pantalla.value)
            if (numero2 == 0) {
                //alert("No se puede dividir por cero");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se puede dividir por cero",
                    //footer: '<a href="#">Why do I have this issue?</a>'
                });
                return;
            }
            resultado = numero1 / numero2
            EscribirHistoria(numero1 + " " + operacion, "resultado")
            break;
        case "%":
            resultado = (numero1 * Number(pantalla.value)) / 100;
            EscribirHistoria(numero1 + " " + operacion, "resultado")
            break;
    }
    pantalla.value = resultado;
    termina = true;
}

function Limpia() {
    var pantalla = document.getElementById("txtResultado");
    var historial = document.getElementById("lblOperacion");
    pantalla.value = 0;
    numero1 = 0;
    operacion = "";
    historial.innerText = "0";
    resultado = "0";
}

function Retroceso() {
    var pantalla = document.getElementById("txtResultado");
    var valor = pantalla.value;
    if (valor.length > 1) {
        pantalla.value = valor.substring(0, valor.length - 1);
    } else {
        pantalla.value = 0;
    }
}

function EscribirHistoria(P_Historia, P_Pregunta) {
    var historial = document.getElementById("lblOperacion");
    var pantalla = document.getElementById("txtResultado");

    if (P_Pregunta == "operar") {
        historial.innerText = P_Historia;
    } else if (P_Pregunta == "resultado") {
        historial.innerText = P_Historia + " " + pantalla.value + " =";
    }

    
    
}