(function () {
  /*
   * A map of key codes so that you dont have to use them directly.
   */
  var k = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    B: 66,
    A: 65
  };

  /*
   * These are the keys of the konami code (according to wikipedia).
   */
  var konamiCode = [ k.UP, k.UP, k.DOWN, k.DOWN, k.LEFT, k.RIGHT, k.LEFT, k.RIGHT, k.B, k.A ];

  /*
   * In case someone enters the konami code, unleash the seven hells.
   */
  onKeyStreak(konamiCode, unleashTheSevenHells);

  /*
   * Keep a record of keystrokes and call a function when a certain streak is entered.
   */
  function onKeyStreak (streak, callback) {
    var keysPressed = [];
    var eventToListenFor = 'keydown';

    var listener = function (e) {
      keysPressed.push(e.keyCode);

      if (isSuffix(streak, keysPressed)) {
        window.removeEventListener(eventToListenFor, listener);
        callback();
      }
    };

    window.addEventListener(eventToListenFor, listener);
  }

  /*
   * Check whether listA is a suffix of listB.
   */
  function isSuffix (listA, listB) {
    if (listA.length > listB.length) {
      return false;
    }

    var index = 0;

    for (; index < listA.length; index++) {
      if (listA[index] !== listB[listB.length - listA.length + index]) {
        console.log(index);
        return false;
      }
    }

    return true;
  }

  /*
   * Commit some chaos and make sure to do so at the next frame too.
   */
  function unleashTheSevenHells () {
    angery();

    window.requestAnimationFrame(unleashTheSevenHells);
  }

  /*
   * Be an angry website.
   */
  function angery () {
    // This returns a list of all elements that match the CSS selector * (which are all).
    var allElements = document.querySelectorAll('*');

    // Since querySelectorAll doesn't return an array, but something zero-indexed that has a length property, we can use Array's forEach here.
    // Welcome to the world of duck typing.
    Array.prototype.forEach.call(allElements, makeItPretty);
  }

  /*
   * Makes an element pretty.
   */
  function makeItPretty (element) {
    element.style.color = randomColour();
    element.style.backgroundColor = randomColour();
    element.style.textAlign = randomChoice([ 'left', 'center', 'right' ]);
  }

  function randomChoice (choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function randomColour () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
})();
