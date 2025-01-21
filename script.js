//fetch complimenton uit json 

async function fetchCompliments() {
    try {
        const response = await fetch('./data/compliments.json');
        if (!response.ok) throw new Error('Ik kan het JSON-bestand niet laden');
        const data = await response.json();
        console.log('response:', response, 'data:', data);
        return data.complimenten;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
        return ['Je straalt vandaag'];
    } finally {
        console.log('Fetch compliments is afgerond');
    }
};
// Display a random compliment
function displayRandomCompliment(compliments) {
    console.log('copmimenten:', compliments);
    const complimentElement = document.getElementById('compliment');
   const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
   console.log(randomCompliment);
   complimentElement.textContent = randomCompliment;
};
// Initialize the script
(async () => {
    const compliments = await fetchCompliments();
    const button = document.getElementById('generate-btn');
    if (button) {
        button.addEventListener('click', () => displayRandomCompliment(compliments));
    } else {
        console.error('niet gevonden');
    }
})();

