// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var link = /*#__PURE__*/function () {
  function link(button, t) {
    var _this = this;

    _classCallCheck(this, link);

    button.addEventListener('click', function () {
      return _this.nextLink();
    });
    this.i = t;
  }

  _createClass(link, [{
    key: "nextLink",
    value: function nextLink() {
      var arr = document.querySelectorAll('main');

      switch (this.i) {
        case 1:
          arr[0].hidden = true;
          arr[2].hidden = false;
          break;

        case 2:
          arr[2].hidden = true;
          arr[1].hidden = true;
          arr[3].hidden = true;
          arr[0].hidden = false;
          window.location.reload();
          break;

        case 3:
          arr[2].hidden = true;
          arr[0].hidden = true;
          arr[3].hidden = true;
          arr[1].hidden = false;
          break;

        case 4:
          arr[2].hidden = true;
          arr[0].hidden = true;
          arr[1].hidden = true;
          arr[3].hidden = false;
          break;
      }
    }
  }]);

  return link;
}();

exports.link = link;
},{}],"../src/startf.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var start = /*#__PURE__*/function () {
  function start(button) {
    var _this = this;

    _classCallCheck(this, start);

    button.addEventListener('click', function () {
      return _this.startGame();
    });
  }

  _createClass(start, [{
    key: "startGame",
    value: function startGame() {
      var s = document.getElementsByClassName('test');
      var i = s.length;

      while (i--) {
        s[i].classList.toggle('hidden');
      }
    }
  }]);

  return start;
}();

