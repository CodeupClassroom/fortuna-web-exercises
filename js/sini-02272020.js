"use strict";

// convert to object - string with first/last separated by space, return an object with properties firstName / lastName

function nameObject( nameBlob ) {

    // 1. separate the individual people by the ',' separator  ---- peopleArray
    // 2. separate the names themselves, by the ' ' separator  ---- personArray

    var peopleArray = nameBlob.split(",");  // <-- [person1(string), person2(string), etc]
                                            //        [   0       ,       1,         2 ]
    console.log(peopleArray);
       // ["Casey Friday","Sini Tesic","David Stephens","Vivian Canales" ]

   var bucket = [];
   peopleArray.forEach( function(person) {
      // 'Casey Friday' string
       // person is the current array element being analyzed
            // person.split(' ') = ['Casey', 'Friday']
       var first = person.split(" ")[0]; // 'Casey'
       var last = person.split(" ")[1]; // 'Friday'
       var personObj = {
           firstName: first,
           lastName: last
       };
       bucket.push(personObj);
   });



    return bucket;
}

console.log(nameObject("Casey Friday|34,Sini Tesic|29,David Stephens|31,Vivian Canales|25"));