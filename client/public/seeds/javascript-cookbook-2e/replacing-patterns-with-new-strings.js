/*
Extract a phone number from a string using a rgular expression
*/
function extractPhoneNumber(string) {
  var regex = /\d{3}-\d{3}-\d{4}/;
  var match = regex.exec(string);
  if (match) {
    return match[0];
  }
  return null;
}

console.log("Print test value for Replacing Patterns with New Strings");
console.log(
  extractPhoneNumber(
    "Call me at +1-555-555-5555 tomorrow, or at +1-800-555-5555."
  )
);
console.log(
  extractPhoneNumber("Call me at +1-555-555-5555, or at +1-800-555-5555.")
);
console.log(
  extractPhoneNumber("Call me at (555)555-5555, or at (800)555-5555.")
);
console.log(extractPhoneNumber("Call me at 555-555-5555, or at 800-555-5555."));
