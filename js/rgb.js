(function() {
  'use strict';

  var colors = {
      red:   document.getElementById('red0'),
      green: document.getElementById('green0'),
      blue:  document.getElementById('blue0')
  };

  document.body.addEventListener('click', function(event) {
    var el = event.target;
    var square = null;

    if(el.classList.contains('square')) {
      square = el;
    }

    if(square) {
      var rowColor = square.parentElement.id;
      if(colors[rowColor]) {
        colors[rowColor].classList.remove('selected');
      }
      colors[rowColor] = square;
      square.classList.add('selected');
    }

    setColor();
  });

  function setColor() {
    var hex = '#';
    for(var col in colors) {
      hex += colors[col].id.charAt(colors[col].id.length-1);
      hex += colors[col].id.charAt(colors[col].id.length-1);
    }
    document.getElementById('mixedColor').style.background = hex;
    document.getElementById('rgbv').innerHTML = getRGB(hex);
    document.getElementById('hex').innerHTML = 'Hex: ' + hex;
  }

  function getRGB(hex) {
    hex = hex.slice(1);

    var r = getRed(hex),
        g = getGreen(hex),
        b = getBlue(hex);

    return '(' + r + ',' + g + ',' + b + ')';

    function getRed(hex) {
      return parseInt(hex.slice(0,2), 16);
    }

    function getGreen(hex) {
      return parseInt(hex.slice(2,4), 16);
    }

    function getBlue(hex) {
      return parseInt(hex.slice(4,6), 16);
    }
  }
}());