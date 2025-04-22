function numberOfVowel(word){
    const vowels = ['a','e','i','o','u']
    count = 0;
    for(x of word){
        if(vowels.includes(x)){
            count++;
        }
    }
    return count;
}
const value = numberOfVowel("Samikshya")
console.log("The number of vowel in the given word is: "+value)




const vowelNumbers = word =>{
    const vowels = ["a","e","i","o","u"]
    count = 0;
    for(letter of word){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}
let answer = vowelNumbers("Samikshya")
console.log("The number of vowel in the given word is: "+answer)
