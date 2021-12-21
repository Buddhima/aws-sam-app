


exports.handler = async (event) => {

    // TODO: Application logic goes here

    event.chat = {
      "message" : 'test message',
      "channel_name" : 'test_channel'
    }
    
    //Pass the selected slack details to the next lambda function
    return event;
};
