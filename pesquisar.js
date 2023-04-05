

function search(searchTerm) {
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');


searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        search(event.target.value);
    }
});




    const links = document.getElementsByTagName('a');


    const results = [];


    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const linkText = link.innerText.toLowerCase();
        if (linkText.includes(searchTerm.toLowerCase())) {
            results.push(link);
        }
    }


    searchResults.innerHTML = '';


    if (results.length > 0) {
        results.forEach(function (result) {
            searchResults.appendChild(result.cloneNode(true));
            searchResults.innerHTML += '<br>';
        });
    } else {
        searchResults.innerHTML = 'Nenhum resultado encontrado para "' + searchTerm + '"';
    }
}


