
window.alert("v0.06");
let resultDisp = document.getElementById("result");
let result = 0;

let chartContainer = document.getElementById("chartDIV");


let pointTwoX = 6;
let pointTwoY = 0;


let wholeResultsX = [];
let wholeResultsDist = [];


function hasDecimal (num) {
	return !!(num % 1);
}
console.log((hasDecimal(2.0000000000001))); // true
console.log(hasDecimal(2)) // false



function getValues() {
    let incrementInput = document.getElementById("intervalInp").value;
    let stoppingPoint = document.getElementById("stopPnt").value;
    let xNum = document.getElementById("xValCalc").value;
    let yNum = document.getElementById("yValCalc").value;


    let incVal = parseFloat(incrementInput);
    let stopPnt = parseFloat(stoppingPoint);
    let xNumParse = parseFloat(xNum);
    let yNumParse = parseFloat(yNum);


    if (incrementInput >= 0.01) {
    calculateDistance(incVal, xNumParse, yNumParse, stopPnt);
    } else {
        window.alert("Please enter a number GREATER or EQUAL TO 0.01!");
    }


}


function calculateDistance(inc, xVal, yVal, endPnt) {

    wholeResultsX = [];
    wholeResultsDist = [];

    chartContainer.innerHTML = "";

    window.alert(`Comparison Point: (${xVal}, ${yVal})`);

    resultDisp.innerHTML = "";
    resultDisp.innerHTML += `<tr><th>Point A</th><th>Point B</th><th>Result</th></tr>`

    
    for (let i = 0; i <= endPnt; i += inc) {

      let pointOneX = i;

      let pointOneY = Math.sqrt(i);

      let pointTwoX = xVal;
      let pointTwoY = yVal;
    
      let numX = pointTwoX - pointOneX;
      let numY = pointTwoY - pointOneY; 
      result = Math.sqrt(Math.pow(numX, 2) + Math.pow(numY, 2));

            wholeResultsX.push(pointOneX.toFixed(2));
            wholeResultsDist.push(result);


    //quarter to 3 @ public library!

      console.log(wholeResultsX);
    
      resultDisp.innerHTML += `<tr><td>(${pointOneX.toFixed(2)}, ${pointOneY.toFixed(2)})</td><td>(${pointTwoX}, ${pointTwoY})</td><td>${result}</td></tr>`
        

   }


   let chart = document.createElement("div");
   chart.innerHTML = "<canvas id='myChart' width='1600' height='900'></canvas><p>Value of X</p>";

   chartContainer.appendChild(chart);

       
   var ctx = document.getElementById("myChart");
   var myChart = new Chart(ctx, {
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
}


