// Math.acosh() method is used to find the inverse hyperbolic cosine of a number
// make sure that the number is >= 1
// formula of acosh = cosh^(-1) = ln( x + sqrt( (x^2) - 1 ) )  and x >= 1


let a = 67;
let b = Math.acosh(a);
console.log(b); // output 4.89789548698994

// Inverse hyperbolic cosine is always non negative (means >= 0)

console.log(Math.acosh(-1)); // Output is -0.881373587019543

console.log(Math.acosh(1)); // Output is 0.881373587019543



/********************************asin.html ***********************/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Math.asin() method</title>
  </head>
  <body>
    <h1>
      Note: we are using html because in node.js, prompt() function will not
      work
    </h1>
    <h2>
      Math.asin() method is used to find the inverse sine of adjacent,
      hypotenuse (in radians) in a right-angle triangle
    </h2>
    <h3>In a right-angle triangle hypotenuse is the largest side</h3>
    <h4>asin = arcsine</h4>
    <h5>Make sure H > A, otherwise output is NaN</h5>
    <div
      class="calculation"
      style="
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        justify-content: space-between;
      "
    >
      <input type="text" placeholder="Value of Adjacent" id="adjacent" />
      <input type="text" placeholder="Value of Hypotenuse" id="hypotenuse" />
      <button onclick="angleInradian()">Calculate(in radians)</button>
      <button onclick="angleIndegree()">Calculate(in degrees)</button>
      <h4 id="RadianOutput"></h4>
      <h4 id="DegreeOutput"></h4>
    </div>
    <script>
      const adjacent = document.getElementById("adjacent");
      const hypotenuse = document.getElementById("hypotenuse");
      const Inradian = document.getElementById("RadianOutput");
      const Indegree = document.getElementById("DegreeOutput");
      let outputRadian;

      const angleInradian = function () {
        const adjacentValue = adjacent.value; // value property is used for extracting the value of input
        const hypotenuseValue = hypotenuse.value;
        outputRadian = Math.asin(adjacentValue / hypotenuseValue);

        if (adjacentValue <= hypotenuseValue) {
          Inradian.innerHTML = `Angle in radian is ${outputRadian}`;
        } else {
          alert("Make sure Hypotenuse is greater that Adjacent, otherwise the output is NaN");
        }
      };

      const angleIndegree = function () {
        const outputIndegree = (180 / Math.PI) * outputRadian;

        if (outputRadian !== undefined) {
          // this will insure that first radians is calculated
          Indegree.innerHTML = `Angle in degree is ${outputIndegree}`;
        } else {
          alert("Calculate radians first");
        }
      };
    </script>
  </body>
</html>
