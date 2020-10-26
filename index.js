// This function loads pokemon data from the Pokemon API
function fetchSimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const pokemonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:',);
        console.log(simpsons)
  
        // Build a block of HTML
        const pokemonHtml = `
          <p><strong>${simpsons[0].character}</strong></p>
          <p><strong>${simpsons[0].quote}</strong></p>
          <img src="${simpsons[0].image}" />
        `;
        document.querySelector('.content').innerHTML = pokemonHtml;
      });
  }
  
  fetchSimpsonsJSON();
