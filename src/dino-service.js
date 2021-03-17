export default class Dino {
  static getDino(par, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1`;
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

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
// xhr.onload = function() {
//   if (this.status === 200) {
//     document.querySelector('#some-awesome-container').innerHTML = this.response;
//   } else {
//     console.log('Where did all the dinosaurs go?');
//   }
// };
// xhr.send();

