const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/");
bot.on("ready",() =>{
    bot.user.setPresence({ game: { name:"[/help] Besoin De Shit" , type: 0}});
    console.log("Bot Ready !");
});

bot.login("NDM3MTY1OTA5MzMzNzcwMjYw.DbyJSw.3lHIpN_W3gjJDnM9bheVTB4GJjE");

bot.on("message" , message =>{
    if(message.content === "/yt"){
        message.reply("**Voici La Chaine De D3ller : http://bit.ly/2GGOq6W ** ");
        console.log("ip");
    }
    
    if(message.content === "/help"){
        var embed = new Discord.RichEmbed()
            .setTitle("***Shit-Help***")
            .setDescription("**Ceci Est Une Aide Pour Les Cmds !**")
            .addField("/help","Page D'aide" , true)
            .addField("/yt ","Pour Avoir La Chaine A D3ller", true)
            .addField("/gyt","Pour Savoir A Combien D'abos Est Le Grade YT est Mini-YT")
            .setColor("10A100")
            .setFooter("Nous Te Souhaitons Un Bon Moment Sur Le Serveur De D3ller")
        message.channel.sendEmbed(embed);    
        
    }
});
bot.on("message" , message =>{
    if(message.content === "/gyt"){
        message.reply("**==> Le Grade YT Est A 500sub et Le Mini-YT à 250sub ** ");
        console.log("report");

    }
});






  
