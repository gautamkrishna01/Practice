// Array Reference 
const array1=[2,4,5,6,4,2]
console.log(array1)
const array2=array1
console.log(array2)
console.log("After Referencing the array")
array1[2]=112
console.log(array1)
console.log(array2)

// Object Reference 
const userBio=
{
    name:"Ram",
    id:1,
    Address:"Ktm"
}
console.log(userBio)
const userBio1=userBio
console.log(userBio1)
console.log("After Object Reference")
userBio.name="Shyam"
console.log(userBio,userBio1)

// example of reduce method 
let array=[3,4,5,2,4,5,67,6]
let array3=array1.reduce((tot,ele)=>
{
   return tot+ele
   
 })
 console.log(array3)


