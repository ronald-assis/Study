<script>
    // if... else
    let temperature = 38.5
    if(temperature>= 37.5){
        console.log("Febre alta")
    }else if(temperature < 37.5 && temperature >= 37){
        console.log("Febre")
    }else{
        console.log("Saudável")
    }


    //swith
    // let expression = '1'
    // switch(expression){
    //     case 'a':
    //     //codigo
    //         console.log('a')
    //     break
    //     case 'b':
    //     // codigo
    //         console.log('b')    
    //     break
    //     default:
    //         console.log('default')
    //         break
    // }



    function calculate(number1, operador, number2){
        let result = 0;
        switch(operador){
        case '+':
            result = number1 + number2    
            break
        case '-':
            result = number1 - number2       
            break
        case '*':
            result = number1 * number2       
            break
        case '/':
            result = number1 / number2       
            break
        default:
            console.log('not implemented')
            break
    }
    return result
    }

    
    console.log(calculate(7,"/",7))


    // throw

        function sayMyName(name = ""){
            if(name === ''){
                throw "Name is required"
            }
            console.log(name)
        }
    // thy...catch
        try{
            sayMyName("Ronald Assis")
        }catch(e){
            console.log(e)
        }
        console.log("Apos o try/catch")

</script>