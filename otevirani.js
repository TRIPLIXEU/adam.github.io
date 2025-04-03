
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
            "AK-47 Redline": "360fx360f (1).png",
            "AWP Asiimov": "stahování.jpg",
            "Glock-18 Fade": "dd5818-0f1e51bc6a30ded8228af29bb063fc76.webp",
            "M4A4 Howl": "8a7a5e48c6c9ed5da602a8b7bc2d5f9f-front.webp",
            "Karambit Doppler": "3439432594_preview_610.png"
        },
        2: {
            "M4A1-S Hyper Beast": "360fx360f.png",
            "USP-S Orion": "6a8bf3298908b80db004e5438d0e3926-front.webp",
            "Desert Eagle Blaze": "playside.webp",
            "FAMAS Pulse": "wiki_Htt512l_preview.png",
            "Butterfly Knife Fade": "3217528899_preview_99.png"
        },
        3: {
            "P90 Emerald Dragon": "p90.png",
            "AWP Hyper Beast": "weapon_awp_cu_awp_hyper_beast_light_large.55efa5e3094af71ca6a56b6eac96cb022f7ecd8b.png",
            "Five-SeveN Case Hardened": "2948645553_preview_278.png",
            "MP7 Neon Rider": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoWEmeX9N77DqWZU7Mxkh6fHotzw2AXs_RU4ZWnxI4KccAU-NAvS-Vm6xOzthpe1v8yazCRn6Cdw-.png",
            "Bayonet Crimson Web": "weapon_bayonet_hy_webs_light_large.9246001fd8c8b0c077dc2836ea7271a4a020750b.png"
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
