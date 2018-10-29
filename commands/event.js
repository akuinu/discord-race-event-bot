const {eventMessage} = require('.././embedHelper.js');
module.exports = {
	name: 'event',
	aliases: ['race', 'raid'],
	description: 'make event',
	adminOnly: false,
	initRequiered: true,
	execute(msg, serversConfig) {
		if (msg.guild) {
			serversConfig.getTypeConfig(msg.guild.id).then(eventConfig => {
				serversConfig.getEventChannel(msg.guild.id).send(eventMessage(msg, eventConfig[0]))
				.then(message => serversConfig.addCollector(message))
				.catch(console.error);
			});
		}else {
			msg.reply("DEMO", eventMessage(msg,
				{authorField: "Demo created for ",
	      footer: "Test powered by Event Bot",
	      participants: "Testers(do not work in DM's):"
	    }));
		}
	}
};