//Initalizing the websockets
var ws_uri = "ws://https://fc500.github.io/pages/index.html:9600";
var websocket = new WebSocket(ws_uri);

// on websocket open:
websocket.onopen = function(event) {
	MessageAdd('<div class="message green">You have entered the chat room.</div>');
};

// on websocket close:
websocket.onclose = function(event) {
	MessageAdd('<div class="message blue">You have been disconnected.</div>');
};

// on websocket error:
websocket.onerror = function(event) {
	MessageAdd('<div class="message red">Connection to chat failed.</div>');
};

websocket.onmessage = function(event) {
	var data = JSON.parse(event.data);

	if (data.type == "message") {
		MessageAdd('<div class="message">' + data.username + ': ' + data.message + '</div>');
 	}
};

function Username() {
	var username = window.prompt("Enter your username:", "");
	
	if (username.toString().length > 2) {
		localStorage.setItem("username", username);
	}
	else {
		alert("Your username must be at least two characters.");
		Username();
	}
}

Username();

document.getElementById("chat-form").addEventListener("submit", function(event) {
	event.preventDefault();

	var message_element = document.getElementsByTagName("input")[0];
	var message = message_element.value;

	if (message.toString().length) {
		var username = localStorage.getItem("username");
		
		var data = {
			type: "message",
			username: username,
			message: message
		};

		websocket.send(JSON.stringify(data));
		message_element.value = "";
	}
}, false);
