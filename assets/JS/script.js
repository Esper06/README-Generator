const fs = require('fs') //fs is a Node standard library package for reading and writing files, we need this for writeFile to work

const inquirer = require('inquirer') //this is also for inquirer to work

inquirer.prompt([ //this prompts the user in node with a list of questions
    {
        type:'input',
        message:'What is your project title?',
        name:'title',
    },
    {
        type:'input',
        message:'Write a description',
        name:'description',
    },
    {
        type:'input',
        message:'Write an installation guide',
        name:'install',
    },
    {
        type:'input',
        message:'Write a usage guide',
        name:'usage',
    },
    {
        type:'input',
        message:'Enter your Email address',
        name:'questionEmail',
    },
    {
        type:'input',
        message:'Enter your Github name',
        name:'questionGithub',
    },
    {
        type:'list',
        message:'Pick a license',
        name:'license',
        choices:['MIT', 'Apache', 'GNU GPLv3', 'Unlicense'],
    },
    
]).then((data) => {    //we then take the answers to these prompts and apply them to a long string variable
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md` //This is for the name of the file, we take the project title they inputted earlier, set it to lowercase, remove any spaces and then add the .md file type
    

    console.log(data.license)


    //this is the content of the README that is being made. Certain parts are to be filled in with the users responses to the above questions
    const content = 
    
`# ${data.title}

## List of Contents

1) Description
2) Installation
3) Usage
4) Quesions?
5) How To Contribute
5) License

## Description
    
${data.description}
    
## Installation
    
${data.install}
    
## Usage 
    
${data.usage}
    
## Questions?
    
If you have any questions please contact me here:

Email: ${data.questionEmail}
Github: ${data.questionGithub}

## Contributions
    
If you wish to contribute, please follow these guidelines: 
https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt

## License
    
${data.license}`;

    fs.writeFile(fileName, content, (error, data) =>  //this creates the file, gives it the name in the fileName variable, and fills it with the contents of the content variable
    error ? console.error(error) : console.log(data))  //then any errors that appear get caught by console.error, if there are no errors it logs the data instead

});