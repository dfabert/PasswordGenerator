document.getElementById("button").addEventListener("click", function userOptions(){
        var passLength = prompt("How many characters do you want in your password?  You can pick between 8 and 128");
            if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
                alert("You did not pick a number between 8 and 128.  You will be returned to the beginning.");
                return;
            }else
        var passCase = confirm("Would you like uppercase included? (Press 'ok' for yes and 'cancel' for no)");
        var passNum = confirm("Would you like numbers included? (Press 'ok' for yes and 'cancel' for no)");
        var passSpecial = confirm("Would you like special characters included? (Press 'ok' for yes and 'cancel' for no)");

        var confirmMessage = ['lowercase letters'];
            if(passCase || passNum || passSpecial){
                if(passCase){
                    confirmMessage.push('uppercase letters');
                }
                if(passNum){
                    confirmMessage.push('numbers');
                }
                if(passSpecial){
                    confirmMessage.push('special characters');
                }
                if(confirmMessage.length == 2){
                    var lastPart = confirmMessage[confirmMessage.length-1]   //These three lines are to get the "and" in the right spot
                    confirmMessage.push(lastPart)
                    confirmMessage[confirmMessage.length-2]='and '
                    confirmMessage = confirmMessage.join(' ');   
                }
                if(confirmMessage.length == 3){
                    var lastPart = confirmMessage[confirmMessage.length-1]   //These three lines are to get the "and" in the right spot
                    confirmMessage.push(lastPart)
                    confirmMessage[confirmMessage.length-2]='and '
                    confirmMessage.splice(1,0, ", ");
                    confirmMessage.splice(3,0, ", ");
                    confirmMessage = confirmMessage.join('');
                }
                if(confirmMessage.length == 4){
                    var lastPart = confirmMessage[confirmMessage.length-1]   //These three lines are to get the "and" in the right spot
                    confirmMessage.push(lastPart)
                    confirmMessage[confirmMessage.length-2]='and '
                    confirmMessage.splice(1,0, ", ");
                    confirmMessage.splice(3,0, ", ");
                    confirmMessage.splice(5,0, ", ");
                    confirmMessage = confirmMessage.join('');
                }
            }else confirmMessage = 'only lowercase letters'

        var correct = confirm("You selected " + passLength + " characters to be made up of " + confirmMessage + ".  Press 'ok' to generate password or 'cancel' for to return to the beginning of the options");
        
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
                if (passNum)
                    charSet = charSet.concat(numberChars);
                if (passSpecial)
                    charSet = charSet.concat(specialChars);
            }

            function generatePassword() {
                charSet = charSet.split('');

                //create first letter of password
                var randomChar = charSet[Math.floor(Math.random()*charSet.length)];
                var password = randomChar;

                //create other letters of password
                for (var i = 1; i < passLength; i++){
                var randomChar = charSet[Math.floor(Math.random()*charSet.length)];
                console.log(randomChar);
                var password = password.concat(randomChar);
                }
                document.getElementById("passwordHead").innerHTML = 'Your secure password is:';
                document.getElementById("password").innerHTML = password;
                alert('Your password is:  ' + password);
                
            }
        }
        else
            userOptions();
        generateCharset();
        generatePassword();
    }
)