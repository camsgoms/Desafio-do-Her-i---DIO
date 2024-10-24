// Função para classificar o herói com base na quantidade de XP
function classificarHeroi(nome, xp) {
    let nivel;

    // Estrutura de decisão para classificar o herói com base na XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    // Saída da classificação do herói
    console.log(`O herói de nome ${nome} está no nível de ${nivel}.`);
}

// Exemplo de uso
let nomeHeroi = "Thor";
let experienciaHeroi = 7500;

classificarHeroi(nomeHeroi, experienciaHeroi);
