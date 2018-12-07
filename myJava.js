/*  HOME Project 1  */
function TemperatureBug()
{
    var summer =  summer = document.getElementById('weather').src=" ";
    var temperature = Number(document.homeproject1.temp.value);

    if (temperature == 451)
    {
        summer = document.getElementById('weather').src="img/bookburn.jpg";

        return "It's Book Burning Season!";
    }
    else if (temperature >= 9941)
    {
        summer = document.getElementById('weather').src="img/sun.jpg";

        return "You're actually not on Earth anymore dude.";
    }

    else if (temperature >= 130)
    {
        summer = document.getElementById('weather').src="img/egg.jpg";

        return "It's sidewalk breakfast season!";
    }

    else if (temperature >=68)
    {
        summer = document.getElementById('weather').src="img/summertime.png";

        return "It's Summertime lovin'!";

    }

    else if (temperature >=50)
    {
        summer = document.getElementById('weather').src="img/spring.jpg";

        return "It's Springtime and clear skies!";

    }

    else if (temperature >=34)
    {
        summer = document.getElementById('weather').src="img/fall.jpg";

        return "It's Autumn!";

    }

    else if (temperature <34)
    {
        summer = document.getElementById('weather').src="img/shining.jpg";

        return "It's Winter!";

    }

}
/*  HOME Project 2  */
function CalorieCounter() {
    var activity = document.getElementById('activities').value;
    var length = Number(document.homeproject2.time.value);
    var totalCalories = 0;

    if (activity == "walk")
    {
        totalCalories = length * 5;
        return "You've burned " + totalCalories + " calories";
    }
    else if (activity == "jog")
    {
        totalCalories = length * 10;
        return "You've burned " + totalCalories + " calories";
    }
    else if (activity == "run")
    {
        totalCalories = length * 13;
        return "You've burned " + totalCalories + " calories";
    }
}
/* HOME Project 3 */
function assignGrade()
{
    var score = Number(document.homeproject3.grade.value);

    if (score >= 90)
    {
        return "A";
    }
    else if (score >= 80)
    {
        return "B";
    }
    else if (score >= 70)
    {
        return "C";
    }
    else if (score >= 60)
    {
        return "D";
    }
    else if (score < 60)
    {
        return "F";
    }
}
function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of 'base'
    //num = Number(document.toBinary.input.value); //number to convert
    //base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't equal to zero
    {
        num/base;
        smallNum = num%base + smallNum; //3%5 = 2 .... % returns remainder
        //setup num for the next iteration of the loop
        num = Math.floor(num/base);
    }

    return smallNum;

}
function smallToTen(num, base) //convert a small-base number to base-10
{
    num = Number(document.toTen.input.value); //13
    base = 2; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, then counts the number of characters in the string


    while(numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1... 01/10 = 0... 1/1 = 1...
        if (currentDigit >= base)
        {
            alert("WOAH WOAH WOAH YOU CAN'T DO THAT AROUND HERE BUDDY!");
            return " ";
        }
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        //currentDigit*2^3 ... currentDigit*2^2 ... currentDigit*2^1 etc.
        num = num%denominator; //reduces num for next iteration
        // 1001 -> 101 -> -1 -> 1 -> 0
        numLength--; //decrease the numLength value by 1... eventually it will hit zero
    }
    return tenNum;
}
function baseConverter()
{
num = Number(document.baseConvert.number.value);
base1 = Number(document.baseConvert.bochka1.value);
base2 = Number(document.baseConvert.bochka2.value);
tenNum = 0;
numLength = num.toString().length;


    while(numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num / denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1... 01/10 = 0... 1/1 = 1...
        if (currentDigit >= base1) {
            alert("WOAH WOAH WOAH YOU CAN'T DO THAT AROUND HERE BUDDY!");
            return " ";
        }
        tenNum = tenNum + currentDigit * Math.pow(base1, numLength - 1);
        //currentDigit*2^3 ... currentDigit*2^2 ... currentDigit*2^1 etc.
        num = num % denominator; //reduces num for next iteration
        // 1001 -> 101 -> -1 -> 1 -> 0
        numLength--; //decrease the numLength value by 1... eventually it will hit zero
    }

    return tenToSmall(tenNum, base2);
}
function calculate(expression)
{
    //'expression' is a STRING of everything in your calculatorWindow
    //We need to EXTRACT the first number from the 'expression'
    // expression = 1+2
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1); //capture the '+'
    var secondNum = Number(expression.substr(2,1));
    var numLength = expression.length;
    var numLength2 = expression.length;

    if (numLength2 > 3)
    {
        x = 0;
        var testNum = Number(expression.substr(x,1));

        while(testNum % 1 === 0)
        {
            x = x + 1;
            testNum = Number(expression.substr(x,1));
        }
        firstNum = Number(expression.substr(0, x));
        operator = expression.substr(x,1);
        secondNum = Number(expression.substr((x+1), numLength-(x+1)));
    }

    if (operator === '+')//that means I add firstNum & secondNum)
    {
        return addNums(firstNum, secondNum);//returns the result of calling 'addNums'
    }

    else if (operator == '-')
    {
        return subtractNums(firstNum, secondNum);
    }

    else if (operator == '*')
    {
        return multiplyNums(firstNum, secondNum);
    }

    else if (operator == '/')
    {
        return divideNums(firstNum, secondNum);
    }

    else if (operator == '^')
    {
        return powerNums(firstNum, secondNum);
    }

    else if (operator == '√')
    {
        return rootNums(firstNum, secondNum);
    }
}
function addNums(p1, p2)
{
    return p1+p2;
}
function subtractNums(p1, p2)
{
    return p1-p2;
}
function multiplyNums(p1, p2)
{
    return p1*p2;
}
function divideNums(p1, p2)
{
    return p1/p2;
}
function powerNums(p1, p2)
{
    return p1**p2;
}
function deleteChar(expression)
{
    var expressLength = expression.length;
    var expressDel = expression.substr(0,(expressLength-1));

    return expressDel;
}


