const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

for (let i = 1; i <= 151; i++) {
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.svg`;
    img.alt = `Pokemon ${i}`;
    img.loading = "lazy"; // performance boost
    container.appendChild(img);
}

