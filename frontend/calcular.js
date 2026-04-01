function calcularIMC() {
        // Obtém os valores dos inputs
        const peso = parseFloat(document.getElementById('peso').value);
        console.log(`o seu peso é ${peso}`);

        const altura = parseFloat(document.getElementById('altura').value);
        console.log(altura);

        const resultadoDiv = document.getElementById('resultado');
        console.log(resultadoDiv);

        // Validação básica
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
            return;
        }

        // Cálculo do IMC: Peso / Altura²
        const imc = peso / (altura * altura);
        
        // Exibe o resultado com uma casa decimal
        let classificacao = "";
        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(1)} (${classificacao})`;
    }