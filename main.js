// Provides text data and formatting
const text = (function text() {
  const texts = [
    "カレーにはどんな肉を入れますか。関西地方では牛肉、関東地方では豚肉を入れることが多いようですが、とり肉やひき肉のカレーもおいしいし、エビやイカを入れたシーフードカレーも大好きです。肉を入れずに作る野菜たっぷりのカレーもまた格別です。",
    "ターメリックはカレーの黄色い色のもとになっている香辛料で、肝臓の働きをよくする効果があります。また脳の細胞を活性化させ、認知症の予防効果も期待されています。カレー独特の香りはクミンによるもので、消化促進や脂肪燃焼効果があります。",
    "世界初のレトルトカレーのボンカレーが大塚食品から発売されたのは、今から五十年ほど前のことです。当初は半透明の容器で、光や酸素で劣化し賞味期限は約三カ月。輸送中に破損することもありました。その後アルミ箔を使った三層構造の容器に改良され、保存性と耐久性が向上し、常温で二年という長期保存が可能になったのです。",
    "パクチー、レモングラスなどのハーブをふんだんに使った独特の風味が人気のタイカレー。タイではゲーンとよばれるスープ料理です。タイカレーにはいろいろな種類がありますが、中でもレッドカレー、グリーンカレーが有名です。",
  ];
  let current = "";

  const wrapCharacter = function wrapCharacter(character, index) {
    const output = document.createElement("span");
    output.textContent = character;
    output.setAttribute("data-index", index);
    return output;
  };

  /**
   * Wraps each character of the text in a span, so we can add classes to each.
   * Classes will have colors to highlight mistakes or the next character.
   */
  const format = function format(string) {
    const output = document.createElement("div");
    [...string].forEach((character, index) => {
      output.append(wrapCharacter(character, index));
    });
    return output;
  };

  const randomizeText = function randomizeText() {
    current = texts[Math.floor(Math.random() * texts.length)];
  };

  const getRandomString = function getRandomString() {
    randomizeText();
    return getCurrentString();
  };

  const getCurrentLength = function getCurrentLength() {
    return current.length;
  };

  const getCurrentString = function getCurrentString() {
    return current;
  };

  return {
    format,
    getRandomString,
    getCurrentString,
    getCurrentLength,
  };
})();

// Makes changes to the view
const view = (function view() {
  // Text that the user will see and have to type
  const textView = document.querySelector("#text");
  // Box where the user will type
  const inputBox = document.querySelector("#input");

  const loadNewText = function loadNewText() {
    const newText = text.format(text.getRandomString());
    textView.innerHTML = "";
    textView.append(newText);
  };

  const markError = function markError(index) {
    textView
      .querySelector(`span[data-index="${index}"]`)
      .classList.add("error");
    inputBox.classList.add("wrong");
  };

  const markNextCharacter = function markNextCharacter() {
    textView
      .querySelector(`span[data-index="${inputBox.textContent.length}"]`)
      .classList.add("next");
  };

  const markTextDone = function markTextDone() {
    inputBox.classList.add("done");
  };

  /**
   * Removes all classes indicating mistakes, next characters, or that the test
   * is complete.
   * Removing a class whether it's present or not doesn't create errors so no
   * checks, but I wonder whether those "empty removals" affect performance.
   */
  const clearAllMarkings = function clearAllMarkings() {
    if (!textView.firstElementChild) return;
    else {
      inputBox.classList.remove("wrong", "done");
      [...textView.firstElementChild.children].forEach((character) => {
        character.classList.remove("error", "next");
      });
    }
  };

  const updateResult = function updateResult(cpm) {
    document.querySelector("#cpm").textContent = cpm;
  };

  const clearInput = function clearInput() {
    inputBox.textContent = "";
  };

  return {
    loadNewText,
    clearAllMarkings,
    markError,
    markNextCharacter,
    markTextDone,
    updateResult,
    clearInput,
  };
})();

const timer = (function timer() {
  let [beginning, end] = [];
  const start = function startTimer() {
    beginning = Date.now();
  };
  const stop = function stopTimer() {
    end = Date.now();
  };
  const getMinutes = function getDurationInMinutes() {
    return (end - beginning) / 60 / 1000;
  };
  return {
    start,
    stop,
    getMinutes,
  };
})();

const cpm = (function cpm() {
  const calculate = function calculateCpm() {
    return Math.round(text.getCurrentLength() / timer.getMinutes());
  };
  return {
    calculate,
  };
})();

const controller = (function controller() {
  const inputBox = document.querySelector("#input");
  let currentText = null;

  const beginTest = function beginTest() {
    view.clearAllMarkings();
    view.clearInput();
    view.loadNewText();
    currentText = text.getCurrentString();
    unlockInputBox();
    timer.start();
    inputBox.focus();
    view.markNextCharacter();
  };

  const endTest = function endTest() {
    timer.stop();
    lockInputBox();
    view.markTextDone();
    view.updateResult(cpm.calculate());

    const restartButton = document.querySelector("#start-button");
    restartButton.focus();
  };

  const isTestComplete = function isTestComplete() {
    return inputBox.textContent === currentText;
  };
  const lockInputBox = function lockInputBox() {
    inputBox.removeAttribute("contenteditable");
  };
  const unlockInputBox = function unlockInputBox() {
    inputBox.setAttribute("contenteditable", "");
  };
  const indexOfFirstError = function indexOfFirstError() {
    return [...inputBox.textContent].findIndex(
      (character, i) => character !== currentText[i]
    );
  };

  // The main function, triggered every time something changes in the input box.
  const checkInput = function checkInput() {
    /**
     * Upon first loading the page, no text is formatted into the view, so
     * currentText is an empty string. That check prevents errors that would
     * arise if we went further into the function.
     *
     * The reason I don't automatically format a new text on first loading is
     * that the timer starts as soon as a text is loaded, so users who are new
     * to this typing test would be penalized for the time they take to figure
     * it out.
     * Ideally I would start the timer as soon as the user starts typing, but
     * I couldn't figure out how to make it reliably work with an IME.
     */
    if (!currentText) return;
    view.clearAllMarkings();
    if (isTestComplete()) {
      endTest();
    } else {
      const errorIndex = indexOfFirstError();
      if (errorIndex === -1) {
        view.markNextCharacter();
      } else {
        view.markError(errorIndex);
      }
    }
  };

  return {
    beginTest,
    checkInput,
  };
})();

const initialize = (function initialize() {
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", controller.beginTest);

  const inputBox = document.querySelector("#input");
  inputBox.addEventListener("input", controller.checkInput);
  view.clearInput();
  inputBox.textContent = "ここで入力モードを確認しましょう。";
  startButton.focus();
})();
