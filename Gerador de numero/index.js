// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinharNumero() {
    const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    tentativas++;

    if (palpite === numeroAleatorio) {
        alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    } else if (palpite < numeroAleatorio) {
        alert("Tente um número maior.");
        adivinharNumero(); // Chama a função novamente
    } else {
        alert("Tente um número menor.");
        adivinharNumero(); // Chama a função novamente
    }
}

adivinharNumero(); // Inicia o jogo