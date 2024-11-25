const form = document.querySelector("form");
const result = document.querySelector("#result");


form.addEventListener("submit", function(e){
    e.preventDefault();

    const gender = document.querySelector("#gender").value;
    const age = parseInt(document.querySelector("#age").value);
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if(!age || age <= 0 || isNaN(age)){
        alert('Please enter a valid age.');
        return;
    } else if (!height || height <= 0 || isNaN(height)){
        alert('Please enter a valid height.');
        return;
    } else if (!weight || weight <= 0 || isNaN(weight)){
        alert('Please enter a valid weight.');
        return;
    }

    //Calculate BMI
    const bmi = (weight / (height ** 2)).toFixed(2);

    let bmiCategory = "";
    if (bmi < 18.5){
        bmiCategory = 'Underweight';
     } else if (bmi >= 18.5 && bmi < 24.9) {
         bmiCategory = 'Normal weight';
    }else if (bmi >= 25 && bmi < 29.9) {
         bmiCategory = 'Overweight';
    } else {
         bmiCategory = 'Obese'
    }

    //Display result
    const result = document.getElementById('result');
    result.innerHTML = `
    <br>
    <h3><strong>Your BMI is:</strong> ${bmi}</h3>
    <h3><strong>Category:</strong> ${bmiCategory}</h3>
    <button onclick="location.reload()">Reload</button>
    <br>
    `;
})




// else {
//     const bmi = (weight / ((height / 100) **2)).toFixed(2);
//     resultDiv.innerHTML = `
//     <br>
// <p><strong>Your BMI is:</strong> ${bmi.toFixed(2)}</p>
// <p><strong>Category:</strong> ${bmiCategory}</p>
// <br>`
// }