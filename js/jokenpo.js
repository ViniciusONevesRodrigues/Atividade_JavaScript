chose1 = () => {
    var pedra = document.getElementById("pedra");
    pedra.src = "img/pedra-papel-tesoura (5).png";
    pedra.alt = "Verde";
    document.getElementById("papel").src = "img/pedra-papel-tesoura (3).png";
    document.getElementById("papel").alt = "Papel";
    document.getElementById("tesoura").src = "img/pedra-papel-tesoura (4).png";
    document.getElementById("tesoura").alt = "Tesoura";

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computador = getRandomInt(1, 3);
    let pedraEscolha = 2;
    if (pedraEscolha > computador) {
        document.getElementById("result-text").innerHTML = "Você venceu!";
        var tesourac = document.getElementById("computer-choice3");
        tesourac.src = "img/pedra-papel-tesoura (7).png";
        tesourac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "pedra";

    } else if (pedraEscolha < computador) {
        document.getElementById("result-text").innerHTML = "Você perdeu!";
        var papelc = document.getElementById("computer-choice2");
        papelc.src = "img/pedra-papel-tesoura (6).png";
        papelc.alt = "Verde";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "Pedra";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    } else {
        document.getElementById("result-text").innerHTML = "Empatou!";
        var pedrac = document.getElementById("computer-choice1");
        pedrac.src = "img/pedra-papel-tesoura (5).png";
        pedrac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    }
};

chose2 = () => {
    var papel = document.getElementById("papel");
    papel.src = "img/pedra-papel-tesoura (6).png";
    papel.alt = "Verde";
    document.getElementById("pedra").src = "img/pedra-papel-tesoura (2).png";
    document.getElementById("pedra").alt = "Pedra";
    document.getElementById("tesoura").src = "img/pedra-papel-tesoura (4).png";
    document.getElementById("tesoura").alt = "Tesoura";

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computador = getRandomInt(1, 3);
    let papelEscolha = 2;
    if (papelEscolha > computador) {
        document.getElementById("result-text").innerHTML = "Você venceu!";
        var pedrac = document.getElementById("computer-choice1");
        pedrac.src = "img/pedra-papel-tesoura (5).png";
        pedrac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    } else if (papelEscolha < computador) {
        document.getElementById("result-text").innerHTML = "Você perdeu!";
        var tesourac = document.getElementById("computer-choice3");
        tesourac.src = "img/pedra-papel-tesoura (7).png";
        tesourac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "pedra";

    } else {
        document.getElementById("result-text").innerHTML = "Empatou!";
        var papelc = document.getElementById("computer-choice2");
        papelc.src = "img/pedra-papel-tesoura (6).png";
        papelc.alt = "Verde";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "Pedra";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    }
};

chose3 = () => {
    var tesoura = document.getElementById("tesoura");
    tesoura.src = "img/pedra-papel-tesoura (7).png";
    tesoura.alt = "Verde";
    document.getElementById("papel").src = "img/pedra-papel-tesoura (3).png";
    document.getElementById("papel").alt = "Papel";
    document.getElementById("pedra").src = "img/pedra-papel-tesoura (2).png";
    document.getElementById("pedra").alt = "pedra";

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computador = getRandomInt(1, 3);
    let tesouraEscolha = 2;
    if (tesouraEscolha > computador) {
        document.getElementById("result-text").innerHTML = "Você venceu!";
        var papelc = document.getElementById("computer-choice2");
        papelc.src = "img/pedra-papel-tesoura (6).png";
        papelc.alt = "Verde";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "Pedra";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    } else if (tesouraEscolha < computador) {
        document.getElementById("result-text").innerHTML = "Você perdeu!";
        var pedrac = document.getElementById("computer-choice1");
        pedrac.src = "img/pedra-papel-tesoura (5).png";
        pedrac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice3").src = "img/pedra-papel-tesoura (4).png";
        document.getElementById("computer-choice3").alt = "Tesoura";

    } else {
        document.getElementById("result-text").innerHTML = "Empatou!";
        var tesourac = document.getElementById("computer-choice3");
        tesourac.src = "img/pedra-papel-tesoura (7).png";
        tesourac.alt = "Verde";
        document.getElementById("computer-choice2").src = "img/pedra-papel-tesoura (3).png";
        document.getElementById("computer-choice2").alt = "Papel";
        document.getElementById("computer-choice1").src = "img/pedra-papel-tesoura (2).png";
        document.getElementById("computer-choice1").alt = "pedra";
    }
};

