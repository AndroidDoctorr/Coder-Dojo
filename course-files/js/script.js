var counter = 0

const someFunction = () => {
    // This is a comment
    console.log("Hello World!")



    counter+= 1
    // counter = counter + 10

    console.log(counter)


    if (counter == 20){
        console.log('Yaaaaaaaay.')
    } else if (counter == 19) {
        console.log('almost there!')
    
    } else {
        console.log('nope')
    }



    if (counter % 5 == 1)
        console.log('V')


    if (counter == 1) {
        for (var i = 0; i <= 10; i+=2) {
            console.log('loop: ' + i)
        }

        var isTen = false
        var someNumber = 0
        while(!isTen) {
            console.log(++someNumber)

            isTen = someNumber == 10
        }
    }
}



const square = (n) => {
    var result = n * n
    return result
}

const waitFunction = async () => {
    setTimeout(() => {console.log('done!')}, 5000)
}

/*
multi-line comment
asdfasdfasdf
*/

const newFunc = () => {
    console.log(square(8))

    var a = square(5) + 2

    var b 
    console.log(b + 5)

    console.log('5' == 5)
    console.log('5' === 5)

    waitFunction()
}
