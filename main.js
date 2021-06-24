var resizeTimeout;
window.addEventListener('resize', function(event) {
    if(window.innerWidth > 419 && window.innerWidth < 421){
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
});

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
var tablet      = 1025;
var phone       = 420;
var file        = 'data.json';
var windowWidth = window.innerWidth;
let nav         = document.querySelector("#nav");

let overview            = document.getElementById("overview");
let internalStructure   = document.getElementById("internal-structure");
let surfaceGeology      = document.getElementById("surface-geology");

nav.addEventListener("click", (e) =>{

    readJsonFile(file).then(function (response){

        let planet = JSON.parse(response);
        let planetImg, planetName, planetGeologyImg, planetDescription, planetWikipedia, planetRotationTime, planetRevolutionTime,
        planetRadius, planetAverageTemp, width, geologyWidth;
        let cursor = 0;
        let transparent         = "rgba(0, 0, 0, 0)"
        let basicBorderBottom   = "1px solid rgb(56, 56, 79)";
        let zoomImg = document.querySelector("#img-geology");
        if(zoomImg.style.display != "none"){
            zoomImg.style.display = "none";
        }

        switch(e.target.textContent){
            case "MERCURY":
                cursor = 0;
                width = 300;
                color = "rgba(65, 158, 187, 1)";
                break;
            case "VENUS":
                cursor = 1;
                width = 450;
                color = "rgba(237, 162, 73, 1)";
                break;
            case "EARTH":
                cursor = 2;
                width = 500;
                color = "rgba(109, 46, 213, 1)";
                break;
            case "MARS":
                cursor = 3;
                width = 400;
                color = "rgba(209, 76, 50, 1)";
                break;
            case "JUPITER":
                cursor = 4;
                width = 700;
                color = "rgba(216, 58, 52, 1)";
                break;
            case "SATURN":
                cursor = 5;
                width = 700;
                color = "rgba(205, 81, 32, 1)";
                break;
            case "URANUS":
                cursor = 6;
                width = 550;
                color = "rgba(30, 193, 162, 1)";
                break;
            case "NEPTUNE":
                cursor = 7;
                width = 600;
                color = "rgba(45, 104, 240, 1)";
                break;
            default:
                cursor = -1;
        }
        if(windowWidth > phone && windowWidth < tablet){
            width = (width / 3) * 2;
        }else if(windowWidth < phone){
            width = width / 3;
        }
        geologyWidth = width / 2;

        if(windowWidth > phone){
            internalStructure.style.backgroundColor = transparent;
            surfaceGeology.style.backgroundColor    = transparent;
            overview.style.backgroundColor          = color;
            surfaceGeology.style.borderBottom       = basicBorderBottom;
            internalStructure.style.borderBottom    = basicBorderBottom;
            overview.style.borderBottom             = basicBorderBottom;
            overview.classList.add("active");
            internalStructure.classList.add("active");
            surfaceGeology.classList.add("active");
            overview.classList.remove("active");
        }else{
            internalStructure.style.backgroundColor = transparent;
            surfaceGeology.style.backgroundColor    = transparent;
            overview.style.backgroundColor          = transparent;
            surfaceGeology.style.borderBottom       = "none";
            internalStructure.style.borderBottom    = "none";
            overview.style.borderBottom             = "4px solid " + color;
        }

    if(cursor >= 0) {
        planetImg               = planet[cursor].images.planet;
        planetGeologyImg        = planet[cursor].images.geology;
        planetName              = planet[cursor].name;
        planetDescription       = planet[cursor].overview.content;
        planetWikipedia         = planet[cursor].overview.source;
        planetRotationTime      = planet[cursor].rotation;
        planetRevolutionTime    = planet[cursor].revolution;
        planetRadius            = planet[cursor].radius;
        planetAverageTemp       = planet[cursor].temperature;

        let mainImg = document.querySelector("#main-img");
        mainImg.style.backgroundImage = "url(" + planetImg + ")";
        mainImg.style.backgroundSize = width + "px";

        let geologyImg = document.querySelector("#img-geology");
        geologyImg.setAttribute("src", planetGeologyImg);
        geologyImg.style.width = geologyWidth + "px";

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
    let overviewElt             = document.getElementById("overview");
    let internalStructureElt    = document.getElementById("internal-structure");
    let surfaceGeologyElt       = document.getElementById("surface-geology");
    let structure               = document.getElementById("structure");
    let surface                 = document.getElementById("surface");
    let internal                = document.getElementById("internal");
    let geology                 = document.getElementById("geology");
    if(e.target.textContent == "OVERVIEW" || e.target == structure || e.target == surface || e.target == internal || e.target == geology || e.target.textContent == "01"  || e.target.textContent == "02" || e.target.textContent == "03"
    || e.target == overviewElt || e.target == internalStructureElt || e.target == surfaceGeologyElt){
        readJsonFile(file).then(function (response) {
            let planet              = JSON.parse(response);
            let mainTitle           = document.querySelector("#main-title");
            let transparent         = "rgba(0, 0, 0, 0)";
            let basicBorderBottom   = "1px solid rgb(56, 56, 79)";
            let lowWhite            = "rgba(255, 255, 255, 0.6)";
            let white               = "rgba(255, 255, 255, 1)";
            let planetImg, planetText, planetWikipedia, color;

            switch (mainTitle.textContent) {
                case "MERCURY":
                    cursor = 0;
                    color = "rgba(65, 158, 187, 1)";
                    break;
                case "VENUS":
                    cursor = 1;
                    color = "rgba(237, 162, 73, 1)";
                    break;
                case "EARTH":
                    cursor = 2;
                    color = "rgba(109, 46, 213, 1)";
                    break;
                case "MARS":
                    cursor = 3;
                    color = "rgba(209, 76, 50, 1)";
                    break;
                case "JUPITER":
                    cursor = 4;
                    color = "rgba(216, 58, 52, 1)";
                    break;
                case "SATURN":
                    cursor = 5;
                    color = "rgba(205, 81, 32, 1)";
                    break;
                case "URANUS":
                    cursor = 6;
                    color = "rgba(30, 193, 162, 1)";
                    break;
                case "NEPTUNE":
                    cursor = 7;
                    color = "rgba(45, 104, 240, 1)";
                    break;
            }
            internalStructure.style.backgroundColor = transparent;
            surfaceGeology.style.backgroundColor    = transparent;
            overview.style.backgroundColor          = transparent;

            if(windowWidth > phone){
                surfaceGeology.style.borderBottom       = basicBorderBottom;
                internalStructure.style.borderBottom    = basicBorderBottom;
                overview.style.borderBottom             = basicBorderBottom;
                overview.classList.add("active");
                internalStructure.classList.add("active");
                surfaceGeology.classList.add("active");
            }else{
                overview.style.color                    = lowWhite;
                surfaceGeology.style.color              = lowWhite;
                internalStructure.style.color           = lowWhite;
                surfaceGeology.style.borderBottom       = "none";
                internalStructure.style.borderBottom    = "none";
                overview.style.borderBottom             = "none";
            }

            let zoomImg = document.querySelector("#img-geology");
            if (e.target.textContent == "OVERVIEW" || e.target.textContent == "01" || e.target == overviewElt) {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }
                if(windowWidth > phone){
                    overview.style.backgroundColor          = color;
                    overview.classList.remove("active");
                }else{
                    overview.style.color                    = white;
                    overview.style.borderBottom             = "4px solid " + color;
                }


                planetImg       = planet[cursor].images.planet;
                planetText      = planet[cursor].overview.content;
                planetWikipedia = planet[cursor].overview.source;

            } else if (e.target.textContent == "INTERNAL STRUCTURE" || e.target.textContent == "02" || e.target == internalStructureElt || e.target == internal || e.target == structure) {

                if (zoomImg.style.display != "none") {
                    zoomImg.style.display = "none";
                }
                if(windowWidth > phone){
                    internalStructure.style.backgroundColor = color;
                    internalStructure.classList.remove("active");
                }else{
                    internalStructure.style.color           = white;
                    internalStructure.style.borderBottom    = "4px solid " + color;
                }


                planetImg       = planet[cursor].images.internal;
                planetText      = planet[cursor].structure.content;
                planetWikipedia = planet[cursor].structure.source;

            } else if (e.target.textContent == "SURFACE GEOLOGY" || e.target.textContent == "03" || e.target == surfaceGeologyElt || e.target == surface || e.target == geology) {

                if(windowWidth > phone){
                    surfaceGeology.style.backgroundColor    = color;
                    surfaceGeology.classList.remove("active");
                }else{
                    surfaceGeology.style.color              = white;
                    surfaceGeology.style.borderBottom       = "4px solid " + color;
                }


                zoomImg.style.display    = "block";
                planetImg                = planet[cursor].images.planet;
                planetText               = planet[cursor].geology.content;
                planetWikipedia          = planet[cursor].geology.source;

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




