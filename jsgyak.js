
window.addEventListener("load", init);
var kep = [
  {
    cim: "Kecskék",
    leir: "Egy vadasparkban készült kép",
    eleresiUt: "kepek/DSC7025.jpg",
  },
  {
    cim: "Tavaszi út",
    leir: "Egy szép tavasszal virágzó fa látható az út fölött",
    eleresiUt: "kepek/DSC7365.jpg",
  },
  {
    cim: "Naplemente",
    leir: "A végeláthatatlan rét fölött lemenő napról készült",
    eleresiUt: "kepek/DSC7371_1.jpg",
  },
];
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  ID("uzenet").innerHTML = "<h1>Képeim</h1>";
  megjelen();
}
function megjelen() {
var txt = "";
for (let index = 0; index < kep.length; index++) {
	txt += "<h3>" + kep[index].cim + "</h3>";
	txt += "<p>" + kep[index].leir + "</p>";
	txt +=
      "<img src='" + kep[index].eleresiUt + "' alt='" + kep[index].cim + "' >";
	}
ID("galeria").innerHTML = txt;
}
	