exports.start = start;
},{}],"../src/ans.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = exports.answer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var answer = /*#__PURE__*/function () {
  function answer(button, input) {
    var _this = this;

    _classCallCheck(this, answer);

    this.x = 0;
    this.count = 0;
    this.text = input;
    button.addEventListener('click', function () {
      return _this.checkAnswer();
    });
  }

  _createClass(answer, [{
    key: "checkAnswer",
    value: function checkAnswer() {
      var parent = document.getElementById('comment');
      if (!(parent instanceof HTMLElement)) return; //let arr = ['Адвокат', 'Нянь', 'Доктор', 'Хирург', 'Математик', 'Кок', 'Врач', 'Певец', 'Официант', 'Бартендер'];

      if (this.x >= 9) {
        var cid = document.getElementById('count');
        if (!(cid instanceof HTMLElement)) return;
        cid.innerHTML = 'Ваш счет:';
        var wid = document.getElementById('word');
        if (!(wid instanceof HTMLElement)) return;
        wid.innerHTML = "".concat(this.count);

        if (this.count < 20) {
          var c = document.createElement('p');
          c.innerHTML = 'Судя по всему, вы только недавно открыли для себя мир феминитивов. Но ничего, язык меняется, а мы не всегда за ним успеваем. Мы уверенны, что после небольшой практики вы справитесь лучше. А пока можете поискать интересуешие вас слова на сайте.';
          parent.append(c);
        } else if (this.count > 70) {
          var _c = document.createElement('p');

          _c.innerHTML = 'Сразу видно, тест проходил профессионал! Вы уже давно интересуетесь феминитивами и хорошо ориентируетесь в пограничных ситуациях. Но если что, вы всегда можете изучить чуть больше на нашем сайте.';
          parent.append(_c);
        } else {
          var _c2 = document.createElement('p');

          _c2.innerHTML = 'Кажется, вы слышите про феминитивы не в первый раз, но не интересовались темой подробной. Что ж, у вас хорошая наслышанность, но если вдруг будет интересно, заходите на наш сайт и изучайте вопрос по-новому.';
          parent.append(_c2);
        }

        var bid = document.getElementById('back_button');
        if (!(bid instanceof HTMLElement)) return;
        bid.classList.remove('hidden');
        var bbid = document.getElementById('b');
        if (!(bbid instanceof HTMLElement)) return;
        bbid.classList.add('hidden');
        var aaid = document.getElementById('a');
        if (!(aaid instanceof HTMLElement)) return;
        aaid.classList.add('hidden');
      } else {
        var a = this.text;

        switch (this.x) {
          case 0:
            if (a === 'Адвокатесса' || a === 'адвокатесса') {
              this.count += 10;

              var _c3 = document.createElement('p');

              _c3.innerHTML = 'Хорошая работа!';
              parent.append(_c3);
            } else if (a === 'Адвокатка' || a === 'адвокатка') {
              this.count += 5;

              var _c4 = document.createElement('p');

              _c4.innerHTML = 'Так конечно говорят, но редко.';
              parent.append(_c4);
            } else {
              var _c5 = document.createElement('p');

              _c5.innerHTML = 'Увы, правильный ответ — Адвокатесса.';
              parent.append(_c5);
            }

            break;

          case 1:
            if (a === 'Няня' || a === 'няня') {
              this.count += 10;

              var _c6 = document.createElement('p');

              _c6.innerHTML = 'Это было просто:)';
              parent.append(_c6);
            } else {
              var _c7 = document.createElement('p');

              _c7.innerHTML = 'Жаль.. Подвоха не было.';
              parent.append(_c7);
            }

            break;

          case 2:
            if (a === 'Докторка' || a === 'докторка') {
              this.count += 10;

              var _c8 = document.createElement('p');

              _c8.innerHTML = 'Хорошая работа!';
              parent.append(_c8);
            } else if (a === 'Докторесса' || a === 'докторесса') {
              this.count += 5;

              var _c9 = document.createElement('p');

              _c9.innerHTML = 'Так конечно говорят, но редко.';
              parent.append(_c9);
            } else {
              var _c10 = document.createElement('p');

              _c10.innerHTML = 'Увы, правильный ответ — Докторка.';
              parent.append(_c10);
            }

            break;

          case 3:
            if (a === 'Хирургиня' || a === 'хирургиня') {
              this.count += 10;

              var _c11 = document.createElement('p');

              _c11.innerHTML = 'Хорошая работа!';
              parent.append(_c11);
            } else {
              var _c12 = document.createElement('p');

              _c12.innerHTML = 'Увы, правильный ответ — Хирургиня.';
              parent.append(_c12);
            }

            break;

          case 4:
            if (a === 'Математикиня' || a === 'математикиня') {
              this.count += 10;

              var _c13 = document.createElement('p');

              _c13.innerHTML = 'Хорошая работа!';
              parent.append(_c13);
            } else {
              var _c14 = document.createElement('p');

              _c14.innerHTML = 'Увы, правильный ответ — Математикиня.';
              parent.append(_c14);
            }

            break;

          case 5:
            if (a === 'Кокесса' || a === 'кокесса') {
              this.count += 10;

              var _c15 = document.createElement('p');

              _c15.innerHTML = 'Хорошая работа!';
              parent.append(_c15);
            } else {
              var _c16 = document.createElement('p');

              _c16.innerHTML = 'Увы, правильный ответ — Кокесса.';
              parent.append(_c16);
            }

            break;

          case 6:
            if (a === 'Врачиня' || a === 'врачиня') {
              this.count += 10;

              var _c17 = document.createElement('p');

              _c17.innerHTML = 'Хорошая работа!';
              parent.append(_c17);
            } else if (a === 'Врачиха' || a === 'врачиха') {
              var _c18 = document.createElement('p');

              _c18.innerHTML = 'Пожалуйста, не говори так. Правильно представительныц данной профессии называть врачинями.';
              parent.append(_c18);
            } else {
              var _c19 = document.createElement('p');

              _c19.innerHTML = 'Увы, правильный ответ — Врачиня.';
              parent.append(_c19);
            }

            break;

          case 7:
            if (a === 'Певица' || a === 'певица') {
              this.count += 10;

              var _c20 = document.createElement('p');

              _c20.innerHTML = 'Хорошая работа!';
              parent.append(_c20);
            } else {
              var _c21 = document.createElement('p');

              _c21.innerHTML = 'Подвоха не было:)';
              parent.append(_c21);
            }

            break;

          case 8:
            if (a === 'Официантка' || a === 'официантка') {
              this.count += 10;

              var _c22 = document.createElement('p');

              _c22.innerHTML = 'Хорошая работа!';
              parent.append(_c22);
            } else {
              var _c23 = document.createElement('p');

              _c23.innerHTML = 'Ну же, немного усилий!';
              parent.append(_c23);
            }

            break;

          case 9:
            if (a === 'Бартендерка' || a === 'бартендерка') {
              this.count += 10;

              var _c24 = document.createElement('p');

              _c24.innerHTML = 'Хорошая работа!';
              parent.append(_c24);
            } else {
              var _c25 = document.createElement('p');

              _c25.innerHTML = 'Увы, правильный ответ — Бартендерка.';
              parent.append(_c25);
            }

            break;
        }
      }

      this.x += 1;
      var s = document.getElementsByClassName('play');
      var i = s.length;

      while (i--) {
        s[i].classList.toggle('hidden');
      }

      var pid = document.getElementById('play_input');
      if (!(pid instanceof HTMLElement)) return;
      pid.textContent = '';
      pid.classList.toggle('hidden');
    }
  }]);

  return answer;
}();

