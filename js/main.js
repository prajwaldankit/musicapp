window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelectorAll(".visual");
    const colors = [
        "rgb(240, 128, 128)",
        "rgb(45, 20, 85)",
        "rgb(191, 221, 17)",
        "rgb(202, 9, 228)",
        "rgb(18, 214, 165)",
        "rgb(240, 4, 4)"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createObj(index);
        });
    });

    const createObj = index => {
        const obj1 = document.createElement("div");
        visual.appendChild(obj1);
        obj.style.backgroundColor= colors[index];
        obj.style.animation = "jump";
        obj.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});
