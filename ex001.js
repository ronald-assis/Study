<script>

    /* ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numericos para sistema de notas em caracteres tipo A B C 

    * de 90 para cima -- A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F  
    
    */


      

function getScore(note){
       if(note >= 90){
           return'A'
       }else if(note >= 80 && note <= 89){
           return'B'
       }else if(note >= 70 && note <= 79){
           return'C'
       }else if(note >= 60 && note <= 69){
           return'D'
       }else{
           return'F'
       }
    
   }
   console.log(getScore(80))
   console.log(getScore(90))
   console.log(getScore(100))
   console.log(getScore(60))
   console.log(getScore(70))
   console.log(getScore(50))
   

</script>