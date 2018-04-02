module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(reply) {
	message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");    
	},	
};
