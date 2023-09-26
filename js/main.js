let teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla) => {

    tecla.addEventListener("click", () => {

        const teclaId = tecla.id;
        getSound(teclaId);
    });
});



function getSound(id) {
    const soundId = `#som_${id}`;
    let audio = document.querySelector(soundId).play();
    return audio;
};