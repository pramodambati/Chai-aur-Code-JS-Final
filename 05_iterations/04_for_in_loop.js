const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Does for in loop can be used for arrays ??

const programming = ["js", "rb", "py", "cpp"]

for (const key in programming) {
    // console.log(key); // We are getting index values  
    // console.log(programming[key]);
}


//  for in cannot be used for map

const map1 = new Map()
map1.set('IN', 'India')
map1.set('UK', 'United Kingdom')

for (const key in map1) {
    console.log(key);
}

