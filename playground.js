function foo(){
    let a = 10
    
    function bar(){
        a = 5
        console.log(a)
    }
    
    console.log(a)
    
    return [a,bar]
}

const [a,bar] = foo() //10

console.log(a) //10

bar() // 5

console.log(a) //10