exports.answer = answer;

var check = /*#__PURE__*/function () {
  function check(button) {
    var _this2 = this;

    _classCallCheck(this, check);

    this.x1 = 0;
    button.addEventListener('click', function () {
      return _this2.nextQuestion();
    });
  }

  _createClass(check, [{
    key: "nextQuestion",
    value: function nextQuestion() {
      if (this.x1 < 10) {
        var arr = ['Адвокат', 'Нянь', 'Доктор', 'Хирург', 'Математик', 'Кок', 'Врач', 'Певец', 'Официант', 'Бартендер'];
        var parent = document.getElementById('comment');
        if (!(parent instanceof HTMLElement)) return;

        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }

        var s = document.getElementsByClassName('play');
        var i = s.length;

        while (i--) {
          s[i].classList.toggle('hidden');
        }

        this.x1 += 1;
        var pid = document.getElementById('play_input');
        if (!(pid instanceof HTMLElement)) return;
        pid.classList.toggle('hidden');
        var cid = document.getElementById('count');
        if (!(cid instanceof HTMLElement)) return;
        cid.innerHTML = "".concat(this.x1 + 1, "/10");
        var wid = document.getElementById('word');
        if (!(wid instanceof HTMLElement)) return;
        wid.innerHTML = arr[this.x1];
      } else {
        this.x1 = 0;
        var ain = document.getElementById('a');

        var _pid = document.getElementById('play_input');

        if (!(_pid instanceof HTMLElement)) return;
        if (!(ain instanceof HTMLElement)) return; //new answer(ain, pid);
      }
    }
  }]);

  return check;
}();

exports.check = check;
},{}],"../src/controlf.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.control = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var control = /*#__PURE__*/function () {
  function control(button, input, word) {
    var _this = this;

    _classCallCheck(this, control);

    this.text = input;
    this.output = word;
    button.addEventListener('click', function () {
      return _this.get_text();
    });
  }

  _createClass(control, [{
    key: "get_text",
    value: function get_text() {
      var parent = document.getElementById('results');
      if (!(parent instanceof HTMLElement)) return;
      var i = 0,
          arr = [],
          word = this.text,
          newWord = word;
      if (!word) return;
      if (!newWord) return;
      var mid = document.getElementById('main_input');
      if (!(mid instanceof HTMLElement)) return;
      mid.nodeValue = '';
      var nid = document.getElementById('new');
      if (!(nid instanceof HTMLElement)) return;
      nid.classList.remove('hidden');
      var aid = document.getElementById('article');
      if (!(aid instanceof HTMLElement)) return;
      aid.classList.add('hidden');

      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }

      if (word.slice(-1) > 'а' && word.slice(-1) < 'я' || word.slice(-1) > 'А' && word.slice(-1) < 'Я') {
        if (word.slice(-2) === 'ог') {
          arr[i] = 'иня';
        } else if (word.slice(-3) === 'ник') {
          arr[i] = 'ница';
          newWord = word.slice(0, -3);
        } else if (word.slice(-2) === 'ик') {
          arr[i] = 'ица';
          newWord = word.slice(0, -2);
        } else if (word.slice(-2) === 'ец') {
          arr[i] = 'чиха';
          newWord = word.slice(0, -2);
        } else if (word.slice(-1) === 'р' || word.slice(-1) === 'н') {
          arr[i] = 'ша';
          arr[i + 1] = 'ка';
        } else if (word.slice(-2) === 'ль') {
          arr[i] = 'ница';
        } else if (word.slice(-1) === 'ь') {
          arr[i] = 'ица';
          arr[i + 1] = 'ка';
          newWord = word.slice(0, -1);
        } else {
          arr[i] = 'ица';
          arr[i + 1] = 'есса';
          arr[i + 2] = 'иня';
          arr[i + 3] = 'иха';
        }

        var arr2 = document.querySelectorAll('input[type=checkbox]');
        var arr3 = [];
        var t = -1;
        i = arr2.length;

        while (i--) {
          var temp = arr2[i];

          if (temp.checked) {
            var lid = document.getElementsByTagName('label');
            var tmp = lid[i].textContent;
            if (!tmp) return;
            arr3[t += 1] = tmp.slice(1, -1);
          }
        }

        i = arr3.length;

        while (i--) {
          if (arr3[i].slice(-1) === 'н') arr3[i] += 'я';else arr3[i] += 'а';
        }

        if (arr3.length) arr = arr.filter(function (item) {
          return arr3.includes(item);
        });
        i = arr.length;

        if (i === 0) {
          var newDiv = document.createElement('p');
          newDiv.innerHTML = 'Таких слов нет';
          parent.append(newDiv);
        } else {
          while (i--) {
            var _newDiv = document.createElement('p');

            _newDiv.innerHTML = newWord[0].toUpperCase() + newWord.slice(1).toLowerCase() + arr[i];
            parent.append(_newDiv);
          }
        }
      } else if (word.slice(-1) == 'а' || word.slice(-1) == 'я') {
        var _newDiv2 = document.createElement('p');

        _newDiv2.innerHTML = 'Это слово и так прекрасно';
        parent.append(_newDiv2);
      } else if (word == '') {
        var _nid = document.getElementById('new');

        if (!(_nid instanceof HTMLElement)) return;

        _nid.classList.add('hidden');

        var _aid = document.getElementById('article');

        if (!(_aid instanceof HTMLElement)) return;

        _aid.classList.remove('hidden');

        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      } else {
        var _newDiv3 = document.createElement('p');

        _newDiv3.innerHTML = 'Ну издеваться то не надо';
        parent.append(_newDiv3);
      }
    }
  }]);

  return control;
}();

