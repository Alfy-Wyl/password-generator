# password-generator
An App to Generate Random Password


## Description

In an era where creating sign ups, signing in to platforms or encrypting data files with password has become a routine,
programming a code base in JavaScript that is capable of generating secure passwords and copying them to clipboard that can be stored and used over time is essential.

An array of special characters, numerical characters, lower cased characters and decline upper cased characters were created.
A function to handle password options from user was created. Inside this included While Loop and If Statements and Variables to guide users to input and select values that meets the criteria for generating a password with this application. 

Other functions to get a random character from the set of arrays, to generate password based on user preferences, to write generated password in the placeholder and to copy password to clipboard were created.

JavaScript concepts including Functions, Arrays, If Statements, While Loop, Events, Async and Await were utilized during this project. Some JavaScript inbuilt functions and methods such as parseInt, Math.floor, Math.random  were also utilized in this project.



## Installation

N/A



## Usage

To generate a password, click on the "Generate Password" button and follow the prompts.
    * Enter length of password between 10-65:
        User must enter any number within the specified range in order to proceed to the next prompts.
        If user enters a value not numerical, an error prompt "Input must be a number" is displayed.
        Error will be displayed until user inputs a numerical value in order to proceed.
   
    * Next step involves user selecting password preference which includes; 
        Click OK to confirm or Cancel to decline special characters.
        Click OK to confirm or Cancel to decline numeric characters.
        Click OK to confirm or Cancel to decline lower cased characters.
        Click OK to confirm or Cancel to decline upper cased characters.

        If user click "Cancel" for all the prompts, an error "Must select at least one character type" is displayed.
        User will start the process again when this above error is displayed.
        
A final password is generated based on users preferences and displayed in the text area labelled as "Your secure password"

The "Copy" button feature enables user to copy the password generated to the clipboard.
To confirm when password has been copied after the "Copy" button is clicked, an alert "Password Copied Successfully" is displayed.
User can paste the copied password into any text-enabled space to store it.  


    

## License

MIT



## Link



## Screenshot