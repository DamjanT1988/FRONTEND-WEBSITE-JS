# PROJEKT - WEBBTPLATSEN
Syftet med webbtjänsten är att:
* bekanta sig med relevanta begrepp & förstå hur att använda dessa
* använda Fetch-API i att konsumera en webbtjänst
* skapa en heltäckande webbplats som tillgodoser målgruppens behov
* Kunna automatisera uppgifter med något kommandobaserat verktyg i NodeJs, med syfte att förenkla utvecklingsarbetet av en webbplats.
* Kunna använda SASS för att underlätta utveckling med CSS.
* Kunna automatisera konvertering av SASS-filer med Gulp (eller Webpack om du använde det i tidigare moment).
* Vidareutveckla ditt start-paket för webbutveckling från tidigare laboration.
* Få en överblick över nytillkommen funktionalitet i senare versioner av Ecmascript.
* Implementera kod i gulp-koden samt för browsersync med rätt src-/pub-kataloger

## #BESKRIVNING
Webbplatsen där webbtjänsten konsumeras skapas med besökare (gäster) som mål-grupp. Det betyder att strukturen av information är viktig att presentera på det sätt som uppfyller besökarnas behov av att besöka webbplatsen. 

Målgruppsbehoven uppfylls genom en enkel och raktfram design vilket innefattar; se bilaga C och G för sidkarta och skärmdump av webbplatsen:

* Adress till restaurangen finns i sidhuvudet på alla sidor
* Huvudnavigationen finns på alla sidor med en lokalmarkör om specifik sida
* Alla formulärinput är större än standard tillgängligheten är bättre
* Startsidan visar hur restaurangen ser ut vilket är det virtuella fönstret samt som sätter förståelse till färgschema vilket är att webbplatsens grafiska profil med lo-gotyp matchar verksamhetens fysiska plats. Bilder på rätter finns på menysidan vilket är givet
* Webbplatsen är anpassningsbar till olika storlek, enheter och webbläsare samt anpassad för förstorning via webbläsarens zoom-funktion
* Det finns en hover-effekt för huvudnavigationen
* Inmatningsfälten för datum och tid använder HTML 5-standard för formulär av ”type”-attribut som ”date” och ”time” vilket underlättar inmatning av datum och tid men att det blir i korrekt form för databasen och sedan utskrift. 
* Gäster kan enkelt beställa specifika menyer genom att ange menynummer som är kopplade till autogenererade ID-värden
* Gäster kan läsa alla menyer, boka bord, se vilka bord är redan upptagna, få in-formation om företaget, beställa takeaways samt hitta platsen via en dynamisk och interaktiv karta. Telefonnummer och öppettider finns i sidfoten på alla sidor med dithörande fin bild.
* Den grafiska designen följer den logotyp och moodboard som skapades i plane-ringsfasen.
* Antal undersidor är lagom för behovet med klara menynamn med tillräckligt ut-rymme mellan text och knappstorlek genom ”padding”-egenskap på 2%.
 
Gulp används för att automatisera utvecklingen till publicering vilket fungerar genom filen ”gulpfile.js”. I figur 4 syns strukturen i rootkatalogen för hela utvecklingen för webbplatsen. Katalogen är uppdelad i två: en src-katalog där all utveckling sker; och en pub-katalog där all publicering sker. På det här sättet kan många ändringar göras i ut-vecklingskatalogen utan att det påverkar det publicerade materialet samt kan filer ma-nipuleras med Gulp för att ändra i dessa inför publicering. Git ignorerar att lagra node_modules via gitignore-fil. JSON-filerna innehåller information om paketen samt finns det en README.md-fil som beskriver webbplatsens och dess utveckling enligt in-struktionerna. Dessa paket är används; alla paket är installerade med devDepenencies:

* Gulp – kärnpaketet
* Browser-sync – strömmar alla förändringar i src-katalogen till pub-katalogen samt uppdaterar webbsidan vid ändring i filer
* Gulp-sass – konverterar flera .scss-filer till en .css-fil för publiceirng
* Gulp-concat – sätter samman de olika filer vid behov (inte här)
* Gulp-babel – kompilerar kod i ES5 och ES6

Gulp kör alla dessa paket med ”Gulp”-kommande i terminalen. Browser-sync är proble-matisk för två skäl i utvecklingen. Ena är den eviga omladdning av sidor som aktiveras vid förändring av src-filer. Det här fixades genom att ersätta reload-metoden med stream-metoden i browserSync-kod. Det innebär att alla filer uppdateras som tidigare men att webbsidan inte laddar om. Denna lösning innebär att manuell omladdning av webbsida krävs vilket är en mindre obekvämlighet. Det andra skälet är att BrowserSync medför att flera identiska anrop görs mot databasen vilket medför duplicering av samma formulärdata i databasen. Problemet försvinner vid avslut av Gulp-körning. Att fixa omladdningsbesväret tog tid eftersom en lösning var inte självklar (ingen lösning online) men efter dokumentationsläsning och experimentering av att ersätta reload med annat var stream godtagbar.

CSS-katalogens SASS-filer är uppdelade i en huvudfil där funktioner lagras medan tre filer representerar respektive enhet som används: desktop, platta och mobil. Det här underlättar utvecklingen i att inte behöva skrolla igenom en väldigt lång CSS-fil för att ändra något i media query om mobilen. Varje fil startas med respektive media query. Dessa konkateriseras vid publicering av Gulp vilket framgår i figur 5. Bildkatalogen förs över till publicering utan manipulation.

JavaScript-filer är uppdelade i en klasskatalog som anropas från en main.js-fil vilket är enligt CommonJS (ES5) arbetssätt klasser/moduler där en modul (fil) är en klass vilket är objektorienterad programmering.

## LÄNK TILL WEBBPLATS
Länk till publiceringen: http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_publikwebbplats_vt22-DamjanT1988/pub/index.html