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




// countdown
var ctd = document.getElementById('countdown');

countdown();
function countdown(){   
   var launch_date = new Date (Date.UTC(2016, 00, 14, 00, 00));
   var days; var hours; var minutes; var seconds; var rest;
    var now = new Date();
    
   seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

   days = zero (Math.floor(seconds / 86400));
   seconds -= days * 86400;
            
   hours = zero (Math.floor(seconds / 3600));
   seconds -= hours * 3600;

   minutes = zero (Math.floor(seconds / 60));
   seconds -= minutes * 60;

   seconds = zero (Math.floor(seconds));
    
   function zero(n){
       return (n < 10 ? '0' : false) + n;  
   }
  
   rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);
     
   ctd.innerHTML =
      '<li><div><span>' + days +'</span>day' + (days > 1 ? 's' : '') +'</div></li>'
      +'<li><div><span>' + hours +'</span>hour' + (hours > 1 ? 's' : '') +'</div></li>'
      +'<li><div><span>' + minutes +'</span>minute' + (minutes > 1 ? 's' : '') +'</div></li>'
      +'<li><div><span>' + seconds +'</span>second' + (seconds > 1 ? 's' : '') +'</div></li>';
}