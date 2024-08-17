
function convertTemperature() {
    let temperature = document.getElementById('temperatureInput');
    let tempValue = parseFloat(temperature.value);
    
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    console.log(outputUnit)
    let showMsg =  document.getElementById('result')
    
    if (isNaN(tempValue)) {
        showMsg.innerHTML = "Please enter a valid number."
        return;
    }
    
    let convertedTemperature;
    
    if (inputUnit === outputUnit) {

        convertedTemperature = tempValue;

    } else if (inputUnit === "Celsius") {

        if (outputUnit === "Fahrenheit") {

            convertedTemperature = (tempValue * 9/5) + 32;

        } else if (outputUnit === "Kelvin") {

            convertedTemperature = tempValue + 273.15;

        }
    } else if (inputUnit === "Fahrenheit") {

        if (outputUnit === "Celsius") {

            convertedTemperature = (tempValue - 32) * 5/9;

        } else if (outputUnit === "Kelvin") {

            convertedTemperature = (tempValue - 32) * 5/9 + 273.15;

        }
    } else if (inputUnit === "Kelvin") {

        if (outputUnit === "Celsius") {

            convertedTemperature = tempValue - 273.15;

        } else if (outputUnit === "Fahrenheit") {
            
            convertedTemperature = (tempValue - 273.15) * 9/5 + 32;
        }
    }
    
    showMsg.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit}`;
}


