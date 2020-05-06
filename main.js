// Provides text data and formatting
const text = (function text() {
  const texts = [
    "カレーにはどんな肉を入れますか。関西地方では牛肉、関東地方では豚肉を入れることが多いようですが、とり肉やひき肉のカレーもおいしいし、エビやイカを入れたシーフードカレーも大好きです。肉を入れずに作る野菜たっぷりのカレーもまた格別です。",
    "ターメリックはカレーの黄色い色のもとになっている香辛料で、肝臓の働きをよくする効果があります。また脳の細胞を活性化させ、認知症の予防効果も期待されています。カレー独特の香りはクミンによるもので、消化促進や脂肪燃焼効果があります。",
    "世界初のレトルトカレーのボンカレーが大塚食品から発売されたのは、今から五十年ほど前のことです。当初は半透明の容器で、光や酸素で劣化し賞味期限は約三カ月。輸送中に破損することもありました。その後アルミ箔を使った三層構造の容器に改良され、保存性と耐久性が向上し、常温で二年という長期保存が可能になったのです。",
    "パクチー、レモングラスなどのハーブをふんだんに使った独特の風味が人気のタイカレー。タイではゲーンとよばれるスープ料理です。タイカレーにはいろいろな種類がありますが、中でもレッドカレー、グリーンカレーが有名です。",
    "車やバスの車内には、優先席が設置されている。この席の近くには、優先席を必要としている人の説明がある。乗車する人にわかりやすく伝えるために、絵の入ったステッカーを利用している。その中には、けがをした人や妊婦が描かれている。また、お年寄りや幼い子どもを連れた親子の絵などもある。",
    "最近の車社会は、女性や高齢のドライバーが増えていることが、特徴としてあげられる。その結果、一般の道路にも、運転手が安全な運転を実現するために、トイレなどを完備した休みが取れる設置が必要になった。また、運転手だけでなく、子供やお年寄りなど、同乗者に利用しやすいことも求められている。",
    "原油の価格が値上がりすることにより、ジェット機の燃料であるケロシンの価格も高くなる。そこで、運賃の一部を消費者に負担してもらう方式を導入した。これが、燃油サーチャージという制度である。航空会社は、内部的な努力をしているのだが、それだけでは燃料費の値上がり分を吸収できないためだ。",
    "ロシアのある科学者は、ロケットによる宇宙旅行を夢だけの世界ではなく、科学として初めて研究した。独学によって数学や物理学などを身に付け、吹き出すガスの速度が増すことで、より速度が得られることを示した公式を発表した。これは、現在でも設計する時に使われている。また、彼は人工衛星の理論を述べた。この業績から「宇宙旅行の父」と呼ばれた。",
    "人類の技術レベルは、月面基地を実現することが可能な段階まで達している。将来は、太陽エネルギーによって月の資源を宇宙で、精錬するという新しい技術が登場する可能性がある。また、これをさらに進歩させて、月だけではなく、小惑星を鉱物源として利用することができる。大量の資材を使用して加工できるようになれば、宇宙空間に大都市を作ることも可能だ。",
    "以前から、ネット上にはオンライン小説が存在している。これを利用するにはパソコンが必要であり、所有していない場合は使用が制限された。また、所有していても通勤や通学などで利用することは困難であった。しかし、携帯電話の普及によって、場所や時間を選ばずに利用が可能となった。",
    "私たちにとって最も身近なクルマといえば、まず乗用車が思いつくだろう。また、多くの人たちを運ぶバスや大量の荷物を運搬するトラックなどの大型車が、生活に密着している。それら以外では、暮らしの安全を見張るパトカー、急な病気やけが人を運ぶ救急車などは、なくてはならない存在である。",
    "どんな動物が好きですかと聞かれたら、何と答えますか。最近特に人気があるものに、ネコが挙げられるようです。のんびりと気ままな性格で、昨日は冷たい態度を取ったかと思えば、翌日は一変して甘えてきます。ふいにどこかへ行ってしまっても、いつの間にか帰ってきているなど、そんな気まぐれな性格をいとおしく感じる人が多いようです。",
    "いつも食事をしているとき、ゆっくりとよくかんで食べることを意識している人は少なくないでしょう。私たち人間は、口から食べ物を摂取しますが、このときあまりかまずに食べてしまうと、内臓に負担がかかり、健康に良くないことは多くの人に知られています。かむという行為は人間の体にとって大切なことなのです。",
    "わたしは、いつの間にか歌を口ずさんでいるということがよくあります。例えば、お風呂に入っているときや料理をしているときなど、一人でいる時間に気付くと歌っているということが多いです。最初は小さな声だったのが、気持ち良くなってきて、知らず知らずのうちに大声で歌っていたという経験がある人も少なくないでしょう。",
    "竹は強くて弾力があり、軽くて加工しやすいことから、いろいろな道具に使われて人々の暮らしに役立てられてきました。その用途は広く、建築材や家庭用品から農具や楽器に至るまで、あらゆるものに利用されています。かぐや姫を見つけて育ててくれたおじいさんも、これを取って生活していました。昔話に登場するほど古くから、日本人にとって身近な存在だったのです。",
    "おかずを先に食べてしまって、白いご飯だけが残ったという経験をしたことはありませんか。そんなときに活躍するのが「ふりかけ」です。昔は家庭で手作りすることが多かったようですが、最近では市販品を使う人も多いでしょう。種類も豊富で、さまざまな味のものが販売されています。",
    "人前で大げさにほめられると、照れくさくて、つい頭をかいてしまうという人は多いのではないでしょうか。役者が劇中でそんな場面を演じる際、同様の動作をするのを見たことがあります。また漫画で、登場人物が頭に手をやる場面に、それほどでもといった吹き出しが登場するのは古典的な手法だとえるでしょう。",
    "グローバル化する世界では、市場システムがもとめる原理や思考が国境をものともせず、あまねく日常生活にまで浸透してくる。だが、さかのぼれば人間社会を市場経済が覆うようになったのはそれほど古いことではないし、資本主義的な市場経済が無条件で地上に存在できるようになったわけでもない。",
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
