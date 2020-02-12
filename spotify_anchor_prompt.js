/*

A fun coding prompt from Anchor at Spotify:

If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.
 
*/

const message = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`

const largestSubset = (message, minLength = 50) => {
    if (!message || !message.length) throw Error('Invalid message format');
    if (message.length < minLength) return [];
    
    const counter = {};
    
    for (let char of message) {
        if (char in counter) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }

    const sortedChars = Object.keys(counter).sort((a, b) => counter[a] - counter[b]);
    let { length } = message;
    const result = [];

    for (let char of sortedChars) {
        if (length - counter[char] >= minLength) {
            result.push(char);
            length = length - counter[char];
        } else {
            break;
        }
    }

    return result;
}

console.log(largestSubset(message))

// Result:
// ['0',
// '.',
// 'I',
// 'v',
// 'q',
// 'y',
// ':',
// '’',
// ',',
// 'k',
// '5',
// 'j',
// 'd',
// 'b',
// 'w',
// 'f',
// 'm',
// 'c',
// 'n',
// 'p',
// 'g',
// 'i',
// 'u',
// 'l',
// 'h',
// 's',
// 'r',
// 'o',
// 'a',
// 'e']
