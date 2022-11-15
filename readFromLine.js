const {stdin,stdout}=require("process")
const readLine=require("readline")

const rl=readLine.createInterface({
    input:stdin,
    output:stdout

})

rl.question("Enter your name:",name=>{
    console.log(`Hello ${name}`)
    rl.close()
})