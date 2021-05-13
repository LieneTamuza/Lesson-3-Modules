import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a word or sentence to check if it is a palindrome: ', function (answer) {
    const inputWithoutFormatting = answer.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    const reversedInput = inputWithoutFormatting.split('').reverse().join('');
    if (inputWithoutFormatting === reversedInput) {
        console.log(`"${answer}" is a palindrome.`);
    } else {
        console.log(`"${answer}" is not a palindrome.`);
    }

    rl.close();
});