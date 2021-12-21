const https = require('https');


exports.handler = async (event) => {
    let message = event.chat.message
    let channel_name = event.chat.channel_name
    
    let send_msg = await send_message(channel_name, message);


    return event
};


async function send_message(channel_name, message){

  // TODO: Implement the logic here

}