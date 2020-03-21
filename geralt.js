
(function() { // IIFE starts

    $.bind('command', function(event) {
        var command = event.getCommand();
        var sender = event.getSender();
        var arguments = event.getArguments();
        var args = event.getArgs();

        var quoteList = [
            "Medallion's humming, a place of power gotta be. Should draw from it.",
            "Wanna hear a limerick? Lambert, Lambert, what a prick.",
            "How do you like that silver?",
            "Looks like rain.",
            "I hate portals.",
            "How about a round of Gwent?",
            "Wind's howling."
            ];

        // command !geralt
        if (command.equalsIgnoreCase('geralt')) {
            // Math.random(): inclusive of 0, but not 1
            var selectedIdx = Math.floor(Math.random() * quoteList.length);

            var message = quoteList[selectedIdx];

            // send messages to Twitch chat
            $.say(message);
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./biubot/geralt.js', // script location
                              'geralt', // command
                              7); // permission
    });

})(); // IIFE ends
