function greeting() {

    let timeInput = document.getElementById("timeInput").value;
    let time =timeInput;

        let greeting;
        if (time >= 0 && time < 1200) {
            greeting = "Good Morning!";
        } else if (time >= 1200 && time < 1700) {
            greeting = "Good Afternoon!";
        } else if (time >= 1700 && time < 2100) {
            greeting = "Good Evening!";
        }   else if (time >= 2100 && time < 2359) {
            greeting = "Good Night!";
        } 
        else {
            greeting = "Invalid time format. Please enter a valid time";
        }
        document.getElementById("Message").innerText = greeting;
    }


greeting();


function reset(){

    document.getElementById("timeInput").value = "";
    document.getElementById('Message').innerText = "";
    }