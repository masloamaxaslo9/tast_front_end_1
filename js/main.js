function funcCounter() {
    let minValue = Number(document.getElementById('number_one').value); // Min
    let maxValue = Number(document.getElementById('number_two').value); // Max
    let step = 5;
    let counter = minValue;
    console.log('Version One');
    while (maxValue >= counter) {
        console.log(counter);
        counter += step;
    }

    console.log('Version Two');
    counter = minValue;
    do {
        console.log(counter);
        counter += step;
    } while (maxValue >= counter);

    console.log('Version Three');
    for(counter = minValue; counter <= maxValue; counter += step) {
        console.log(counter);
    }
}

function funcInnerTextH1() {
    document.getElementById('message').innerHTML="Console message";
}