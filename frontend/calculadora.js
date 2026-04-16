
        function calcular() {
            // Obtém os valores dos campos
            let n1 = parseFloat(document.getElementById('num1').value);
            let n2 = parseFloat(document.getElementById('num2').value);
            let op = document.getElementById('operador').value;
            let res = 0;

            // Verifica se são números válidos
            if (isNaN(n1) || isNaN(n2)) {
                alert("Por favor, insira números válidos");
                return;
            }

            // Realiza a operação
            switch (op) {
                case '+': res = n1 + n2; break;
                case '-': res = n1 - n2; break;
                case '*': res = n1 * n2; break;
                case '/': 
                    res = n2 !== 0 ? n1 / n2 : "Erro (div/0)"; 
                    break;
            }

            // Exibe o resultado
            document.getElementById('resultado').innerText = "Resultado: " + res;
        }
    