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
var tablet = 1025;
var phone = 376;
var file    = 'data.json';
let nav     = document.querySelector("#nav");

nav.addEventListener("click", (e) =>{

    readJsonFile(file).then(function (response){

        console.log(window.innerWidth);

        let planet = JSON.parse(response);
        let planetImg, planetName, planetGeologyImg, planetDescription, planetWikipedia, planetRotationTime, planetRevolutionTime,
        planetRadius, planetAverageTemp, planetWidthImg;
        let cursor = 0;
        let windowWidth = window.innerWidth;

        let zoomImg = document.querySelector("#img-geology");
        if(zoomImg.style.display != "none"){
            zoomImg.style.display = "none";
        }

        switch(e.target.textContent){
            case "MERCURY":
                cursor = 0;
                width = 300;
                break;
            case "VENUS":
                cursor = 1;
                width = 450;
                break;
            case "EARTH":
                cursor = 2;
                width = 500;
                break;
            case "MARS":
                cursor = 3;
                width = 400;
                break;
            case "JUPITER":
                cursor = 4;
                width = 700;
                break;
            case "SATURN":
                cursor = 5;
                width = 700;
                break;
            case "URANUS":
                cursor = 6;
                width = 550;
                break;
            case "NEPTUNE":
                cursor = 7;
                width = 600;
                break;
            default:
                cursor = -1;
        }
        if(windowWidth > phone && windowWidth < tablet){
            width = (width / 3) * 2;
        }else if(windowWidth < phone){
            width = width / 3
        }
    if(cursor >= 0) {
        planetImg = planet[cursor].images.planet;
        planetGeologyImg = planet[cursor].images.geology;
        planetName = planet[cursor].name;
        planetDescription = planet[cursor].overview.content;
        planetWikipedia = planet[cursor].overview.source;
        planetRotationTime = planet[cursor].rotation;
        planetRevolutionTime = planet[cursor].revolution;
        planetRadius = planet[cursor].radius;
        planetAverageTemp = planet[cursor].temperature;

        let mainImg = document.querySelector("#main-img");
        mainImg.style.backgroundImage = "url(" + planetImg + ")";
        mainImg.style.backgroundSize = width + "px";

        let geologyImg = document.querySelector("#img-geology");
        geologyImg.setAttribute("src", planetGeologyImg);

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
    console.log(e.target);
    let overviewElt = document.getElementById("overview");
    let internalStructureElt = document.getElementById("internal-structure");
    let surfaceGeologyElt = document.getElementById("surface-geology");
    let structure = document.getElementById("structure");
    let surface = document.getElementById("surface");
    let internal = document.getElementById("internal");
    let geology = document.getElementById("geology");
    if(e.target.textContent == "OVERVIEW" || e.target == structure || e.target == surface || e.target == internal || e.target == geology || e.target.textContent == "01"  || e.target.textContent == "02" || e.target.textContent == "03"
    || e.target == overviewElt || e.target == internalStructureElt || e.target == surfaceGeologyElt){
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
            }
            let zoomImg = document.querySelector("#img-geology");
            if (e.target.textContent == "OVERVIEW" || e.target.textContent == "01" || e.target == overviewElt) {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }

                planetImg = planet[cursor].images.planet;
                planetText = planet[cursor].overview.content;
                planetWikipedia = planet[cursor].overview.source;

            } else if (e.target.textContent == "INTERNAL STRUCTURE" || e.target.textContent == "02" || e.target == internalStructureElt || e.target == internal || e.target == structure) {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }

                planetImg = planet[cursor].images.internal;
                planetText = planet[cursor].structure.content;
                planetWikipedia = planet[cursor].structure.source;

            } else if (e.target.textContent == "SURFACE GEOLOGY" || e.target.textContent == "03" || e.target == surfaceGeologyElt || e.target == surface || e.target == geology) {
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




