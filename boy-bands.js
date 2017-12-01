var loopCount = 5;

// --------------------------BANDS---------------------

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var currentBand = "";
var bandList = document.getElementById("boy-bands");

bandList.innerHTML =  "";
for (var i = 0; i < loopCount; i++) {
    currentBand = bandList.innerHTML +=  `<div> ${bands[i]} </div>`;
};

// --------------------------VEGGIES---------------------

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var currentVeggie = "";
var vegList = document.getElementById("vegetables");

vegList.innerHTML = "";
for (var i = 0; i < loopCount; i++) {
    currentVeggie = vegList.innerHTML += `<div> ${vegetables[i]} </div>`;
};
