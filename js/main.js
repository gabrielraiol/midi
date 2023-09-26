let teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla) => {

    tecla.onclick = () => {
        const teclaId = tecla.id;
        getSound(teclaId);
    };
});

function getSound(id) {
    const soundId = `#som_${id}`;
    let audio = document.querySelector(soundId).play();
    return audio;
};


/*
const button = document.querySelector("button");

button.onclick = (e) => {
    console.log("ei caralho");
};
*/