const teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla) => {

    tecla.onclick = () => {

        const audio = getSound(tecla.id);

        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        };
    };

    tecla.onkeydown = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add("ativa");
        };
    };

    tecla.onkeyup = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.remove("ativa");
        };
    };
});

/* Same result using While Method instead of forEach

let contador = 0;

while (contador < teclas.length) {

    let tecla = teclas[contador];
    tecla.onclick = () => {
        const audio = getSound(tecla.id);
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        };
    };
    
    contador = contador + 1;
};
*/

function getSound(id) {
    // template string
    const soundId = `#som_${id}`;
    let audio = document.querySelector(soundId);
    return audio;
};