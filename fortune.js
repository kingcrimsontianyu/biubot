
(function() { // IIFE starts

    $.bind('command', function(event) {
        var command = event.getCommand();
        var sender = event.getSender();
        var arguments = event.getArguments();
        var args = event.getArgs();

        var fortuneList = [
            "You are not illiterate.",
            "Confucius say it is easy to hate and difficult to love. Frankie say relax.",
            "Thank you Lo Wang! But your fortune is in another cookie!",
            "What's a seven-letter word for 'cryptic'?",
            "Live each day like it's your last. Or at least today, because... Oh I don't want to spoil it.",
            "Light travels faster than sound. That's why some people look brilliant, until you hear them speak.",
            "Whoever coined the phrase 'quiet as a mouse' never stepped on one.",
            "Help! I am being held prisoner in a video game factory.",
            "Don't sweat the petty things and don't pet the sweaty things. - George Carlin",
            "You're never too old to learn something stupid.",
            "All men eat, but Fu Man Chu.",
            "Some mistakes are too fun to make only once.",
            "With sufficient thrust, pigs fly just fine.",
            "He who takes advice from a cookie is sure to crumble.",
            "You will stop procrastinating. Later.",
            "Cardboard belt is a waist of paper.",
            "The difference between an oral thermometer and a rectal thermometer is all a matter of taste.",
            "You don't need a parachute to skydive. You need a parachute to skydive twice.",
            "Laugh and the world laughs with you. Cry and the world laughs at you.",
            "That's what ki said.",
            "The good news: you're not paranoid. The bad news: everyone is actually trying to kill you.",
            "The early bird gets the worm. The second mouse gets cheese.",
            "Small cookies bring great joy.",
            "Time is an illusion. Lunchtime doubly so.",
            "To be is to do. - Socrates.\nTo do is to be. - Sarte.\nDo be do be do. - Sinatra.",
            "It is better to have loved and lost than to have had loved and gotten syphilis.",
            "Cookie monster wasn't here.",
            "Chew, or chew not. There is no pie.",
            "To maintain perfect accuracy, shoot first and call whatever you hit the target.",
            "Information is not knowledge. Knowledge is not wisdom. Wisdom is not truth. Truth is not beauty. Beauty is not love. Love is not music. Music is the best. - FZ",
            "Man who stand on toilet, high on pot.",
            "It is better to have loved and lost than to have loved and got syphilis."
            ];

        // command !fortune
        if (command.equalsIgnoreCase('fortune')) {
            // Math.random(): inclusive of 0, but not 1
            var selectedIdx = Math.floor(Math.random() * fortuneList.length);

            var message = fortuneList[selectedIdx];

            // send messages to Twitch chat
            $.say(message);
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./biubot/fortune.js', // script location
                              'fortune', // command
                              7); // permission
    });

})(); // IIFE ends
