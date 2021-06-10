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
        //
        let planet = JSON.parse(response);
        if(e.target.textContent == "Terrus"){

        }
        //
    }).catch(function (error){
        console.log(error);
    });



});




