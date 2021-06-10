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
var file = 'data.json';
let nav = document.querySelector("nav");
nav.addEventListener("click", (e) =>{

    readJsonFile(file).then(function (response){

        let planet = JSON.parse(response);
        let planetImg, planetName, planetDescription, planetWikipedia, planetRotationTime, planetRevolutionTime,
        planetRadius, planetAverageTemp;
        let cursor = 0;
        console.log(planet);
        switch(e.target.textContent){
            case "MERCURY":
                cursor                  = 0;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "VENUS":
                cursor                  = 1;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "EARTH":
                cursor                  = 2;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "MARS":
                cursor                  = 3;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "JUPITER":
                cursor                  = 4;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "SATURN":
                cursor                  = 5;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "URANUS":
                cursor                  = 6;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
            case "NEPTUNE":
                cursor                  = 7;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;
                planetRotationTime      = planet[cursor].rotation;
                planetRevolutionTime    = planet[cursor].revolution;
                planetRadius            = planet[cursor].radius;
                planetAverageTemp       = planet[cursor].temperature;

            break;
        }

        let mainImg = document.querySelector("#main-img");
        mainImg.setAttribute("src", planetImg);
        mainImg.setAttribute("alt", planetName);
        mainImg.setAttribute("title", planetName);

        let mainTitle = document.querySelector("#main-title");
        mainTitle.textContent = planetName;

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


    }).catch(function (error){
        console.log(error);
    });
});

let choiceView = document.querySelector("#choice-view");
choiceView.addEventListener("click", () =>{
    readJsonFile(file).then(function (response){

    }).catch(function (error){
        console.log(error);
    });
});




