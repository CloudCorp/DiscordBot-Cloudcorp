module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
	message.channel.send('Pong.'()new Date().getTime() - message.createdTimestamp + " ms");    
	},	
};
