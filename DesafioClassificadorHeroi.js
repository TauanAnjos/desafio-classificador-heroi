const readline = require('readline');

// Criação da interface readline para entrada e saída padrão
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o nível do herói com base na experiência
function classificarHeroi(nome, experiencia) {
    let nivel;

    // Estruturas de decisão para determinar o nível
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return nivel;
}

// Função para solicitar a entrada do usuário
function solicitarHeroi() {
    let continuar;

    do {
        rl.question('Digite o nome do seu Herói (ou "sair" para encerrar): ', (nomeHeroi) => {
            if (nomeHeroi.toLowerCase() === "sair") {
                rl.close(); // Encerra a interface readline
                return;
            }

            rl.question('Digite a quantidade de experiência (XP) do seu Herói: ', (xp) => {
                let experienciaHeroi = parseInt(xp);

                // Chamada da função para classificar o herói
                let nivelHeroi = classificarHeroi(nomeHeroi, experienciaHeroi);

                // Saída do resultado
                console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

                // Pergunta se deseja continuar
                rl.question('Você gostaria de adicionar outro herói? (s/n): ', (resposta) => {
                    continuar = resposta.toLowerCase();
                    if (continuar === 's') {
                        solicitarHeroi(); // Chama a função novamente para adicionar outro herói
                    } else {
                        rl.close(); // Encerra a interface readline
                    }
                });
            });
        });
    } while (continuar === 's');
}

// Iniciar a solicitação do herói
solicitarHeroi();
