/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/034_exercicio2/034_exercicio2.ts":
/*!**********************************************!*\
  !*** ./src/034_exercicio2/034_exercicio2.ts ***!
  \**********************************************/
/***/ (() => {


class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playerButton = videoPlayerElements.playerButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    startEvents() {
        this.playerButton.addEventListener('click', () => {
            this.playTogle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playerButton.innerText = 'Play';
        });
    }
    playTogle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playerButton.innerText = 'Paused';
        }
        else {
            this.videoPlayer.pause();
            this.playerButton.innerText = 'Play';
        }
    }
}
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playerButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.startEvents();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************************!*\
  !*** ./src/020_exercicio/020_exercicio.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-control';
__webpack_require__(/*! ../034_exercicio2/034_exercicio2 */ "./src/034_exercicio2/034_exercicio2.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map