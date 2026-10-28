// Q5: Weather Activity Planner
const temperature = 27;
const isRaining = false;
const windSpeed = 12;
let advice;
if (isRaining) advice = "Stay indoors with hot coffee.";
else if (temperature > 35) advice = "Go swimming.";
else if (temperature < 15 && windSpeed > 20) advice = "Too cold and windy — stay home.";
else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) advice = "Perfect day for a walk.";
else advice = "Check the weather before going out.";
console.log(advice);
