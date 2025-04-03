let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;

// Update the coin counter display
function updateCoinCounter() {
    document.getElementById("coinCounter").innerText = `💰 ${coins}`;
}

// Initialize the sounds
const palmSound = new Audio('sound/coinclick.mp3');  // Replace with your palm-click sound file
const caseSpinSound = new Audio('sound/caseroll.mp3');  // Replace with your case-spinning sound file
const winSkinSound = new Audio('sound/happywheels.mp3');  // Replace with your win-skin sound file
const notEnoughCoinsSound = new Audio('sound/error.mp3');  // Replace with your not-enough-coins sound file

// Palm click event listener
document.getElementById("palm").addEventListener("click", function() {
    coins++;
    localStorage.setItem("coins", coins); 
    updateCoinCounter();
    
    // Play the sound when the palm is clicked
    palmSound.play();
});

// Array of skins for the case
const skins = [
    { name: "AK-47 | Redline", image: "img/redlineak47.jpg" },
    { name: "M4A4 | Howl", image: "img/m4howl.webp" },
    { name: "AWP | Dragon Lore", image: "img/awpdragon.jpg" },
    { name: "Desert Eagle | Blaze", image: "img/deagle.webp" },
    { name: "Glock-18 | Fade", image: "img/glockfade.webp" }
];

// Case open event listener
document.getElementById("openCaseBtn").addEventListener("click", function() {
    const skinResult = document.getElementById("skinResult");

    if (coins < 50) {
        // Play the sound when there aren't enough coins
        notEnoughCoinsSound.play();
        
        skinResult.innerHTML = "❌ Nemáte dostatek coinů! (Potřebujete 50)";
        skinResult.style.color = "red";
        return;
    }

    // Deduct 50 coins for opening the case
    coins -= 50;
    localStorage.setItem("coins", coins);
    updateCoinCounter();

    // Play the spinning sound when the case starts spinning
    caseSpinSound.play();

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

        // Play the winning sound when the user wins a skin
        winSkinSound.play();
    }, 2500);
});

// Initialize the coin counter on page load
updateCoinCounter();
