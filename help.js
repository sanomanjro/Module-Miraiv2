module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "Xem con cặc gì vậy?",
	commandCategory: "group",
	usages: "[lệnh]",
	cooldowns: 5,
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
var msg = ["hiện tại code này là do DuyVuong code ở phiên bản 1.0.2","con bot này thông minh hơn bạn"//tự thêm nhé];
var cc = Math.floor(Math.random() * msg.length);
var lon = "[Bạn có biết?]: ${msg}.";
return api.sendMessage($lon, event.threadID, event.messageID);
}
