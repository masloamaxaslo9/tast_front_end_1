function counter() {
    let value_one = Number(document.getElementById('number_one').value); // Min
    let value_two = Number(document.getElementById('number_two').value); // Max
    let step = 5;
    let counter = value_one;
    console.log('Version One');
    while (value_two >= counter) {
        console.log(counter);
        counter += step;
    }

    console.log('Version Two');
    counter = value_one;
    do {
        console.log(counter);
        counter += step;
    } while (value_two >= counter);

    console.log('Version Three');
    for(counter = value_one; counter <= value_two; counter += step) {
        console.log(counter);
    }
}

function message() {
    document.getElementById('message').innerHTML="Console message";
}