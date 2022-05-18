let string = 'arara';

function reverseString(string) {
     let splitString = string.split('');
     
     let reverseArray = splitString.reverse('');

     let joinArray = reverseArray.join('');

     if (joinArray === string) {
         return true;
     } else {
         return false;
     }
     }
console.log(reverseString(string));