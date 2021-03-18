import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './dino-service.js';

$(document).ready(function() {
  $('#getDinos').click(function() {
    // let words = $('#wordInput').val();
    // let paragraphs = $('#paragraphInput').val();
    let par = parseInt(1);
    let words = parseInt(1);

    let promise = Dino.getDino(par, words);
    promise.then(function(response) {
      console.log("in promise.then");
      const body = JSON.parse(response);
      $('.output').text(`${body[1][1]}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.output').text("");
    });
  });
});