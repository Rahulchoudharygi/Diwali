document.getElementById('generateButton').addEventListener('click', function() {
  var name = document.getElementById('typingPad').value;
  var messages = [
    `May your life be as colorful and bright as the lights of Diwali. Happy Diwali to my amazing friend, ${name}.`,
    `As we celebrate Diwali, may our friendship shine as bright as the diyas and last forever. Happy Diwali, dear friend , ${name}.`,
    `Wishing you a Diwali filled with love, joy, and the warmth of family. Happy Diwali, dear relatives or friend , ${name}!`
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];

  document.getElementById('messageArea').innerText = message;
});

// Title bar animation
var title = "Happy dhanteras  ";
var titleIndex = 0;

function animateTitle() {
  document.title = title.substring(titleIndex) + title.substring(0, titleIndex);
  titleIndex++;
  if (titleIndex > title.length) {
    titleIndex = 0;
  }
}

setInterval(animateTitle, 200);
