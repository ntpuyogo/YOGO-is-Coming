var words = [
"你知道在非洲每過1分鐘，就已經過了60秒了嗎?", 
"在YOGO BOX的活動中，已經有43位同學說要團購女朋友...", 
"你的IDEA很特別，但很可惜目前有18位同學有跟你一樣的想法", 
"你會有興趣與外系的同學們，來場電影聯誼趴踢嗎?", 
"揪團去環島是一個不錯的Idea", 
"YOGO神燈精靈覺得你的揪團IDEA有點LOW", 
"聽說北大黑森林中有日軍留下來的黃金"
];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

console.log(word);

document.getElementById("word").textContent = word;