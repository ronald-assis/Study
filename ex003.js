<script>
    /*  ### Celsius to Fahrenheit

        Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outro

        C = (F - 32) * 5/9
        F = C * 5/9 + 32

    */

    function temperature(degree){
        const celsiusExists = degree.toUpperCase().includes('C')
        const fahrenheitExists = degree.toUpperCase().includes('F')

        if(!celsiusExists && !fahrenheitExists){
            throw new Error('unidentified grain')
        }     

        let updatedDegree = Number(degree.toUpperCase().replace("F",""));
        let formala = (fahrenheit) => (fahrenheit - 32) * 5/9
        let degreeSign = "C"

        if(celsiusExists){
            updatedDegree = Number(degree.toUpperCase().replace("C",""));
            formala = celsius => celsius * 9/5 + 32
            degreeSign = "F"
        }
        
        return formala(updatedDegree) + degreeSign
    }
    try{
       console.log(temperature('50F'))
       console.log(temperature('10c')) 
       console.log(temperature('10z')) 
    }catch(error){
        console.log(error.message)
    }


</script>

<!-- lorem -->












<!-- let result = 0
        switch(tranformer){
            case "C":
                result = C = (F)
        } -->
