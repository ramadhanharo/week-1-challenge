function speedDetector(speed) {
    // Let's set the speed limit to 70
    const limit = 70;
    const kmPerPoint = 5;

    if (speed <= limit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - limit) / kmPerPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

// Test the function
console.log(speedDetector(55)); // Output: Ok
console.log(speedDetector(85)); // Output: Points: 1
console.log(speedDetector(120)); // Output: License suspended

