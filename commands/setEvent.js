module.exports = {
	name: 'setEvent',
	description: '',
	execute(msg, embedMessage, serversConfig) {
    if (msg.mentions.channels.firstKey() !== undefined) {
      serversConfig[msg.guild.id].eventChannelID = msg.mentions.channels.firstKey();
      serversConfig[msg.guild.id].save().then(()=>msg.reply("event annoucment channel has been updated"));
    }else{
      msg.reply(`"you need to tag channel to make it work, for example \`!setEvent <channel>\``);
    }
  }
};
