let totalConsumo = 0;

function agregarElectrodomestico() {

    let nombre = document.getElementById("nombre").value;
    let potencia = document.getElementById("potencia").value;
    let horas = document.getElementById("horas").value;

    if (nombre === "" || potencia === "" || horas === "") {
        alert("Complete todos los campos");
        return;
    }

    let consumo = (potencia * horas * 30) / 1000;

    let tabla = document.getElementById("tablaDatos");

    tabla.innerHTML +=
        "<tr>" +
        "<td>" + nombre + "</td>" +
        "<td>" + consumo.toFixed(2) + " kWh</td>" +
        "</tr>";

    totalConsumo += consumo;

    document.getElementById("total").innerHTML =
        "Consumo Total: " + totalConsumo.toFixed(2) + " kWh";

    let recomendacion = document.getElementById("recomendacion");

    if (totalConsumo < 150) {
        recomendacion.innerHTML =
            "✅ Consumo eficiente.";
    }
    else if (totalConsumo < 300) {
        recomendacion.innerHTML =
            "⚠️ Consumo moderado. Intenta apagar equipos que no uses.";
    }
    else {
        recomendacion.innerHTML =
            "🚨 Consumo alto. Se recomienda reducir el uso de algunos equipos.";
    }

    document.getElementById("nombre").value = "";
    document.getElementById("potencia").value = "";
    document.getElementById("horas").value = "";
}