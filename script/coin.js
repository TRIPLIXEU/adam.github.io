
    
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;


function updateCoinCounter() {
    document.getElementById("coinCounter").innerText = `💰 ${coins}`;
}


document.getElementById("palm").addEventListener("click", function() {
    coins++;
    localStorage.setItem("coins", coins); 
    updateCoinCounter();
});


const skins = [
    { name: "AK-47 | Redline", image: "img/redlineak47.jpg" },
    { name: "M4A4 | Howl", image: "img/m4howl.webp" },
    { name: "AWP | Dragon Lore", image: "img/awpdragon.jpg" },
    { name: "Desert Eagle | Blaze", image: "img/deagle.webp" },
    { name: "Glock-18 | Fade", image: "img/glockfade.webp" }
];

document.getElementById("openCaseBtn").addEventListener("click", function() {
    const skinResult = document.getElementById("skinResult");

    
    if (coins < 50) {
        skinResult.innerHTML = "❌ Nemáte dostatek coinů! (Potřebujete 50)";
        skinResult.style.color = "red";
        return;
    }

    
    coins -= 50;
    localStorage.setItem("coins", coins);
    updateCoinCounter();

    let rollingInterval;
    let counter = 0;

    
    skinResult.innerHTML = "🎲 Otevírání case...";
    rollingInterval = setInterval(() => {
        const randomSkin = skins[Math.floor(Math.random() * skins.length)];
        skinResult.innerHTML = `<strong>${randomSkin.name}</strong><br><img src="${randomSkin.image}" alt="${randomSkin.name}" style="max-width: 150px; margin-top: 10px;">`;
        counter++;
    }, 100);

    
    setTimeout(() => {
        clearInterval(rollingInterval);
        const finalSkin = skins[Math.floor(Math.random() * skins.length)];
        skinResult.innerHTML = `🎉 Gratulujeme! Získali jste: <strong>${finalSkin.name}</strong><br>
            <img src="${finalSkin.image}" alt="${finalSkin.name}" style="max-width: 200px; margin-top: 10px;">`;
    }, 2500);
});


updateCoinCounter();
