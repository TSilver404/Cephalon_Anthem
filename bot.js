
const Discord = require('discord.js');
const prefix = config.prefix;
const bot = new Discord.Client();
var flag = 0;
var key = 0;

bot.on('ready', () => {
	console.log("Cephalon online.");
});

bot.on('message', async message => {
	/*if(message.author.id !== bot.user.id){
		return;
	}*/	

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	

	if(command === `${prefix}On`){
		message.channel.send("`Cephalon Online.`");
		message.delete(0);
	}

	if(command === `${prefix}Check`){
		message.channel.send("t!rep");
		message.channel.send("t!daily");
		message.delete(0);
	}
	if(command === `${prefix}Dailies`){
		message.channel.send("t!rep "+args[0]);
		message.channel.send("t!daily "+args[1]);
		message.delete(0);
	}
	if(message.content === "CHAOS"){
		message.channel.send("FEAR US BECAUSE WE HAVE NO FEAR!!!");
	}
	if(command === `${prefix}Elist`){
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
 		message.channel.send(emojiList);
 		message.delete(0);	
	}

	if(command === `${prefix}Embed`){
		let embed = new Discord.RichEmbed()
			.setColor('#bdbbbb')
			.setDescription(args.join(" "));
		message.channel.send(embed);	
		message.delete(0);	
	}

	if(command === `${prefix}Stalker`){
		function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var x = getRandomInt(0,9);

		const es = bot.emojis.find("name", "stalker");		
		let stalker = new Discord.RichEmbed()
			.setColor('#50202')
			.setThumbnail(config.stalkp)
			.setAuthor("Stalker");


		if(x === 0){
			stalker.setDescription("*I know your every move* "+`${es}`);
		}
		else if (x === 1){
			stalker.setDescription("*There is no place to hide.* "+`${es}`);
		}
		else if (x  === 2){
			stalker.setDescription("*You can't run from your past* "+`${es}`);
		}
		else if (x === 3){
			stalker.setDescription("*I am your reckoning!* "+`${es}`);	
		}
		else if(x === 4){
			stalker.setDescription("*Your sentence is death!* "+`${es}`);	
		}
		else if (x === 5){
			stalker.setDescription("*You shall not leave this place* "+`${es}`);	
		}

		else{
			stalker.setDescription("*Your Tenno powers are useless* "+`${es}`);	
		}
		
		message.channel.send(stalker);
		message.delete();
	}
	if(command === `${prefix}AFK`)
	{	
		if(args[0] === '1')
		{
	  	let afk1 = new Discord.RichEmbed()
  		   .setColor('#ffffff')
	  	   .setAuthor("Cephalon Anthem")
	  	   .setDescription("You are now set as AFK.");
			message.channel.send(afk1);
			key = 1;
			console.log(key);
		}

		else if (args[0] === '0' && key == 1)
		{
	  	let afk2 = new Discord.RichEmbed()
  		   .setColor('#ffffff')
	  	   .setAuthor("Cephalon Anthem")
	  	   .setDescription("AFK status removed.");
			message.channel.send(afk2);
			key = 0;
		}
		else if(args[0] === '0')
		{
		  let afk3 = new Discord.RichEmbed()
  		   .setColor('#ffffff')
	  	   .setAuthor("Cephalon Anthem")
	  	   .setDescription("You were not AFK in the first place.");
			message.channel.send(afk3);
		  key = 0; 
		}
		else
		{
			message.reply("Missing arguments or irregular arguments");
		}
   message.delete(0);
	}
	if(command === `${prefix}JGU`)
	{
	  let jgu = new Discord.RichEmbed()
	      .setDescription("JUZ\nGIV\nEUP");
	  message.channel.send(jgu);
	  message.delete(0);
	}
});

bot.on('message', async message =>{
	if(message.author.id === bot.user.id)
	{
		return;
	}
	let afk = new Discord.RichEmbed()
		.setColor('#ffffff')
		.setAuthor("Cephalon Anthem")
		.setDescription("Silver404 is AFK or busy. DM if important.");
	if(key === 1)
	{
		if(message.isMentioned(bot.user.id) === true)
		{
			message.channel.send(afk);
		}
	}
});

bot.login(config.token);
