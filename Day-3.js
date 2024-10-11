// ''
// // merging

// let arr = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];


// let mergedArray = [...arr, ...arr2]
// // console.log("new merged array", mergedArray)  //



// // let obj1 = {
// //     a: 1,
// //     b: 2,
// //     c: 3
// // }


// // let obj2 = {
// //     c: 3,
// //     d: 4,
// //     e: 5
// // }


// // console.log(obj2) //

// // let mergedobj = { ...obj1, ...obj2 }
// // console.log(mergedobj)



// // let AddEd = [1, 2, 3, 4, 5, 6]

// // function Add(a, b, c, d, e, f) {

// //     return (a + b + c + d + e + f)
// // }


// // let x = Add(...AddEd);
// // console.log("the sum is", x)



// // hoisting

// // destructrcting


// // let people = {
// //     godname: "ram",
// //     age: 21,
// //     city: "Ayodhya",
// //     hobbies: ["Archary", "Reading vedas"]
// // }


// // let { godname, age, city, hobbies } = people  // destructuring

// // console.log(godname)
// // console.log(age)
// // console.log(city)


// // let citys = people.city
// // console.log(citys)

// // console.log("hobbis", people.hobbies[1])

// // console.log(people.hobbies)






// // let arr3 = arr.concat(arr2)
// // inbuilt function

// // console.log(arr3);

// // spread operator


// // let arr4 = [1, 2, 3, 4];

// // console.log(...arr4)  // spread operator;.. used in converting arr into num.



// // let newArr = [...arr4]

// // console.log("copied array", newArr)


// // 


// // map function map & forEach  // higher order function



// // let mapArray = [1, 2, 3, 4, 5]  // [2,4,6,8,10]

// // let newArr = mapArray.map((item) => item * 2)

// // console.log(newArr)
// // console.log(mapArray)



// // arr4.forEach((item) => console.log(item * 2))



// // let arr4 = [1, 2, 3, 4, 5]


// // let filteredArr = arr4.filter((item) => item % 2 === 1)

// // console.log(filteredArr)





// // reduce function/ reduce method



// let arr4 = [1, 2, 3, 4, 5, 6]


// let sum = arr4.reduce((acc, currVal) => {
//     // console.log(acc)
//     return acc = acc + currVal

// }, 0)


// console.log(sum)


// // single value, array, object


// let student = [
//     { name: "babalu", marks: 20 },
//     { name: "dabalu", marks: 30 },
//     { name: "sabalu", marks: 40 },
//     { name: "pabalu", marks: 50 },
//     { name: "jabalu", marks: 25 },
// ]

// // find the total sum of marks of every studnt

// let totalMarks = student.reduce((acc, currVal) => {
//     // console.log(acc)
//     // console.log(currVal)

//     return acc += currVal.marks

// },0)

// console.log(totalMarks)



// let arr = [1, 2, 3, 4];
// // let = initialvalue = 0

// let sum = arr.reduce((acc, currVal) => {

//     return acc += currVal

// }, 0);

// console.log(sum)



// let cart = [
//     { name: "babalu", quantity: 2, price: 34 }, 68
//     { name: "dabalu", quantity: 3, price: 3 }, 9
//     { name: "sabalu", quantity: 4, price: 4 },16
//     { name: "pabalu", quantity: 5, price: 64 },320
//     { name: "jabalu", quantity: 2, price: 7 },14   
// ]


// let totalquant = cart.reduce((acc, cv) => {


//     return acc + (cv.quantity * cv.price)


// }, 0)

// console.log(totalquant)


// let a = 676.9889098765

// console.log(a.toFixed(3))


// map(()=>{}), flter, foreacch, reduce

// let cart = [
//     { name: "babalu", quantity: 2, price: 34 },
//     { name: "dabalu", quantity: 3, price: 3 },
//     { name: "sabalu", quantity: 4, price: 4 },
//     { name: "pabalu", quantity: 5, price: 64 },
//     { name: "jabalu", quantity: 2, price: 7 },

// ]


// let ans = cart.reduce((acc, cv,i) => {
//     return <> acc + cv , i </>
// }, );


// console.log(ans)


// let arr = [1, 28, 39, 84, 95];
// // key value


// let obj = arr.reduce((acc, cv, i, arr) => {
//     return { ...acc, [i]: cv }
// }, {})

// console.log(obj);


// let quantity = [
//     { id: 2, quantity: 2 },
//     { id: 3, quantity: 4 },
//     { id: 4, quantity: 8 }
// ]

// let cart = [
//     { id: 2, quantity: 2, price: 98 },
//     { id: 3, quantity: 4, price: 87 },
//     { id: 4, quantity: 8, price: 86 }
// ]


// let total = quantity.reduce((acc, cv) => {
//     let productPrice = cart.find((item) => item.id === cv.id)

//     return acc + (cv.quantity * productPrice.price)

// }, 0)

// console.log(total)