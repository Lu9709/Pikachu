parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.skin *::before,.skin *::after {\n    box-sizing: border-box;\n}\n\n.skin {\n    position: relative;\n    background-color: yellow;\n    min-height: 50vh;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(5deg);\n    }\n    66% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover {\n    transform-origin: 50% 100%;\n    /* 旋转中心点 */\n    animation: wave 300ms infinite linear\n}\n\n.nose {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    /* transparent 透明的 */\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 10;\n}\n\n.yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    /* 左上角 右上角 右下角 左下角 */\n    background: black;\n}\n\n.eye {\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::before {\n    content: \"\";\n    display: block;\n    border: 1px solid #000;\n    width: 25px;\n    height: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 2px;\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n.mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n\n.mouth .up {\n    position: relative;\n    top: -25px;\n}\n\n.mouth .up .lip {\n    border: 3px solid black;\n    height: 32px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    z-index: 2;\n    background: yellow;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n    left: 50%;\n    margin-left: -50px;\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(13deg)translateX(53px);\n    right: 50%;\n    margin-right: -50px;\n}\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n}\n\n.mouth .up .lip.left::before {\n    right: -6px;\n    background: yellow;\n}\n\n.mouth .up .lip.right::before {\n    left: -6px;\n    background: yellow;\n}\n\n.mouth .down {\n    height: 180px;\n    position: absolute;\n    width: 100%;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: #9b0109;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2 {\n    border: 1px solid green;\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    background: #ff485f;\n    border-radius: 100px;\n}\n\n.face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    top: 230px;\n    left: 50%;\n    margin-left: -44px;\n    background: #ea0102;\n    border-radius: 50%;\n    z-index: 3;\n}\n\n.face.left {\n    transform: translateX(-143px);\n}\n\n.face.right {\n    transform: translateX(143px);\n}\n\n.face>img {\n\n    position: absolute;\n    left: 50%;\n    bottom: -50%;\n}\n\n.face.left>img {\n    transform-origin: 0 0;\n    transform: rotateY(3.142rad);\n}\n",t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,time:100,n:1,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},init:function(){t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.bindEvents(),t.play()},events:{"#btnPause":"pause","#btnPlay":"play","#btnNormal":"Normal","#btnSlow":"Slow","#btnQuick":"Quick"},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,e.default.length<t.n?window.clearInterval(t.id):(console.log(t.n+":"+e.default.substr(0,t.n)),t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo.scrollTop=t.ui.demo.scrollHeight)},play:function(){window.clearInterval(t.id),t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},Normal:function(){t.pause(),t.time=100,t.play()},Slow:function(){t.pause(),t.time=200,t.play()},Quick:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.7512a7f2.js.map