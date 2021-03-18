import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './dino-service.js';

$(document).ready(function() {
  $('#getDinos').click(function() {
    let words = $('#wordInput').val();
    let par = $('#paragraphInput').val();
    
    let newGame = new Dino(0,0);

    let promise = Dino.getDino(par, words);
    promise.then(function(response) {
      console.log("in promise.then");
      
      const body = JSON.parse(response);
      newGame.hangWord = `${body[0]}`;
      const hideHang = newGame.hideWord(newGame.hangWord);
      //$('.output').append(`${newGame.hangWord}`);
      $('.output').text(`${hideHang}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.output').text("");
    });
  });
});