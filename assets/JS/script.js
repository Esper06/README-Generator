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
        type:'input',
        message:'Enter your full name',
        name:'fullName',
    },
    {
        type:'input',
        message:'Enter the current year',
        name:'year',
    },
    {
        type:'list',
        message:'Pick a license',
        name:'license',
        choices:['MIT', 'Apache', 'GNU GPLv3', 'Unlicense'],
    },
    
]).then((data) => {    //we then take the answers to these prompts and apply them to a long string variable
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md` //This is for the name of the file, we take the project title they inputted earlier, set it to lowercase, remove any spaces and then add the .md file type
    
    var selectedLicense //we make a variable for later use in the switch statement
    switch(data.license) { //depending on what license the user chooses it will assign a string containing that license to the variable selectedLicense
        case 'MIT':
            selectedLicense = `MIT License ${data.year} ${data.fullName}

Copyright (c) 
            
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
            
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
            break;
        case 'Apache':
            selectedLicense = `Copyright ${data.year} ${data.fullName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
         
http://www.apache.org/licenses/LICENSE-2.0
         
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
            break;
        case 'GNU GPLv3':
            selectedLicense = `Copyright (C) ${data.year}  ${data.fullName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.
        
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
        
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`
            break;
        case 'Unlicense':
            selectedLicense = `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
            
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
            
For more information, please refer to <https://unlicense.org>`
    }


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
    
${selectedLicense}`;

    fs.writeFile(fileName, content, (error, data) =>  //this creates the file, gives it the name in the fileName variable, and fills it with the contents of the content variable
    error ? console.error(error) : console.log(data))  //then any errors that appear get caught by console.error, if there are no errors it logs the data instead

});