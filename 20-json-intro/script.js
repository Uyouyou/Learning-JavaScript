const post = {
    id: 1,
    title: "one",
    body: "sing",
};

//convert to json string
const str = JSON.stringify(post);

console.log(str);

//convert json to object
const obj = JSON.parse(str);

console.log(obj);
//you send a json data to a server
//local storage stores only string in the client browser

const posts = [
    {
        id: 1,
        title: "one",
        body: "sing",
    },
    {
        id: 2,
        title: "two",
        body: "sing",
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);
