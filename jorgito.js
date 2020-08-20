const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
});

const Discord = require('discord.js');
const client = new Discord.Client();


var mensajes = [
    'Etoy vivo mmv',
    'Chupalo'
];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});



client.on('message', async message => {

    console.log(message.member.user.tag);
    var voiceChannel = message.member.voice.channel;

    // console.log(voiceChannel);
    
    if (message.member.user.tag === "BigDaddy.10#4494") {
        message.reply('Diego chupalo mi ñaño');
    }

    if (message.member.user.tag === "Jona-Tu-Macho#1618") {
        message.reply('Jona mmv chupalo');
        message.react('🤮').catch((e) => console.log(e));
    }
    //pppotter#9376
    
    if (message.content === 'hola jorgito') {
        if(message.member.user.tag === "pppotter#9376"){
            message.reply('Pepe mi ñaño, saludos chupalo');
        }else{
            message.reply('no jodas mmv chupalo');
            
        }
    }

    

      if (message.content.includes('jorgito numero primo')){

        var mensaje = message.content;
        var mensaje = mensaje.split(' ');
        var num = mensaje[3];
        var num = parseInt(num);

        function isPrime(num) {
            for(var i = 2; i < num; i++)
              if(num % i === 0) return false;
            return num > 1;
          }
          var mensaje ;
        if(isPrime(num)){
            mensaje = "es primo mmv"
        }else{
            mensaje = "no es primo mmv eres tonto o que?"
        }

        message.reply('El numero '+ num+ ' '+mensaje);
    }
//72d2b0e08c5279964fb9b54c715e0fd6
    if (message.content.includes('jorgito fibonacci')){

        var mensaje = message.content;
        var mensaje = mensaje.split(' ');
        var num = mensaje[2];
        var num = parseInt(num);

        function fibonacci(num){
            var a = 1, b = 0, temp;
          
            while (num >= 0){
              temp = a;
              a = a + b;
              b = temp;
              num--;
            }
          
            return b;
        }

        message.reply('La secuencia fibonacci es mmv: '+fibonacci(num));
    }

    if (message.content === 'jorgito pon una cancion') {
        if(message.member.user.tag === "pppotter#9376"){
            message.reply('Mi ñaño');
            message.reply('-play ppp kevin roldan');
        }else{
            message.reply('no jodas mmv chupalo');
            
        }
    }


    if (message.member.user.tag === "Groovy#7254") {
        message.reply('chupalo Groovy').catch((e) => console.log(e));
        message.react('🤮').catch((e) => console.log(e));


        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('gemido.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;

    }

    if (message.content === 'jorgito') {
        message.reply('Que pues mmv');
    }

    if (message.content.includes('Now playing')) {
        message.reply('Que pues cubito mmv');
    }//Now playing

    if (message.content.includes('-skip') || message.content.includes('-SKIP')) {
        message.reply('Que esquipeas mmv chupalo');
    }//Now playing

    if (message.content.includes('Queued')) {
        message.reply('Que pues cubito mmv');
    }//Now playing

    if (message.content.includes('-stop') || message.content.includes('-STOP')) {
        message.reply('cual stop mmv');
    }
    if (message.content.includes('-play') || message.content.includes('-PLAY')) {
        message.reply('Chupalo, esa cancion es mala');
    }

    if (message.content === 'jorgito estas muerto?') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('fallecio.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (message.content === 'jorgito navidad') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('navidad.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (message.content === 'jorgito gemido') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('gemido.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    //message.channel.send("Chupalo", {files: ["https://www.extra.ec/binrepository/768x1614/0c35/768d432/none/5419931/RWYG/image_content_28438088_20191122152230.jpg"]});

    if(message.content === 'jorgito y tu novia?'){
        message.channel.send("Chupalo", {files: ["https://media.metrolatam.com/2019/11/13/capturadepantall-646a87dedefce6ec690766c86c927d5b-1200x600.jpg"]});
    }

    if (message.content === 'jorgito chupalo') {//https://media.metrolatam.com/2019/11/13/capturadepantall-646a87dedefce6ec690766c86c927d5b-1200x600.jpg
        message.channel.send("Chupalo", {files: ["https://www.extra.ec/binrepository/768x1614/0c35/768d432/none/5419931/RWYG/image_content_28438088_20191122152230.jpg"]});
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('chupalo.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (message.content === 'jorgito te amo') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('teamo.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (message.content === 'jorgito quedate en casa') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('quedateencasa.mp3');
            dispatcher.on("end", end => {voiceChannel.leave()});
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (message.content === '-jorgito help' || message.content === '-jorgito') {
        message.reply('CHupalo, los comandos son: "quedate en casa", "te amo", "navidad", "gemido", "estas muerto?"');
    }

});

client.login('NzEyMTExNjU5NDE3NjAwMDYx.XsM0FA.9TrD0W9eFlWRZh2_yl2gAvTCcJQ');
//NzEyMTExNjU5NDE3NjAwMDYx.XsM0FA.9TrD0W9eFlWRZh2_yl2gAvTCcJQ miji
//NzExNzcxNTQ0NzkxMjg1ODkw.XsH3bQ.M5_kCn7imxMxI-5cQw6KuLqKz98 diego