
(function() { // IIFE starts

    $.bind('command', function(event) {
        var command = event.getCommand();
        var sender = event.getSender();
        var arguments = event.getArguments();
        var args = event.getArgs();

        // command !helloworld
        if (command.equalsIgnoreCase('helloworld')) {
            var message = command + ", " + sender + ", " + arguments + ", " + args;

            // send messages to Twitch chat
            $.say(message);

            // print messages in the bot's console
            $.consoleLn("testing helloworld succesfully");
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./biubot/hello_world.js', // script location
                              'helloworld', // command
                              7); // permission
    });

})(); // IIFE ends
