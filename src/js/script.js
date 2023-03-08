const cardValue = document.getElementsByClassName('js-card-value')

fetch("https://cors-everywhere.onrender.com/https://api.hgbrasil.com/finance")
    .then(response => response.json())
    .then(data =>{
        const results = data.results;
        const stocks = results.stocks;

        let i = 0

        for(let stock in stocks){
            if(i <= 1){
                cardValue[i].textContent = `${stocks[stock].variation}%`;

                if(stocks[stock].variation < 0){
                    cardValue[i].classList.add('u-negative')
                }
            }
            i++
        }
    })