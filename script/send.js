
// JavaScript pro zobrazení vyskakovacího okna po odeslání formuláře
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Zamezí odeslání formuláře na server
    alert('Zpráva byla odeslána. Dáme vám vědět!');
    // Volitelně, po zobrazení zprávy můžete formulář vyčistit:
    document.getElementById('contactForm').reset();
});
