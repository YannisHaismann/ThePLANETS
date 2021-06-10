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
let nav = document.querySelector("nav");

nav.addEventListener("click", (e) =>{
    let file = 'data.json';
    readJsonFile(file).then(function (response){

        let planet = JSON.parse(response);
        let planetImg, planetName, planetDescription, planetWikipedia;
        let cursor = 0;
        console.log(planet);
        switch(e.target.textContent){
            case "MERCURY":
                cursor                  = 0;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "VENUS":
                cursor                  = 1;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "EARTH":
                cursor                  = 2;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "MARS":
                cursor                  = 3;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "JUPITER":
                cursor                  = 4;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "SATURN":
                cursor                  = 5;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "URANUS":
                cursor                  = 6;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

            break;
            case "NEPTUNE":
                cursor                  = 7;
                planetImg               = planet[cursor].images.planet;
                planetName              = planet[cursor].name;
                planetDescription       = planet[cursor].geology.content;
                planetWikipedia         = planet[cursor].geology.source;

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


    }).catch(function (error){
        console.log(error);
    });



});




