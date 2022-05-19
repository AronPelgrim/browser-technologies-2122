[Opdracht 1](https://aronpelgrim.github.io/browser-technologies-2122/Opdracht%201/)

[Opdracht 2](https://aronpelgrim.github.io/browser-technologies-2122/Opdracht%202/)

# Browser Technologies: Minor Webdevelopment enquete
Welkom bij deze repository. Voor dit project heb ik een enquete gemaakt voor de CMD minor, die werkzaam is op verschillende browsers en waarin het mogelijk is om de CSS en JavaScript uit te zetten en alsnog een werkende enquete te hebben. Dit is voornamelijk gedaan door de strategie Progressive Enhancement.

Volg de link voor de app!
[Live Heroku link enquete](https://browser-tech-aron.herokuapp.com/)

## Table of Contents

-   [User story](#user-story)
-   [Eisen](#eisen)
-   [Process](#process)
-   [Aanvullingen herkansing](#aanvullingen-herkansing)
-   [Issues?](#issues)
-   [License](#license)

## User story
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Eisen 
- Studentgegevens (naam + nummer) verplicht
- Per vak 
	- naam
	- docent(en)
	- weken waarin je het vak deed
	- beoordeling op schaal 1-10 van
	- lesstof (hoe moeilijk is het)
	- uitleg (hoe duidelijk is het uitgelegd)
	- eigen inzicht (hoe goed snap je het)
	
- Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Process
### Breakdownschets
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162272581-9c42f1f3-1128-4bca-a674-62dc8a443b37.jpg">

Om ervoor te zorgen dat de HTML semantisch netjes is en daardoor altijd blijft werken, heb ik voordat ik ben begonnen met coderen, de HTML uitgeschreven in een breakdownschets. Op deze manier wil ik een goede basis creëren.

### Usability HTML
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162273808-7ab17617-0009-48cb-87f1-470d884747ad.jpg">

Het is belangrijk dat ik weet dat de core functionaliteit in elke browser blijft werken. Daarom heb ik onderzoek gedaan op https://caniuse.com/ om te kijken hoe de HTML elementen worden gesupport. Het komt erop neer dat alleen ```datetime-local``` niet word gesupport door eerdere browsers. Dit is niet erg, want er is een fallback; namelijk dat het een normale ```input``` wordt.

### Wireflow
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162275076-567ef71a-e8f2-4a33-9a4c-ba9c4b62dec1.jpg">

Om grofweg een idee te krijgen van hoe de app eruit gaat zien, heb ik een wireflow gemaakt. Ik wil per vak het formululier zichtbaar hebben, terwijl het eigenlijk wel 1 groot formulier is met alle vakken. Dit kan ik gaan doen met de ```:target``` selector.

### HTML basis
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162276420-9c9f5c48-a834-453d-ba1f-9280cc27fca5.png">

Na het schetsen ben ik begonnen met coderen. Uiteraard eerst alleen de sterke basis met html. Op de afbeelding is te zien dat het formulier prima kan worden voltooid zonder CSS en JavaScript.

### CSS laag
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162278381-3bab2bb5-0078-4c66-be13-9775909b3bbb.png">

Nadat ik zeker wist dat de core functionality goed stond, ben ik styling gaan toevoegen aan de enquete. Zoals je kan zien is alleen het relevante onderwerp in beeld. Dat doe ik dus met de ```:target``` selector.

### JavaScript laag
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/162279238-de031ddb-6008-4d2d-bcb3-3251ffc0eb84.png">

Met JavaScript heb ik ervoor gezorgd dat als er een nieuw vak in beeld komt, dat deze met een animatie wordt ingesprongen. Dat doe ik met de ```Intersection Observer API```. Die geeft een ```class``` aan een element op het moment dat deze in beeld springt. Het is een leuke toevoeging, maar kan zonder problemen worden uitgezet. Dit zal niks stuk maken aan de core functionality.

### Overige verbeteringen
Bij het tovoegen van de CSS laag, heb ik er rekening mee gehouden, dat niet alle (vooral nieuwe) elementen worden gesupport in alle browsers. Vandaar dat ik een aantal ```@supports``` media queries heb gebruikt. 

Ik heb dit bijvoorbeeld gebruikt bij een grid.

```CSS
@supports (display: grid) {
    body {
      display: grid;
      place-items: center;
    }
    h1 {
        text-align: center;
    }
}
```

Ook heb ik deze methode gebruikt voor flexbox.

```CSS
@supports (display: flex) {
    fieldset:target {
        display: flex;
        flex-direction: column;
    }
    br {
        display: none;
    }
}
```

En tot slot heb ik dit gebruikt bij ```clamp()``` om verschillende font-sizes op een goede manier mee te laten schalen.

```CSS
@supports (font-size: clamp(.8rem, 2vw, 1rem)) {
    h1 {
        font-size: clamp(1.5rem, 2.5vw, 2.2rem); 
    }
    legend {
        font-size: clamp(1rem, 2vw, 1.5rem); 
    }
    label {
        font-size: clamp(.8rem, 2vw, 1rem); 
    }
    input, textarea, select {
        font-size: clamp(.8rem, 2vw, 1rem);
    }
    input[type=submit] {
        font-size: clamp(.8rem, 2vw, 1rem);
    }
    a {
        font-size: clamp(.8rem, 2vw, 1rem);
    }
    li {
        font-size: clamp(.8rem, 2vw, 1rem);
    }
}
```

## Aanvullingen herkansing
Het eerste ontwerp was redelijk compleet, maar het miste nog wel iets, namelijk een goede validatie. Doordat ik met de ```:target``` selector alleen de fieldsets liet zien die op dat moment actief waren, kon de HTML validatie, de niet actieve fieldsets, die niet compleet waren ingevuld, niet vermelden in een popup. De gebruiker moest dan handmatig naar de juiste fieldset navigeren, om daar de velden compleet te maken. Door deze reden, heb ik de ```:target``` selector uit het prototype gehaald en laat ik nu alle fieldsets op één pagina zien

<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/169318440-bc39b656-1f94-4fb9-9bf0-dc6e0036a957.png">

## Issues?
Je kan een issue aanmaken in deze repository om me te laten weten wat er mis gaat.

 ## License
[MIT](https://github.com/AronPelgrim/progressive-web-apps-2122/blob/main/LICENSE)
