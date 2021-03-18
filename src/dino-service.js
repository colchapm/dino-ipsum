export default class Dino {
  static getDino(par, words) {
    console.log("in getDino");
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=2&paragraphs=2`;
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
}

