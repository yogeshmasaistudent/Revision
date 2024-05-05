// let user = {
//   firstName: "Vivek",
//   lastName: "Agarwal",
//   age: 38,
//   posts: [
//     { title: "Post 1", comments: 10 },
//     { title: "Post 2", comments: 11 },
//   ],
// };

// // const {firstName:firstName,lastName:lastName} = user;
// // console.log(firstName)
// // console.log(lastName)


// // const {posts:[{title:P1,comments:c1},{title:P2,comments:c2}]} = user;

// const {age:Age} = user;
// console.log(Age);
// const {firstName:FName} = user;
// console.log(FName)

// const {lastName:LName} = user;
// console.log(LName);


const user = {
  id: 339,
  name: "John",
  age: 42,
  subjects: ["HTML", "CSS", "Javascript"],
  education: {
    degree: {
      name: "BCA",
    },
  },
};


// const {name:Name,subjects:[first,second,third]} = user;
// console.log(Name);
// console.log(first);
// console.log(second);
// console.log(third)

// const {education:{degree:degree}} = user;
// console.log(degree.name);


const {education:{degree:degree}} = user;
// console.log(education); 
console.log(degree)