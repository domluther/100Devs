//Get a dog photo from the dog.ceo api and place the photo in the DOM

const url = 'https://dog.ceo/api/breeds/image/random';
let imgURL;
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    imgURL = data.message;
    document.querySelector('img').src = imgURL;
  })
  .catch((err) => {
    console.log(`error! ${err}`);
  });
