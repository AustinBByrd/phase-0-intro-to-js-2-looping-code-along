function writeCards(namesArray, eventName) {
    const thankYouMessages = [];

    for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;

        thankYouMessages.push(message);
    }
    return thankYouMessages;
}

const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const messages = writeCards(names, event);
console.log(messages);

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}