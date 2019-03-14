const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
	//client.user.setActivity("don't hit me")
	client.user.setStatus('invisible').then(console.log).catch(console.error)
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel


    if(oldUserChannel === undefined && newUserChannel !== undefined && newMember.id === "555221597036871686") {

      // bowling bot is here
	  newMember.voiceChannel.join().then(connection => { // Connection is an instance of VoiceConnection
				  client.on('guildMemberSpeaking', (member, speaking) => {
					if(member.id === "555221597036871686") {
				      setTimeout(function(){
					    if(Math.random() > 0.7) {
                          newMember.voiceChannel.leave()
					    }
				      }, 4000); //end of timeout
					}
				  })
                })
                .catch(console.log);
				
    } else if(newUserChannel === undefined && oldMember.id === "555221597036871686"){
      // bowling bot has left the channel
	  if(client.voiceConnections.get(oldMember.guild.id)) {
	    client.voiceConnections.get(oldMember.guild.id).disconnect()
	  }
    }
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTU1NDU4MjA1Nzc4NzA2NDc0.D2rfhA.IvuCew8X0kZyA9cuLNRlTViTWBE"

client.login(bot_secret_token)