exports.control = control;
},{}],"../src/feedbk.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feed = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var feed = /*#__PURE__*/function () {
  function feed(wordi, wordii, button) {
    var _this = this;

    _classCallCheck(this, feed);

    this.word1 = wordi;
    this.word2 = wordii;
    button.addEventListener('click', function () {
      return _this.get_text();
    });
  }

  _createClass(feed, [{
    key: "get_text",
    value: function get_text() {}
  }]);

  return feed;
}();

exports.feed = feed;
},{}],"../src/index.ts":[function(require,module,exports) {
"use strict";

var _main = require("./main");

var _startf = require("./startf");

var _ans = require("./ans");

var _controlf = require("./controlf");

var _feedbk = require("./feedbk");

function main() {
  var aid = document.getElementById('add');
  if (!(aid instanceof HTMLElement)) return;
  new _main.link(aid, 1);
  var pid = document.getElementById('logo_pic');
  if (!(pid instanceof HTMLElement)) return;
  new _main.link(pid, 2);
  var gid = document.getElementById('get_test');
  if (!(gid instanceof HTMLElement)) return;
  new _main.link(gid, 3);
  var awid = document.getElementById('add_words');
  if (!(awid instanceof HTMLElement)) return;
  new _main.link(awid, 4);
  var bid = document.getElementById('back_to_main');
  if (!(bid instanceof HTMLElement)) return;
  new _main.link(bid, 2);
  var bbid = document.getElementById('back_button');
  if (!(bbid instanceof HTMLElement)) return;
  new _main.link(bbid, 2);
  var sid = document.getElementById('start');
  if (!(sid instanceof HTMLElement)) return;
  new _startf.start(sid);
  var anid = document.getElementById('a');
  var piid = document.getElementById('play_input').value;
  if (!(anid instanceof HTMLElement)) return;
  if (!piid) return;
  new _ans.answer(anid, piid);
  var biid = document.getElementById('b');
  if (!(biid instanceof HTMLElement)) return;
  new _ans.check(biid);
  var mid = document.getElementById('main_button');
  var miid = document.getElementById('main_input').value;
  var rid = document.getElementById('results');
  var fid = document.getElementById('filter_button');
  if (!(mid instanceof HTMLElement)) return;
  if (!miid) return;
  if (!(rid instanceof HTMLElement)) return;
  if (!(fid instanceof HTMLElement)) return;
  new _controlf.control(mid, miid, rid);
  new _controlf.control(fid, miid, rid);
  var a = document.getElementById('word1');
  var b = document.getElementById('word2');
  if (!(a instanceof HTMLElement)) return;
  if (!(b instanceof HTMLElement)) return;
  new _feedbk.feed(a, b, awid);
}

main();
},{"./main":"../src/main.ts","./startf":"../src/startf.ts","./ans":"../src/ans.ts","./controlf":"../src/controlf.ts","./feedbk":"../src/feedbk.ts"}],"C:/Users/tmclr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53116" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/tmclr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.ts"], null)
//# sourceMappingURL=/src.9caef6c7.js.map