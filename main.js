function readJsonFile(file){
    return new Promise(function(resolve, reject){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function (){
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 ||rawFile.status === 0){
                    resolve(rawFile.responseText);
                }else{
                    reject(rawFile);
                }
            }
        }
        rawFile.send();
    })
}
var file    = 'data.json';
let nav     = document.querySelector("#nav");

nav.addEventListener("click", (e) =>{

    readJsonFile(file).then(function (response){

        let planet = JSON.parse(response);
        let planetImg, planetName, planetDescription, planetWikipedia, planetRotationTime, planetRevolutionTime,
        planetRadius, planetAverageTemp;
        let cursor = 0;

        let zoomImg = document.querySelector("#img-geology");
        if(zoomImg.style.display != "none"){
            zoomImg.style.display = "none";
        }

        switch(e.target.textContent){
            case "MERCURY":
                cursor = 0;
                break;
            case "VENUS":
                cursor = 1;
                break;
            case "EARTH":
                cursor = 2;
                break;
            case "MARS":
                cursor = 3;
                break;
            case "JUPITER":
                cursor = 4;
                break;
            case "SATURN":
                cursor = 5;
                break;
            case "URANUS":
                cursor = 6;
                break;
            case "NEPTUNE":
                cursor = 7;
                break;
            default:
                cursor = -1;
        }
    if(cursor >= 0) {
        planetImg = planet[cursor].images.planet;
        planetName = planet[cursor].name;
        planetDescription = planet[cursor].overview.content;
        planetWikipedia = planet[cursor].overview.source;
        planetRotationTime = planet[cursor].rotation;
        planetRevolutionTime = planet[cursor].revolution;
        planetRadius = planet[cursor].radius;
        planetAverageTemp = planet[cursor].temperature;

        let mainImg = document.querySelector("#main-img");
        mainImg.style.backgroundImage = "url(" + planetImg + ")";

        let mainTitle = document.querySelector("#main-title");
        mainTitle.textContent = planetName.toUpperCase();

        let mainText = document.querySelector("#main-text");
        mainText.textContent = planetDescription;

        let wikipediaPage = document.querySelector("#wikipedia-page");
        wikipediaPage.setAttribute("href", planetWikipedia);

        let rotationTimeNb = document.querySelector("#rotation-time-nb");
        rotationTimeNb.textContent = planetRotationTime;

        let revolutionTimeNb = document.querySelector("#revolution-time-nb");
        revolutionTimeNb.textContent = planetRevolutionTime;

        let radiusNb = document.querySelector("#radius-nb");
        radiusNb.textContent = planetRadius;

        let averageTempNb = document.querySelector("#average-temp-nb");
        averageTempNb.textContent = planetAverageTemp;
    }

    }).catch(function (error){
        console.log(error);
    });
});


let choiceView = document.querySelector("#choice-view");
choiceView.addEventListener("click", (e) =>{
    if(e.target.textContent == "OVERVIEW" || e.target.textContent == "INTERNAL STRUCTURE" || e.target.textContent == "SURFACE GEOLOGY"){
        readJsonFile(file).then(function (response) {
            let planet = JSON.parse(response);
            let mainTitle = document.querySelector("#main-title");
            let planetImg, planetText, planetWikipedia;

            switch (mainTitle.textContent) {
                case "MERCURY":
                    cursor = 0;
                    break;
                case "VENUS":
                    cursor = 1;
                    break;
                case "EARTH":
                    cursor = 2;
                    break;
                case "MARS":
                    cursor = 3;
                    break;
                case "JUPITER":
                    break;
                case "SATURN":
                    cursor = 5;
                    break;
                case "URANUS":
                    cursor = 6;
                    break;
                case "NEPTUNE":
                    cursor = 7;
                    break;
            }
            let zoomImg = document.querySelector("#img-geology");
            if (e.target.textContent == "OVERVIEW") {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }

                planetImg = planet[cursor].images.planet;
                planetText = planet[cursor].overview.content;
                planetWikipedia = planet[cursor].overview.source;

            } else if (e.target.textContent == "INTERNAL STRUCTURE") {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }

                planetImg = planet[cursor].images.internal;
                planetText = planet[cursor].structure.content;
                planetWikipedia = planet[cursor].structure.source;

            } else if (e.target.textContent == "SURFACE GEOLOGY") {
                if (zoomImg.style.display == "none") {
                    zoomImg.style.display = "block";
                }

                planetImg = planet[cursor].images.planet;
                planetText = planet[cursor].geology.content;
                planetWikipedia = planet[cursor].geology.source;

            }

            let mainImg = document.querySelector("#main-img");
            mainImg.style.backgroundImage = "url(" + planetImg + ")";

            let mainText = document.querySelector("#main-text");
            mainText.textContent = planetText;

            let wikipediaPage = document.querySelector("#wikipedia-page");
            wikipediaPage.setAttribute("href", planetWikipedia);

        }).catch(function (error) {
            console.log(error);
        });
    }
});




