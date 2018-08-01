class InfoState {
    constructor(guessNumber, score, zoomLevel) {
        this.guessNumber = guessNumber || 0
        this.score = score || 20
        this.zoomLevel = zoomLevel || 18
    }
    changeGuessNumber() {
        this.guessNumber++
    }
    changeScore() {
        this.score--
    }
    changeZoomLevel() {
        this.zoomLevel--
    }
    reset() {
        this.guessNumber = 0;
        this.zoomNumber = 0;
        this.score = 20;
        this.zoomLevel = 18;
    }
}


// let infoState = { guessNumber: 0, score: 20, zoomLevel: 18 }

// function updateInfoState(statesToChange) {
//     if (statesToChange.includes("Wrong guess")) {
//         infoState.guessNumber++
//         wrongGuessAlert = document.getElementById("alert")
//         wrongGuessAlert.style = "display: inline-block; position: absolute; top: 400px; left: 250px; width: 350px;"
//         wrongGuessAlert.innerHTML = "Guess " + infoState.guessNumber + ": Wrong guess, guess again! <br><button onclick='closeAlert()' id='guessAgain'>Close</button>"
//     }
//     if (statesToChange.includes("Score")) {
//         infoState.score--
//         updateScore();
//     }
//     if (statesToChange.includes("Reset")) {
//         infoState.guessNumber = 0;
//         infoState.zoomNumber = 0;
//         infoState.score = 20;
//         infoState.zoomLevel = 18;

//         document.getElementById("latitude").textContent = "Latitude: ?"
//         document.getElementById("longitude").textContent = "Longitude: ?"
//         document.getElementById("countySpan").textContent = "County: ?"
//     }
//     if (statesToChange.includes("Zoom level")) {
//         infoState.zoomLevel--
//     }
// }