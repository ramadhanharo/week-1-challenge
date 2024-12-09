//function studentGrade { // lets defIne a variable to be StudentGrade and value to be 100
    // lets grade the student mark between 0 and 100
    //let grade = 100;
    // make sure the grade mark is a valid number and within 0 to 100
    // lets determine the grade based on the marks scrode by the student.
    function gradeCalculator(marks) {
        // Parse marks to ensure it's a number
        const score = parseInt(marks);
    
        if (score >= 80 && score <= 100) {
            return "Grade: A";
        } else if (score >= 60 && score < 80) {
            return "Grade: B";
        } else if (score >= 50 && score < 60) {
            return "Grade: C";
        } else if (score >= 40 && score < 50) {
            return "Grade: D";
        } else if (score >= 0 && score < 40) {
            return "Grade: E";
        } else {
            return "Invalid.";
        }
    }
    
    // Test the function and the outcome.
    console.log(gradeCalculator(85)); // Output: Grade: A
    console.log(gradeCalculator(55)); // Output: Grade: C
    console.log(gradeCalculator(30)); // Output: Grade: E
    
       