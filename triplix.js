// Sample data for items in the cases
const items = [
    { id: 1, name: "AK-47 | Redline", image: "https://external-preview.redd.it/106f9WUTW2W_QMR3eA7XKy6AKu-l3i3WUmkjYbXu08M.jpg?auto=webp&s=ed793a9c09ebd0a8e0e61ab7e0cff509a37f19d4" },
    { id: 2, name: "M4A4 | Desolate Space", image: "https://i.pinimg.com/originals/75/5e/fc/755efc4eea5666e12effe6bfbda4e348.png" },
    { id: 3, name: "AWP | Asiimov", image: "item3.jphttps://www.technetdeals.com/wp-content/uploads/2023/06/Asiimov-in-CS2.jpg" },
    // Add more items as needed
];

const caseItems = {
    1: [1, 2], // Case 1 contains items with IDs 1 and 2
    2: [2, 3], // Case 2 contains items with IDs 2 and 3
};

// Function to open a case and display a random item
function openCase(caseNumber) {
    const caseElement = document.getElementById('case' + caseNumber);
    // Apply the "rolling" animation to the case
    caseElement.classList.add('case-rolling');

    // Wait for the animation to complete before selecting an item
    setTimeout(() => {
        const itemIDs = caseItems[caseNumber];
        const randomItemID = itemIDs[Math.floor(Math.random() * itemIDs.length)];
        const item = items.find(item => item.id === randomItemID);

        // Display the item in the items section
        const itemList = document.getElementById('itemList');
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        itemList.appendChild(itemDiv);

        // Fade in the item after the case is rolled
        setTimeout(() => {
            itemDiv.classList.add('show');
        }, 100);
    }, 3000); // Matches the duration of the animation
}
