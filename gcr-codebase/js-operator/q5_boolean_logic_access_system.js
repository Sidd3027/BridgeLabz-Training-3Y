// Q5: Boolean Logic Access System
// Change these values and run again to test different outcomes.
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Access is secure only when all required conditions are true.
const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(isSecure && !(!isDoorLocked || !isWindowClosed) ? "Secure" : "Unsafe");

// Example of an unsafe condition using OR: if any required condition fails.
const hasSecurityFailure = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;
console.log(hasSecurityFailure ? "Unsafe condition detected" : "All security conditions are met");
