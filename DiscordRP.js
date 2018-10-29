const RPC = require('discord-rich-presence')('409416236519260171');

RPC.updatePresence({
    state: ':D',
    details: 'integration for RazerChroma',
    largeImageKey: 'discordchroma',
    largeImageDetails: "Discord With Razor",
    instance: true,
});

RPC.on('error', function(error){
    console.log(error);
});