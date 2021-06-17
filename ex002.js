<script>
    /* ### Sistema de gasto familiares

    Crie um objeto que possua 2 propriedades, ambas do tipo array:

        * receitas:[]
        * despesas:[]
    (receitas - despesas)
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostra uma mensagem se a familia esta com saldo positivo ou negativo, seguindo o valor do saldo    
    */

    let familyExpenses = {
        recipes:[739.33],
        expenses:[208,350,100,70,]}
    function sum(array){
        let total = 0;

        for(let valeu of array){
            total +=valeu   
        }
            return total
    }
   
        function balance(){
            const calculerRecipes = sum(familyExpenses.recipes)
            const calculerExpenses = sum(familyExpenses.expenses)
            const total = calculerRecipes - calculerExpenses
            const end = total >= 0 ? "positivo" : "NEGATIVO" 

            return `Seu saldo é ${end}: R$${total.toFixed(2)}`

    }   


    console.log(balance())
</script>