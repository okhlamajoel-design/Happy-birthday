/* =========================
   ELEMENTS
========================= */

const music = document.getElementById("bgMusic");

const openButton = document.getElementById("openButton");

const letterButton = document.getElementById("letterButton");

const envelope = document.getElementById("envelope");

const letterPopup = document.getElementById("letterPopup");

const closeLetter = document.getElementById("closeLetter");

const replayButton = document.getElementById("replayButton");

/* =========================
   START MUSIC
========================= */

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    music.play()
        .then(() => {

            musicStarted = true;

        })
        .catch(() => {

            console.log("Music menunggu interaksi user.");

        });

}


/* =========================
   TAP ANYWHERE
========================= */

document.addEventListener("click", function () {

    startMusic();

}, { once: true });


/* =========================
   OPEN WEBSITE
========================= */

openButton.addEventListener("click", function () {

    startMusic();

    const nextSection =
        document.querySelector(".birthday");

    nextSection.scrollIntoView({

        behavior: "smooth"

    });

});


/* =========================
   OPEN LETTER
========================= */

function showLetter() {

    letterPopup.classList.add("open");

}


/* Button */

letterButton.addEventListener(
    "click",
    showLetter
);


/* Envelope */

envelope.addEventListener(
    "click",
    showLetter
);


/* =========================
   CLOSE LETTER
========================= */

closeLetter.addEventListener(
    "click",
    function () {

        letterPopup.classList.remove("open");

    }
);


/* Click outside paper */

letterPopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === letterPopup
        ) {

            letterPopup.classList.remove("open");

        }

    }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            letterPopup.classList.remove(
                "open"
            );

        }

    }
);


/* =========================
   REPLAY
========================= */

replayButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

