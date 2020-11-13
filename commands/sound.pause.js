const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core-discord"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

module.exports.run = async (client, message, args) => {
  config = client.config;  
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")

    const serverQueue = client.queue.get(message.guild.id)
    if (!serverQueue) return message.channel.send("`❌` I am not currently playing music.")

    const { channel } = message.member.voice;
    if (serverQueue && channel !== message.guild.me.voice.channel) return message.channel.send(` \`❌\` You must be in the same voice channel as the bot to use this command!`).catch(console.error);
  serverQueue.playing = false
    serverQueue.connection.dispatcher.pause()
    return message.channel.send("`⏸`Music Paused!")
} 



module.exports.config = {
  name: "pause",
  aliases: [],
  use: "pause",
  description: "Pause the music currently playing.",
  state : "gamma",
  page: 5
};



