


var quotes = [
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You only live once, but if you do it right, once is enough.”",
    '“Be the change that you wish to see in the world.”',
    "You miss 100% of the shots you don't take.",
    "The best way to get started is to quit talking and begin doing."
  ];
  
  var btn = document.getElementById("btn");
  var quote = document.getElementById("quote");
  
  btn.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
  });
  

