document.addEventListener('DOMContentLoaded', () => {
    // Data for the encyclopedia
    const houses = [
        { name: 'Gryffindor', founder: 'Godric Gryffindor', animal: 'Lion', colors: 'Scarlet and gold', image: 'images/gryffindor.png' },
        { name: 'Slytherin', founder: 'Salazar Slytherin', animal: 'Serpent', colors: 'Green and silver', image: 'images/slytherin.png' },
        { name: 'Ravenclaw', founder: 'Rowena Ravenclaw', animal: 'Eagle', colors: 'Blue and bronze', image: 'images/ravenclaw.png' },
        { name: 'Hufflepuff', founder: 'Helga Hufflepuff', animal: 'Badger', colors: 'Yellow and black', image: 'images/hufflepuff.png' }
    ];

    const characters = [
        { name: 'Harry Potter', house: 'Gryffindor', ancestry: 'Half-blood', species: 'Human', image: 'images/harry.jpg' },
        { name: 'Hermione Granger', house: 'Gryffindor', ancestry: 'Muggle-born', species: 'Human', image: 'images/hermione.jpg' },
        { name: 'Ron Weasley', house: 'Gryffindor', ancestry: 'Pure-blood', species: 'Human', image: 'images/ron.jpg' },
        { name: 'Draco Malfoy', house: 'Slytherin', ancestry: 'Pure-blood', species: 'Human', image: '' }, // Add image path if available
        { name: 'Luna Lovegood', house: 'Ravenclaw', ancestry: 'Pure-blood', species: 'Human', image: '' },
        { name: 'Cedric Diggory', house: 'Hufflepuff', ancestry: 'Pure-blood', species: 'Human', image: '' }
    ];

    const spells = [
        { name: 'Accio', type: 'Charm', effect: 'Summons an object' },
        { name: 'Alohomora', type: 'Charm', effect: 'Unlocks doors' },
        { name: 'Wingardium Leviosa', type: 'Charm', effect: 'Makes objects fly' },
        { name: 'Expelliarmus', type: 'Charm', effect: 'Disarms your opponent' },
        { name: 'Lumos', type: 'Charm', effect: 'Creates light at wand tip' },
        { name: 'Nox', type: 'Charm', effect: 'Extinguishes light from wand' },
        { name: 'Expecto Patronum', type: 'Charm', effect: 'Casts a Patronus' },
        { name: 'Avada Kedavra', type: 'Curse', effect: 'The Killing Curse' }
    ];

    // Function to render content based on the current page
    const renderContent = (data, containerId, cardGenerator) => {
        const container = document.getElementById(containerId);
        if (!container) return; // Don't run if the container isn't on the page

        const render = (items) => {
            container.innerHTML = '';
            items.forEach(item => {
                container.innerHTML += cardGenerator(item);
            });
        };
        
        render(data); // Initial render

        const searchBar = document.getElementById('search-bar');
        if (searchBar) {
            searchBar.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
                render(filteredData);
            });
        }
    };

    // Card generator functions
    const createHouseCard = (house) => `
        <div class="card house-card">
            <h3>${house.name}</h3>
            <img src="${house.image}" alt="${house.name} crest">
            <p><strong>Founder:</strong> ${house.founder}</p>
            <p><strong>Animal:</strong> ${house.animal}</p>
            <p><strong>Colors:</strong> ${house.colors}</p>
        </div>
    `;

    const createCharacterCard = (char) => `
        <div class="card">
            <h3>${char.name}</h3>
            <p><strong>House:</strong> ${char.house}</p>
            <p><strong>Ancestry:</strong> ${char.ancestry}</p>
            <p><strong>Species:</strong> ${char.species}</p>
            ${char.image ? `<img src="${char.image}" alt="${char.name}">` : ''}
        </div>
    `;

    const createSpellCard = (spell) => `
        <div class="card">
            <h3>${spell.name}</h3>
            <p><strong>Type:</strong> ${spell.type}</p>
            <p><strong>Effect:</strong> ${spell.effect}</p>
        </div>
    `;

    // Call render functions for each page
    renderContent(houses, 'houses-container', createHouseCard);
    renderContent(characters, 'characters-container', createCharacterCard);
    renderContent(spells, 'spells-container', createSpellCard);
});
