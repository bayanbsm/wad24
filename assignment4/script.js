let rollCounter = 0; 

document.getElementById("button").addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("lhsdice").src = `images/dice${randomNumber1}.png`;
    document.getElementById("rhsdice").src = `images/dice${randomNumber2}.png`;

    const result = ` ${randomNumber1 + randomNumber2}`;

    if (randomNumber1 === randomNumber2) {
        document.getElementById("result").innerText = result + " (It's a double!)";
    } else {
        document.getElementById("result").innerText = result;
    }
    rollCounter++;
    
    document.getElementById("rollCount").innerText = `Roll Count: ${rollCounter}`;
});