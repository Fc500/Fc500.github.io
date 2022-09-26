
window.alert("v0.17");
const resultDisp = document.getElementById("result");
let result = 0;

const chartContainer = document.getElementById("chartDIV");
const smallestDisplay = document.getElementById("smallest");


let pointTwoX = 6;
let pointTwoY = 0;


let wholeResultsX = [];
let wholeResultsDist = [];

let graphValuesX = [];
let graphValuesY = [];


function hasDecimal (num) {
	return !!(num % 1);
}
console.log((hasDecimal(2.0000000000001))); // true
console.log(hasDecimal(2)) // false



function getValues() {

    let typeOfCalc = document.getElementById("graphs").value;

    let incrementInput = document.getElementById("intervalInp").value;
    let yModifier = document.getElementById("yMod").value;
    let graphYModifier = document.getElementById("graphYMod").value;
    let graphXModifier = document.getElementById("graphXMod").value;
    let startingPoint = document.getElementById("startPnt").value;
    let stoppingPoint = document.getElementById("stopPnt").value;
    let xNum = document.getElementById("xValCalc").value;
    let yNum = document.getElementById("yValCalc").value;


    let incVal = parseFloat(incrementInput);
    let yMod = parseFloat(yModifier);
    let graphYMod = parseFloat(graphYModifier);
    let graphXMod = parseFloat(graphXModifier);
    let startPnt = parseFloat(startingPoint);
    let stopPnt = parseFloat(stoppingPoint);
    let xNumParse = parseFloat(xNum);
    let yNumParse = parseFloat(yNum);


    if (incrementInput >= 0.01) {
        calculateDistance(typeOfCalc, incVal, yMod, graphYMod, graphXMod, xNumParse, yNumParse, startPnt, stopPnt);
    } else {
        window.alert("Please enter a number GREATER or EQUAL TO 0.01!");
    }


}

function makeGraphs(type) {
       
  let smallestValue = Math.min(...wholeResultsDist);
  smallestDisplay.innerHTML = smallestValue;

  
  let chart = document.createElement("div");
  chart.innerHTML = "<canvas id='resultsChart' width='1600' height='900'></canvas><p>Value of X</p><br><br><canvas id='graphChart' width='1600' height='900'></canvas><p>Graph of X</p>";

  chartContainer.appendChild(chart);

      
  var resultsChart = document.getElementById("resultsChart");
  var resultsGraph = new Chart(resultsChart, {
  type: 'line',
  data: {
      labels: wholeResultsX,
      datasets: [
      { 
          data: wholeResultsDist,
          label: "Distance",
          borderColor: "#3e95cd",
          fill: false
      }
      ]
  }
  });


  var graphChart = document.getElementById("graphChart");
  var inputedGraph = new Chart(graphChart, {
  type: 'line',
  data: {
      labels: graphValuesX,
      datasets: [
      { 
          data: graphValuesY,
          label: `Graph of ${type}`,
          borderColor: "#3e95cd",
          fill: false
      }
      ]
  }
  });
}


function calculateDistance(type, inc, yMod, graphYMod, graphXMod, xVal, yVal, startPnt, endPnt) {

    wholeResultsX = [];
    wholeResultsDist = [];

    graphValuesX = [];
    graphValuesY = [];

    chartContainer.innerHTML = "";

    window.alert(`Graph: ${graphYMod} (${type}+${graphXMod}) + ${yMod}`);
    window.alert(`Comparison Point: (${xVal}, ${yVal})`);

    resultDisp.innerHTML = "";
    resultDisp.innerHTML += `<tr><th>Point A</th><th>Point B</th><th>Result</th></tr>`

    
    for (let i = startPnt; i <= endPnt; i += inc) {


      // Graph Points
      let pointOneX = i;

      let pointOneY;

      if (type == "sqrt(x)") {
        pointOneY = Math.sqrt(i + graphXMod);
      } else if (type == "x^2") {
        pointOneY = Math.pow(i + graphXMod, 2);
      } else {
        pointOneY = Math.pow(i + graphXMod, 3);
      }

      pointOneY += yMod;

      pointOneY *= graphYMod;

      // User-inputed points

      let pointTwoX = xVal;
      let pointTwoY = yVal;
    
      let numX = pointTwoX - pointOneX;
      let numY = pointTwoY - pointOneY; 
      result = Math.sqrt(Math.pow(numX, 2) + Math.pow(numY, 2));


      graphValuesX.push(pointOneX.toFixed(2));
      graphValuesY.push(pointOneY);
      wholeResultsX.push(pointOneX.toFixed(2));
      wholeResultsDist.push(result);

    //quarter to 3 @ public library!

      console.log(wholeResultsX);
    
      resultDisp.innerHTML += `<tr><td>(${pointOneX.toFixed(2)}, ${pointOneY.toFixed(2)})</td><td>(${pointTwoX}, ${pointTwoY})</td><td>${result}</td></tr>`

   }
   makeGraphs(type);
}


