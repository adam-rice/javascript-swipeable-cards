/*jshint esversion: 6 */

'use strict';

class Cards {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.update = this.update.bind(this);
  }

  onStart() {

  }

  onMove() {

  }

  onEnd() {

  }

  update() {

  }
}

window.addEventListener('load', () => new Cards());
