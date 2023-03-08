fetch("https://cors-everywhere.onrender.com/https://api.hgbrasil.com/finance")
    .then(response => response.json())
    .then(data =>{
        const results = data.results;
        console.log(results)
    })