#! /usr/bin/env node
//this is shabang

// import the 'inquirer' module , which is a command line interface for node.js

import inquirer from "inquirer"

import chalk from "chalk"

// Declare a constant 'answer' and assign it to the result of inquirerr.prompt function

const answers : {
    Sentence : string
     
} = await inquirer.prompt (
    [
        {
          name : "Sentence",
          type : "input",
          message : "Enter your sentence to count the word:"
        }
    ]
)
 // .trim() => (remove white space)  // .split() => (startIdx,deleteIdx,newElement) sequence provide
const words = answers.Sentence.trim().split(" "); 

//print the array of word to the console.
console.log (chalk.bgMagenta(words));

//print the word count of the sentence to the console.
console.log((`Your sentence words count is ${words.length}`));