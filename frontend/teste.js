
        function alternarExibicao() {
            // 1. Obtém a referência do elemento
            var elemento = document.getElementById("mensagem");

            // 2. Verifica o estado atual com IF
            if (elemento.style.display === "none" || elemento.style.display === "") {
                // 3. Ação se a condição for verdadeira (oculto) -> Exibe
                elemento.style.display = "block";
            } else {
                // 4. Ação se a condição for falsa (visível) -> Oculta
                elemento.style.display = "none";
            }
        }