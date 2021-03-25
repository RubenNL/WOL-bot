const Discord = require('discord.js');
const wol = require('wol');
const client = new Discord.Client();
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.on('message', message => {
		if(!message.mentions.has(client.user)) return
		wol.wake(mac, function(err, res){
			if(err) {
				message.channel.send('wol failed.')
				console.log(err,res);
			} else message.channel.send('WOL send.')
		});
	});
});
const key=process.argv[2]
const mac=process.argv[3]
if(!key || !mac) {
	console.warn('Key and mac required!')
	console.warn(`Usage: ${process.argv[0]} ${process.argv[1]} <key> <mac>`)
	process.exit(1);
} else client.login(key);
