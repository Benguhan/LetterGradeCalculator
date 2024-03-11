function calculateGrade() {
    let score = document.getElementById('score').value;  // Use 'let' instead of 'const'
    score = Number(score);
    const letterGrade = findLetter(score);

    document.getElementById('result').innerHTML = letterGrade.name;
    document.getElementById('result').style.backgroundColor = letterGrade.color;

    if (!isNaN(score)) {
        console.log('Score:', score);
        document.getElementById('resultBox').style.display = 'block';
    }
}

const findLetter = (score) => {
    return categories.find( category => score >= category.min && score <= category.max);
}

const categories = [
    {
        name: "Letter: A || You passed! 😀",
        min : 90,
        max : 100,
        color : "rgb(127, 243, 127)"
    },
    {
        name: "Letter: A- || ou passed! 😀",
        min : 87,
        max : 89,
        color : "rgb(127, 243, 127)"
    },
    {
        name: "Letter: B+ || You passed! 😊",
        min : 84,
        max : 86,
        color : "rgb(237, 243, 127)"
    },
    {
        name: "Letter: B || You passed! 😊",
        min : 80,
        max : 83,
        color : "rgb(237, 243, 127)"
    },
    {
        name: "Letter: B- || You passed! 😊",
        min : 77,
        max : 79,
        color : "rgb(237, 243, 127)"
    },
    {
        name: "Letter: C+ || You passed! 🙂",
        min : 74,
        max : 76,
        color : "rgb(232, 160, 83)"
    },
    {
        name: "Letter: C || You passed! 🙂",
        min : 70,
        max : 73,
        color : "rgb(232, 160, 83)"
    },
    {
        name: "Letter: C- || You passed! 🙂",
        min : 67,
        max : 69,
        color : "rgb(232, 160, 83)"
    },
    {
        name: "Letter: D+ || You passed! 😐",
        min : 64,
        max : 66,
        color : "rgb(245, 75, 50)"
    },
    {
        name: "Letter: D || You passed! 😐",
        min : 60,
        max : 63,
        color : "rgb(245, 75, 50)"
    },
    {
        name: "Letter: F || You failed! ☹️",
        min : 0,
        max : 59,
        color : "rgb(255, 0, 0)"
    }

]
