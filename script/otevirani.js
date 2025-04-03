// Načtení nebo inicializace coinů
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;

// Update the coin counter display
function updateCoinCounter() {
    document.getElementById("coinCounter").innerText = `💰 ${coins}`;
}

// Initialize the sounds
const insufficientCoinsSound = new Audio('path/to/insufficient-coins.mp3');  // Sound for insufficient coins
const caseSpinSound = new Audio('path/to/case-spinning.mp3');  // Sound when the case is spinning
const winSkinSound = new Audio('path/to/win-skin.mp3');  // Sound when the user wins a skin

// Klik na palmu přidává 1 coin
document.querySelector(".palm").addEventListener("click", function() {
    coins++;
    localStorage.setItem("coins", coins);
    updateCoinCounter();
});

// Open case function
function openCase(caseNumber) {
    const resultDiv = document.getElementById("result");

    if (coins < 50) {
        resultDiv.innerHTML = "❌ Nemáš dost coinů! (Potřebuješ 50)";
        resultDiv.style.color = "red";

        // Play the sound when the user doesn't have enough coins
        insufficientCoinsSound.play();
        return;
    }

    // Deduct 50 coins for opening the case
    coins -= 50;
    localStorage.setItem("coins", coins);
    updateCoinCounter();

    // Play the spinning sound when the case starts spinning
    caseSpinSound.play();

    const cases = {
        1: {
            "AK-47 Redline": "img/redlineak47.jpg",
            "AWP Asiimov": "img/asimoovawp.jpg",
            "Glock-18 Fade": "img/glockfade.webp",
            "M4A4 Howl": "img/m4howl.webp",
            "Karambit Doppler": "img/karambitlapis.png"
        },
        2: {
            "M4A1-S Hyper Beast": "img/m4s.png",
            "USP-S Orion": "img/usp.webp",
            "Desert Eagle Blaze": "img/deagle.webp",
            "FAMAS Pulse": "img/famas.png",
            "Butterfly Knife Fade": "img/motylekfade.png"
        },
        3: {
            "P90 Emerald Dragon": "img/p90.png",
            "AWP Hyper Beast": "img/awphyperbeast.png",
            "Five-SeveN Case Hardened": "img/fiveseven.png",
            "MP7 Neon Rider": "img/mac10.png",
            "Bayonet Crimson Web": "img/bayonetred.png"
        }
    };

    const selectedCase = cases[caseNumber];
    const skinNames = Object.keys(selectedCase);
    let index = 0;

    const interval = setInterval(() => {
        resultDiv.innerText = "🎲 Točí se... " + skinNames[index];
        index = (index + 1) % skinNames.length;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const randomSkin = skinNames[Math.floor(Math.random() * skinNames.length)];
        resultDiv.innerHTML = `🎉 Vyhrál jsi: <strong>${randomSkin}</strong><br><img src="${selectedCase[randomSkin]}" alt="${randomSkin}">`;

        // Play the winning sound when the user wins a skin
        winSkinSound.play();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", updateCoinCounter);
