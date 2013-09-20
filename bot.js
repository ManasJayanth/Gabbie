// Create the configuration
var config = {
	channels: ["#forgabbie"],
	server: "irc.freenode.net",
	botName: "Gabbie"
};
// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server,config.botName,{
	channels: config.channels});
// Listen for joins
bot.addListener("join", function(channel, who) {
	// Welcome them in!
	if(who != 'Gabbie')
	bot.say(channel, "Welcome " + who + ". I'm Gabbie.");
});
Listen for any message, PM said user when he posts
bot.addListener("pm", function(from, to, text, message) {
	bot.say(from, "Hi! I'm Gabbie. I'm Manas's friend. He'll tell you more about me");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function (from, to, text) {
	if (text.toLowerCase().indexOf('hi') != -1) {
		bot.say(config.channels[0],"Hello " + from + "! How are you?");
	};
});

bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

console.log('Gabbie has woken up');