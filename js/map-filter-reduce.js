$(document).ready(function () {
    // Users Array containing Codeup Instructors
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    /*
       1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
       2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
       3. Use .map to create an array of strings where each element is a user's email address
       4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
       5. Use .reduce to get the longest email from the list of users.
       6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
     */

    // 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
            // DONE - easy!!

    // 2. TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    let skilledProfs = users.filter(user => user.languages.length >= 3);
    console.log(skilledProfs);

    // 3. TODO: Use .map to create an array of strings where each element is a user's email address
    let emailAddies = users.map(user => user.email);
    console.log(emailAddies);

    // 4. TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    let totalExpYears = users.reduce((total, user) => total + user.yearsOfExperience ,0);
    console.log("Average years of experience: ");
    console.log((totalExpYears/users.length) + ' years');

    // 5. TODO: Use .reduce to get the longest email from the list of users.
    // let longestEmail = users.reduce(function(currentLongest, user) {
    //     if(user.email.length > currentLongest.length) {
    //         return user.email;
    //     } else {
    //         return currentLongest;
    //     }
    // },'@');

    let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest,'j');
    console.log(longestEmail);

    // 6. TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    // Using ES6
    let namesES6 = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name,'');
    console.log("Your instructors are: " + namesES6 + '.');


    // using function format, not ES6
    let names = users.reduce(function(sentence, user) {
        if(sentence === '') {
            // this means we're on our first run through
            return user.name; // this means user.name is being returned to 'sentence'
        } else {
            // we're on our 2nd through last run through
            return sentence + ', ' + user.name; // i.e. 2nd run through 'ryan' + ', ' + 'zach'
                                                    // 3rd run through 'ryan , zach' + ', ' + 'luis'
        }
    },'');
    console.log("Your instructors are: " + names + '.');


    // BONUS
    // Use .reduce to get the unique list of languages from the list of users.
    let langList = users.reduce(function(languages, user) {
        user.languages.forEach(function (language) {
            if(!languages.includes(language)){
                languages.push(language);
            }
        });
        languages.sort();
        return languages;
    }, []);
    console.log(langList);

    // Even more concise:
    // first, map user.languages
    // [
    //     ['html', 'css', 'javascript'],
    //     ['html', 'java', 'php'],
    // ]

    let langListES6 = users.map(user => user.languages).reduce((bigList, language) => bigList.includes(language) ? languages : languages.push(language),[]);

        // .map(language => languages.includes(language) ? languages : );


        languages.sort();
        return languages;
    }, []);
    console.log(langListES6);
});