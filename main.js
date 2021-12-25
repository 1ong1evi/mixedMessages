//array of 10 fortunes
const fortune1 = ['be on the alert to recognize your prime ', 'happiness is not an outside job, ', 'your road to glory will be rocky', 'no holidays ', 
                  'he who dies with most toys ', 'you will be hungry again in one hour ', 'you do not need strength ', 'the real kindness comes from within you ', 
                  'courage is not simply one of the virtues ', 'the older you get, the better you were '];
//array of 10 fortunes
const fortune2 = ['but the form of every virtue at the testing point ', 'big journeys begin ', 'if you want the rainbow, ', 
                  'but the second mouse gets the cheese ', 'easiest way to find lost object ', 'age is high price ', 'abort, retry, ignore ', 
                  'only outlaws have in-laws ', 'fat person not afraid of heights...afraid of widths ', 'practice safe eating Always use condiments '];
//array of 10 fortunes
const fortune3 = ['makes you think that he is dumb ', 'be not afraid of growing slowly, ', 'cup is in its emptiness ', 'just do not stare ', 
                  'he who laughs last ', 'One tequila, two tequila, three tequila, floor ', 'food poisoning no fun ', 'only difference between rut and a grave is depth ', 
                  'get out of the way ', 'big journeys begin with a single step ']; 
//returns a random fortune of three different fortunes
    const run = () => {
        //displays an index based on the random number generated from the Math library
        return fortune1[Math.floor(Math.random() * 10)] + fortune2[Math.floor(Math.random() * 10)] + fortune3[Math.floor(Math.random() * 10)]; 
    }

console.log(run());
