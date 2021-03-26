// 1) Variables and Operators

/* a) Create two numeric variables and use the sum operator to save
the value of the sum of both numbers in a 3rd variable.*/

var num1 = 2;
var num2 = 5;
var sumnum = num1 + num2;
console.log('1) a) ' + sumnum);

/* b) Create two  String variables and concatenate them saving the result
in a 3rd variable. */

var str1 = 'Maria ';
var str2 = 'Sol';
var name = str1.concat(str2);
console.log('1) b) ' + name);

/* c) Create two String variables  and sum the length of each variable (number of letters in the string)
saving the result the sum of a 3rd variable (use length).*/

var str3 = 'firstword';
var str4 = 'secondword';
var letters = str3.length + str4.length;
console.log('1) c) ' + letters);

// 2) Strings

/* a) Create a string variable with at least 10 characters and convert everything
uppercase text (use toUpperCase).*/

var str5 = 'longstring';
console.log('2) a) ' + str5.toUpperCase());

/* b) Create a string variable with at least 10 characters and generate a new string with
the first 5 characters saving the result in a new variable (use substring).*/

var str6 = 'firstwords';
var first = str6.substring(0,5);
console.log('2) b) ' + first);

/* c) Create a string variable with at least 10 characters and generate a new string with the
last 3 characters saving the result in a new variable (use substring).*/
var str6 = 'myfirstapp';
var app = str6.substring(7);
console.log('2) c) ' + app);

/* d) Create a string variable with at least 10 characters and generate a new string with
the first letter in uppercase and the others in lowercase. Save the result in a new variable
(use substring, toUpperCase, toLowerCase, and the + operator).*/

var str7 = 'combinedletters';
var subcom1 = str7.substring(0,1);
var subcom2 = str7.substring(1);
var combined = subcom1.toUpperCase() + subcom2.toLowerCase();
console.log('2) d) ' + combined);

/* e) Create a string variable  with at least 10 characters and some blank space.
Find the position of the first whitespace and save it to a variable (use indexOf).*/

var myname ='Maria Sol Aranda';
var space = myname.indexOf(" ");
console.log('2) e) ' + space);

/* f) Create a string variable with at least 2 long words (10 characters and some space in between).
Use the methods of the previous exercises to generate a new string that has the first letter
of both uppercase words and the other lowercase letters (use indexOf, substring, toUpperCase,
toLowerCase and the + operator). */

var newsletter = 'entertainment newsletter';
var mayus1 = newsletter.substring(0,1);
var mayus2 = newsletter.substring(14,15);
var minus1 = newsletter.substring(1,13);
var minus2 = newsletter.substring(15);
var mynewsletter = mayus1.toUpperCase() + minus1.toLowerCase() + " " + mayus2.toUpperCase() + minus2.toLowerCase();
console.log('2) f) ' + mynewsletter);

// 3) Arrays

/* a) Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
display by console months 5 and 11 (use console.log) */

var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log('3) a) ' + arr[4],arr[10]);

/* b) Sort the months array alphabetically and display it by console (use sort).*/

var sortarr = arr.sort();
console.log('3) b) ' + sortarr);

/* c) Add an element to the beginning and end of the array (use unshift and push).*/

arr.unshift("initmonth");
arr.push ("finalmonth");
console.log('3) c) ' + arr);

/* d) Remove an element from the beginning and the end of the array (use shift and pop).*/

arr.shift();
arr.pop ();
console.log('3) d) ' + arr);

/* e) Reverse the order of the array (use reverse)*/

var reverse = arr.reverse();
console.log('3) e) ' + reverse);

/* f) Unite all the elements of the array in a single string where each month is separated by a hyphen
- (use join).*/

var stringarray = arr.join('-');
console.log('3) f) ' + stringarray);

/* g) Create a copy of the months array containing from May to November (use slice).*/

var arr2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var copyarr2 = arr2.slice(4,11);
console.log('3) g) ' + copyarr2);

// 4) If Else

/* a) Create a random number between 0 and 1 using the Math.random () function, if the value is greater than or equal to
0.5 show an alert with the message "Greater than 0.5" and otherwise an alert with the message "Lower than 0.5" */

var valor = Math.random();
if (valor>=0.5) {
    alert("Greater than 0.5")
} else {
    alert ("Lower than 0.5")
}

/* b) Create an "Age" variable that contains an integer between 0 and 100 and displays the following
alert messages: 
    "Baby" if the age is less than 2 years
    "Child" if the age is between 2 and 12 years
    "Teenager" if the age is between 13 and 19 years
    "Young" if the age is between 20 and 30 years
    "Adult" between 31 and 60 years
    “Older Adult” between 61 and 75 years old
    "Elderly" if older than 75 years */
    
var Age = 17;

if (Age<2) {
    alert("Baby")
} else {
    if (Age<13) {
        alert("Child")
    } else {
        if (Age<20) {
            alert ("Teenager")
        } else {
            if (Age<31) {
                alert("Young")
            } else {
                if (Age<61) {
                    alert("Adult")
                } else {
                    if (Age<76) {
                        alert("Older Adult")
                    } else {
                        alert("Elderly")
                    }

                }
            }
        }
    } 
}

// 5) For

/* a) Create an array containing 5 words and loop through the array using a for loop of
JavaScript to display an alert using each of the words. */

var arrnumber = ["one", "two", "three", "four", "five"]

for (var i = 0; i< arrnumber.length; i++) {
    alert(arrnumber[i]);
}

/* b) To the above array convert the first letter of each word to uppercase and display a
alert for every word modified. */

var mayusnum;
var minusnum;

for (var i = 0; i< arrnumber.length; i++) {
    mayusnum = arrnumber[i].substring(0,1);
    minusnum = arrnumber[i].substring (1);
    alert(mayusnum.toUpperCase() + minusnum);
}

/* c) Create a variable called "sentence" that has an empty string, then the array from point a)
go through it with a for loop to save each word inside the sentence variable.
At the end show a single alert with the complete chain.*/

var sentence = " ";

for (var i = 0; i< arrnumber.length; i++) {
    sentence= sentence + arrnumber[i];
}
alert(sentence);

/* d) Create an empty array and with a for loop of 10 repetitions fill the array with the number
of the repetition, that is to say that at the end of the execution of the for loop there should be 10 elements
within the array, from the number 0 to the number 9. Show through the browser console the
to the final array (use console.log). */

var empty = [];
empty.length = 10;

for (i=0;i<=9;i++) {
    empty[i] = i;
}
console.log('5) d) ' + empty);
