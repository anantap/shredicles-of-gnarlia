# Line Generator

Genereert skatevideo-lijnen: 5 tot 8 bestaande trucs achter elkaar in één run, met kloppende stances en de moeilijkste truc (de banger) aan het eind.

## Gebruik

Open `index.html` in een browser. Er is geen build-stap en er zijn geen afhankelijkheden.

- **Niveau** (beginner / gevorderd / pro) bepaalt welke trucs in de pool zitten.
- **Obstakels in de spot** bepalen waar trucs kunnen landen. Flat staat altijd aan.
- **Nieuwe lijn** maakt een nieuwe lijn. Met **↻** rol je één truc opnieuw; de stance-keten blijft dan kloppen.
- **Kopieer als tekst** kopieert de lijn als één Nederlandse zin.

## Trucs toevoegen of namen corrigeren

De database staat bovenaan in `index.html`, als JSON-blok (`<script type="application/json" id="trick-db">`). Elke truc heeft `name`, `category`, `startStance`, `endStance`, `difficulty` (1-5) en `obstacles`. Bij het laden wordt de database gecontroleerd; fouten verschijnen in de console en in de zelftest.

## Tests

- In de browser: klik op **Zelftest: 1000 lijnen** onderaan de pagina, of roep `runLineTests()` aan in de console.
- In Node: `node test/run.js` (of `node test/run.js 5000`).

De test genereert lijnen met willekeurige instellingen en rolt in elke lijn één truc opnieuw. Hij controleert daarbij de lengte (5-8), de stance-continuïteit, dat de laatste truc de moeilijkste is, en of de kopieertekst precies één zin is die op een punt eindigt en aan de regels voor verbindingswoorden voldoet.