function madLib()
{
    var words=[];

    words.push(document.madLivs.text1.value);
    words.push(document.madLivs.text2.value);
    words.push(document.madLivs.text3.value);
    words.push(document.madLivs.text4.value);
    words.push(document.madLivs.text5.value);
    var strLength = document.madLivs.text6.toString().length;
    words.push(document.madLivs.text6.value.toString().charAt(0).toUpperCase() + document.madLivs.text6.value.toString().substr(1, strLength));
    words.push(document.madLivs.text7.value);
    words.push(document.madLivs.text8.value);
    words.push(document.madLivs.text9.value);
    words.push(document.madLivs.text10.value);
    words.push(document.madLivs.text11.value);


  return "There once was a farmer known as Ol' " + words[0].bold() + " head who spent his weary days tending to his " + words[1].bold() +  " pasture. One day, while Ol' " + words[0].bold() + " head was herding his "
      + words[2].bold() + "s, a " + words[3].bold() + " UFO crash landed a mere " + words[4].bold() + " feet away from him. " + words[5].bold() + ", Ol' " + words[0].bold() + " head decided to investigate the seemingly " + words[6].bold() + " object. To his surprise, when he moved closer, " +
      "he found that the UFO contained a " +  words[7].bold() + "! Ol' " + words[0].bold() + " head was filled with " +  words[8].bold() + " after learning this, but didn't know what to do. " +
      "After a few " + words[9].bold() + " , Ol' " + words[0].bold() + " head decided to hide this treasure from the world, and hid the " + words[7].bold() + " at " + words[10].bold() + ". To this day, the " + words[7].bold() + " was never discovered," +
      " but some say that if you travel to  "+ words[10].bold() + ", you may find this treasure yourself!";
}

function checkAnswers()
{
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score=0;


    //check answer one
    //first collect the answer using an input box..
    var q1answer = Number(document.quiz.a1.value);
    var q2answer = document.quiz.a2.value.toLowerCase();

    //Question 1
    if (q1answer === 151)
    {
        //increase score by 1
        score = score + 1;
        //or score++
        //push feedback to the array...
        feedback.push("Correctamundo!");
    }
    else
    {
        feedback.push("Sorry bud, you're " + Math.abs(151- q1answer) + " Off");
    }

    //Question 2
    if (q2answer === 'flapjack')
    {
        //increase score by 1
        score = score + 1;
        //or score++
        //push feedback to the array...
        feedback.push(" Aye Matey!");
    }
    else
    {
        feedback.push(" Ye be wrong 'bout that one lad");
    }

    //Question 3
    if (document.quiz.a3.value === 'KDot')
    {
        //increase the score
        score++;
        //push some feedback
        feedback.push(" DAMN. That's correct!");
    }
    else if (document.quiz.a3.value === 'Pump')
    {
        feedback.push(" U srs rn bro? If you listen to Pump, reevaluate everything");
    }
    else if (document.quiz.a3.value === 'Logic')
    {
        feedback.push(" WRONG! Bobby Tarentino was pretty good, but not top tier");
    }
    else if (document.quiz.a3.value === 'Drake')
    {
        feedback.push(" Drake? That dude is basically a pop artist");
    }
    else
    {
        feedback.push(" Choose something AT LEAST -_- ");
    }

    //Question 4
    if (document.quiz.a4.value === 'Waluigi')
    {
        //increase the score
        score++;
        //push some feedback
        feedback.push(" WAH WAAAH, that's correct!");
    }
    else if (document.quiz.a4.value === 'Mario')
    {
        feedback.push(" Mario is the first character in this game lol");
    }
    else if (document.quiz.a4.value === 'Luigi')
    {
        feedback.push(" You can't have Mario without Luigi, so false");
    }
    else if (document.quiz.a4.value === 'Wario')
    {
        feedback.push(" Close, but not correct");
    }
    else
    {
        feedback.push(" Please choose something");
    }

    //Question 5
    if (document.quiz.a5A.checked === true && document.quiz.a5B.checked === false && document.quiz.a5C.checked === true && document.quiz.a5D.checked === true && document.quiz.a5E.checked === false )
    {
        //if the 3 conditions above are met... a3A, a3C AND A3D are all true/checked... answer is correct.
        score++;
        feedback.push(" Correct! Good job you movie connoisseur");

    }
    else{
        feedback.push(" Nope, neither Spiderman nor The Great Gatsby made over $1b");
    }





    //Question 6
    if (document.quiz.a6A.checked === false && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6E.checked === true)
    {
        if (document.quiz.a6D.checked === true)
        {
            feedback.push(" The Yankees aren't even a Football team")
        }

        else if (document.quiz.a6D.checked === false) {
            //if the 3 conditions above are met... a3A, a3C AND A3D are all true/checked... answer is correct.
            score++;
            feedback.push(" Looks like SOMEBODY likes football.");
        }
    }
    else{
        feedback.push(" False, the winners were the Saints and the Giants");
    }







    //check our work
    alert(feedback);
    return " " + score + "\n" + " Question Responses: 1. " + feedback[0] + " " + "\n" + "2. " + feedback[1] + " " + "\n" + "3. " + feedback[2] + " " + "\n" + "4. " + feedback[3] + " " + "\n" + "5. " + feedback[4] + " " + "\n" + "6. " + feedback[5];
}
