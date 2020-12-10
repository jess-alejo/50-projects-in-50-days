const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.addEventListener("click", () => {
    resetSounds();
    document.getElementById(sound).play();
  });

  btn.innerText = sound;
  document.getElementById("buttons").appendChild(btn);
});

function resetSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
