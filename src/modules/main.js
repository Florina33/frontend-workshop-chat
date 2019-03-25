import $ from 'jquery';
import PubNub from 'pubnub';

import chat from './chat';


let chatFromElem = $('.chat-form');
let messageIntup = $('.message-input');
let messagesElem = $('messages');

function handleSendMessage (event) {
	event.preventDefault();
	let value = messageIntup.val();

	// console.log('1111111111111111111');
	// publishMessage();

	chat.sendMessage({
		text: value,
		mine: false
	});
}

function outputMessage (data) {
	console.log(data.text);

	//
	messagesElem.append();
}

chatFromElem.on('submit', handleSendMessage);


chat.onMessage(function (data) {
	console.log(data.text);
});