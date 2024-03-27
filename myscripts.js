async function searchNeedleSize() {

    const needleSizeInput = document.getElementById('needleSize');

    const needleSize = needleSizeInput.value; /*Získání dat z textového pole o velikosti jehlic */

 

    const response = await fetch('data.php'); /*Načítání dat ze souboru data.php*/

    const data = await response.json(); /*čtení dat ve formátu JSON*/

 



    const results = data.filter(item => {

        if (item.length >= 3) { /*Kontrola, zda má položka alespoň 3 údaje */

            const rowNeedleSize = parseFloat(item[item.length - 1]); /*Získání posledního prvku - velikosti jehlic. Převedení na desetinné číslo.*/

            return !isNaN(rowNeedleSize) && rowNeedleSize === parseFloat(needleSize); /*Pokud je údaj číselný - porovná se získaná velikost s hledanou velikostí. Jestliže si jsou rovny - položka zůstane ve výsledném poli. */

        }

        return false; /*Jestliže položka nemá délku 3 - vyřadí se. */

    });

 

   

    const resultsContainer = document.getElementById('results'); /*Reference na místo v index.php, kde se výsledky zobrazují */

    resultsContainer.innerHTML = '<h2>Výsledky vyhledávání:</h2>'; /*Vložení nadpisu */

    if (results.length > 0) { /*Jestliže existuje výsledek... */

        resultsContainer.innerHTML += '<ul>'; /*Za h2 se vloží ul. */

        results.forEach(result => { /*Pro každý výsledek se vygeneruje řádek s informacemi*/

            resultsContainer.innerHTML += `<li>příze ${result[0]} - vlna: ${result[1]}, polyacryl: ${result[2]}, bavlna: ${result[3]}, alpaka: ${result[4]}, velikost jehlic: ${result[5]}mm</li>`;

        });

        resultsContainer.innerHTML += '</ul>'; /*Uzavření ul */

    } else {

        resultsContainer.innerHTML += '<p>Žádné výsledky.</p>'; /*Jestliže je délka pole 0, vypiš následující zprávu. */

    }

}
