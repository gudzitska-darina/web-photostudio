const TOKEN = ***; // токен от BotFather
const CHAT_ID = ***; // chat_id для телеграм

var form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  data = new FormData(this);
  sendMsg(data);
});

function sendMsg(data) {
  var url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
  var body = JSON.stringify({
    chat_id: CHAT_ID,
    parse_mode: "Markdown",
    text: "Вітаємо, " + data.get("name") + "!\nНайближчим часом з вами звʼяжеться оператор",
  });
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(body);
  form.reset();
}
