const Discord = require("discord.js");
const config = require("./config.json");
const star = require('star-labs'); //Utilizamos la esta libreria
const client = new Discord.Client();

const ytdl = require('ytdl-core');
const search = require('youtube-search');

let prefix = config.prefix;


client.on('ready', () => {
    console.log(`Estoy listo!`);
 });

function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "Among Us",
         type: "PLAYING"
      }
   });
}
 
 client.on('message', (message) => {
   if(message.content.startsWith('ping')) {
     message.channel.send(`pong 🏓!!`);
   }
 



//COMANDO
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase(); 
//COMANDOS//


///INVITACION///

if(command === 'invite'){
  
	message.channel.createInvite({  
    //opciones de la invitacion
    maxAge: 0  
})
  .then(invite => {
    message.channel.send(invite.url)
  })
  .catch(err => {
    message.channel.send('Ocurrio un error al crear la invitacion')
  })

  };
 
///INVITACION///
///////////CODIGO DE ACCIONES MEDIANTE GIFS//////
///ABRAZO///
if(command === 'abrazo'){//Abrimos un nuevo comando
	message.delete()
	let aA = message.author
	let aB = message.mentions.users.first()//utilizamos las menciones
	if(!aB) return message.channel.send('Menciona a 1 usuario para darle un abrazo.');//Si no se menciona a alguien, el bot enviará esto.
	const aC = new Discord.MessageEmbed()//Podeis cambiar el embed a nuestro gusto
    .setDescription(aA.tag+' abrazó a '+aB.tag)
    .setImage(star.hug())
    .setFooter(`Comando echo por **${client.user.username}**`, client.user.displayAvatarURL)
    .setTimestamp();
	message.channel.send(aC);
	}
///ABRAZO///
///BESO///
if(command === 'beso'){//Abrimos un nuevo comando
	message.delete()
	let aA = message.author
	let aB = message.mentions.users.first()//utilizamos las menciones
	if(!aB) return message.channel.send('Menciona a 1 usuario para darle un abrazo.');//Si no se menciona a alguien, el bot enviará esto.
	const aC = new Discord.MessageEmbed()//Podeis cambiar el embed a nuestro gusto
    .setDescription(aA.tag+' beso a '+aB.tag)
    .setImage(star.kiss())
    .setFooter(`Comando echo por **${client.user.username}**`, client.user.displayAvatarURL)
    .setTimestamp();
	message.channel.send(aC);
	}
///ABRAZO///
///////////CIERRE DE CODIGO DE ACCIONES MEDIANTE GIFS//////

/////EMBEDS///////


///JUEGO/////
if(command === 'among'){
const embed = new Discord.MessageEmbed()
  .setTitle('Among Us')
  .setColor(0x5E9DE4)
  .setDescription('Imagina que formas parte de una tripulación espacial en la que se ha colado un intruso que pretende destruiros a todos antes de llegar a destino. Esta es la premisa de la que parte Among Us, un divertido juego de acción y mucha intriga.')
  .addField('Version', '2020.9.1', true)
  .addField('Link de Descarga', 'https://bit.ly/356wwtr', true)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setThumbnail('https://media1.tenor.com/images/ef4993b593954811a0c0a1c98af698a3/tenor.gif?itemid=16399941')
  .setImage('https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1598556351')
  .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
  .setTimestamp()
  .setURL('https://bit.ly/356wwtr');
message.channel.send(embed);


}
});

///////CIERRE DE CODIGO EMBEDS//////////


///MENSAJE DE BIENVENIDA ////
client.on("guildMemberAdd", miembro =>{
    var Canal = client.channels.cache.find(channel => channel.id === ("747288908584452216"));
    Canal.send("Bienvenido/a, <@" + miembro.id + "> al servidor de discord de , recuerda leer nuestras reglas.antes de empezar, es muy importante. Pásalo muy bien :sunglasses: ");
 });

////////



 
 client.login(config.token);
