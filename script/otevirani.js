
// Načtení nebo inicializace coinů
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;

function updateCoinCounter() {
    document.getElementById("coinCounter").innerText = `💰 ${coins}`;
}

// Klik na palmu přidává 1 coin
document.querySelector(".palm").addEventListener("click", function() {
    coins++;
    localStorage.setItem("coins", coins);
    updateCoinCounter();
});

function openCase(caseNumber) {
    if (coins < 50) {
        document.getElementById("result").innerHTML = "❌ Nemáš dost coinů! (Potřebuješ 50)";
        return;
    }

    // Odečítání 50 coinů
    coins -= 50;
    localStorage.setItem("coins", coins);
    updateCoinCounter();

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
    const resultDiv = document.getElementById("result");

    const interval = setInterval(() => {
        resultDiv.innerText = "🎲 Točí se... " + skinNames[index];
        index = (index + 1) % skinNames.length;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const randomSkin = skinNames[Math.floor(Math.random() * skinNames.length)];
        resultDiv.innerHTML = `🎉 Vyhrál jsi: <strong>${randomSkin}</strong><br><img src="${selectedCase[randomSkin]}" alt="${randomSkin}">`;
    }, 3000);
}

document.addEventListener("DOMContentLoaded", updateCoinCounter);
