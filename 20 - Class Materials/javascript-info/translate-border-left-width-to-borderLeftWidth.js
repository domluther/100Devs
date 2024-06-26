// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let words = str.split('-');
  let result = '';
  console.log(words);
  words.forEach((word, index) => {
    result +=
      index === 0
        ? word
        : word.at(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return result;
}

const toTest = 'my-short-string';
const ans = camelize(toTest);
console.log(ans);
