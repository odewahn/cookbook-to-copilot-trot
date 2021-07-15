/*
Given the radius of a circle, and the angle of an arc in degrees, find the length of the arc.
*/
function calculateLengthOfCircularArc(radius, angle) {
  // TODO: Write your code here.
  var angleInRadians = (angle * Math.PI) / 180;
  return radius * angleInRadians;
}

console.log("Print test value for Calculating the Length of a Circular Arc");
console.log(calculateLengthOfCircularArc(10, 45));
