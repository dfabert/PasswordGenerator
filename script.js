function userOptions(){
    var passLength = prompt("How many characters do you want in your password?  You can pick between 8 and 128");
        if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("You did not pick a number between 8 and 128.  Please refresh and start over");
        userOptions();
    }
    var passCase = confirm("Would you like uppercase included? (Press 'ok' for yes and 'cancel' for no)");
    var passNum = confirm("Would you like numbers included? (Press 'ok' for yes and 'cancel' for no)");
    var passSpecial = confirm("Would you like special characters included? (Press 'ok' for yes and 'cancel' for no)");
    var correct = confirm('You selected ' + passLength + " characters. Press 'ok' for yes and 'cancel' for to return to the beginning of the options" );
    
    if(correct){
        //If statements that add to characters variable 
        var charSet = "abcdefghijklmnopqrstuvwxyz";
        var UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numberChars = "0123456789";
        var specialChars = "!@#$%^&*`~._-+=";
        var password = '';

        function generateCharset() {
            if (passCase)
                charSet = charSet.concat(UpperCaseChars);
                console.log(charSet);
            if (passNum)
                charSet = charSet.concat(numberChars);
                console.log(charSet);
            if (passSpecial)
                charSet = charSet.concat(specialChars);
                console.log(charSet);
        }


        function generatePassword() {
            console.log(charSet);
            charSet = charSet.split('');

            //create first letter of password
            var randomChar = charSet[Math.floor(Math.random()*charSet.length)];
            var password = randomChar;

            //create other letters of password
            for (var i = 0; i < passLength; i++){
            var randomChar = charSet[Math.floor(Math.random()*charSet.length)];
            console.log(randomChar);
            var password = password.concat(randomChar);
            }

            console.log(password)
            alert('Your password is:  ' + password);
        }
    }
    else
        userOptions();;
generateCharset();
generatePassword();
}




userOptions();

//Place password on page