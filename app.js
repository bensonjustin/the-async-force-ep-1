const oReq = new XMLHttpRequest();
function reqListener() {
  let obData = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = obData.name;
  const oReq2 = new XMLHttpRequest();
  function reqListener2() {
    let obData2 = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML = obData2.name;
  }
  oReq2.addEventListener("load", reqListener2);
  oReq2.open("GET", "https://swapi.co/api/planets/1/");
  oReq2.send();
}
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();

const oReq3 = new XMLHttpRequest();
function reqListener3() {
  let obData = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = obData.name;
  const oReq4 = new XMLHttpRequest();
  function reqListener4() {
    let obData2 = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML = obData2.name;
  }
  oReq4.addEventListener("load", reqListener4);
  oReq4.open("GET", "https://swapi.co/api/species/1/");
  oReq4.send();
}
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "https://swapi.co/api/people/14/");
oReq3.send();

const oReq5 = new XMLHttpRequest();
function reqListener5() {
  let obData = JSON.parse(this.responseText);
  let obDataResults = obData.results;
  obDataResults.forEach((e, index) => {
    let film = document.createElement("li");
    film.className = "film";
    document.getElementById("filmList").appendChild(film);
    let filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    filmTitle.innerHTML = e.title;
    document.getElementsByClassName("film")[index].appendChild(filmTitle);
    let h3Head = document.createElement("h3");
    h3Head.innerHTML = "Planets";
    document.getElementsByClassName("filmTitle")[index].appendChild(h3Head);
    let filmPlanets = document.createElement("ul");
    filmPlanets.className = "filmPlanets";
    document
      .getElementsByClassName("filmTitle")
      [index].appendChild(filmPlanets);
    e.planets.forEach((i, j) => {
      const oReq6 = new XMLHttpRequest();
      function reqListener6() {
        let obData2 = JSON.parse(this.responseText);
        let planet = document.createElement("li");
        planet.className = "planet";
        planet.innerHTML = obData2.name;
        filmPlanets.appendChild(planet);
      }
      oReq6.addEventListener("load", reqListener6);
      oReq6.open("GET", i);
      oReq6.send();
    });
  });
}
oReq5.addEventListener("load", reqListener5);
oReq5.open("GET", "https://swapi.co/api/films/");
oReq5.send();
