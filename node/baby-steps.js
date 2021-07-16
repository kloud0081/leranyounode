// var sum=0
// for (let i=2;i<progress.argv.length;i++){
//     sum=sum+progress.progv[i]
// }
// console.log(sum)
let result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)