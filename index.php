<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="myscripts.js"></script>
  <title>Vyhledávání vlny</title>
</head>
<body>
  <h1>Vyhledávání vlny podle velikosti jehlic</h1>

  <form> <!--Formulář na zadání údajů a spuštění vyhledávání-->
    <label for="needleSize">Velikost jehlic 2 - 20 (včetně 2.5, 3.5 atd.):</label>
    <input type="text" id="needleSize" placeholder="Zadejte velikost jehlic" required> <!--Textové pole s ID pro soubor myscripts.js pro získání zadané hodnoty. -->
    <button type="button" onclick="searchNeedleSize()">Vyhledat</button> <!-- Tlačítko spouštěcí funkci searchNeedleSize v myscripts.js -->
  </form>

  <div id="results"> <!--Zde se zobrazí výsledky vyhledávání-->

  </div>

</body>
</html>
