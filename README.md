# Damjans projekt
Kurs: DT173G - Webbutveckling III
Det som ska göras läras i kursen är olika typer av scriptspråk med tekniker som NodeJS med dess paketsystem som NPM.

## Moment 1 - NodeJS & GULP
Syftet med momentet är att:
* Få en inblick i att använda NodeJs på klient-sidan.
* Kunna automatisera uppgifter med något kommandobaserat verktyg i NodeJs, med syfte att förenkla utvecklingsarbetet av en webbplats.
* Skapa en grundstruktur som sedan kan användas som grund till kommande webbplatser.

1. Lära sig att installera NodeJS & NPM
2. Lära sig att använda GULP

### Steg-för-steg uppbyggnad
0. -gitignore-fil skapat med innehåll att ignorera node_modules-katalog
1. npn init - terminal
2. Fyll i information för package.json om projektet
3. Skapa kataloger src & pub
4. Skapa tomma filer för CSS, JS & HTML
5. Fyll i filer med testkod
6. Installera Gulp - npm install gulp --save-dev
7. Installera alla moduler i gulp som ska användas - OBS! gulp-imagemin: 7.1.0 för . kompabilitet

### Programkod
Koden i gulpfilen är gjord för att omvandla källkodsfilerna till publiceringsformat genom att till exempel sammansätta filer till en samt minifiera dessa & minifiera bildstorlek.

## Redovisningsfrågor
* Automatiseringsprocessens syfte: att dela upp arbete med källkodsfiler för att separera delar av kod i moduler som sedan ska satta samman via processen oavsett hur många källskodfiler skapas i respektive katalog till publiceringsfiler. Alla uppgifter är automatiserade via kod, paket & modul tull ett byggsystem som underlättar utvecklingen som kör >1 processer m.h.a. NoodeJS.
* Paket & verktyg: NodeJS, pakethanteringssystemet NPM med byggsystemverktyget GULP där fiverse delar laddats ner (olika uppgifter) vilket kan utläsas i package.json-filen. Vidare används Visual Studio Code. BrowserSync används för att uppdatera webbläsarw vid ändring i publiceringsfiler.
* Beskrivning av byggsystem: systemet är uppbyggt i en src-katalog med katolog för CSS, bilder & JS med HTML-indexfil i root. Filer i JS & CSS konkateras till en huvudfil vid körning medan HTML-filen uppdateras i sin root i publiceringskatalogen. Browsersync lyssnar på förändringar i alla uppgifter vilket uppdateras i realtid. Det startas genom att köra "gulp" i PowerShell/CMD & avslutas genom ctrl+c. Uppgifter som ingår är att konkatera filer, minifiera kod samt minifiera bildstorlek.

## Moment 2 - CSS-preprocessorer & SASS
Syftet med uppgiften är att:
* Förstå syftet med CSS-preprocessorer.
* Kunna använda SASS för att underlätta utveckling med CSS.
* Kunna automatisera konvertering av SASS-filer med Gulp (eller Webpack om du använde det i tidigare moment).
* Vidareutveckla ditt start-paket för webbutveckling från tidigare laboration.

1. Lära sig att implementera SASS-paket till CSS-publicering
2. Lära sig att skapa en webbplats med det
3. Lära sig programmering i SASS/SCSS

### steg-för-steg installation
1. bortkommentera existerande CSS-kod i gulpfil samt ta bort CSS-kataloger
2. Installera SASS i npm
3. Installera node-sass & gulp-sass
4. Branch skapad specifikt för moment 2 i GIT
5. Import av webbplats från tidigare projekt i programmet med HTML- & CSS-filer
6. Dela upp CSS-koden i delar av enheter: desktop, platta & mobil med partial
7. Lägg upp variabel för färger
8. Lägg in mixinx, arv, färgfunktion, IF/ELSE-satser.

## Moment 3 - EcmaScript
Syftet med uppgiften är att:
* Få en överblick över nytillkommen funktionalitet i senare versioner av Ecmascript.
* Kunna transpilera senare version av Ecmascript i en automatiserad utvecklings-miljö.

## Moment 4 - TypeScript
Syftet med uppgiften är att:
* Förstå vad TypeScript är, och hur det skiljer sig från JavaScript

### steg-för-steg installation
1. Installera NPM gulp-typescript för NODE.JS-miljön med: npm install gulp-typescript typescript
2. Implementera koden i gulpfilen för att kalla gulp-typescript:var ts  = require('gulp-typescript');
3. Implementera kod i gulp-koden samt för browsersync med rätt src-/pub-kataloger
