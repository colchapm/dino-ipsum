export default class Dino {
constructor(hangWord, hiddenWord) {
  this.hangWord = hangWord;
  this.hiddenWord = hiddenWord;
}
  static getDino(par, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=1&paragraphs=1`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  hideWord(hangWord) {
    let wordLength = hangWord.length;
    let hiddenWordArray = [];
    for (let i=0; i < wordLength; i++) {
      hiddenWordArray.push(' __ ');
    }
    return this.hiddenWord = hiddenWordArray.join("");
  } 


  compareWord(userGuess) {
    for(let i=0; i<this.hiddenWord.length; i++) {
      if(this.hangWord[i] === userGuess) {
        this.hiddenWord[i] === this.hangWord[i];
      };
    };
    return this.hiddenWord;
  }

  };


