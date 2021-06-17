
    /* 
        buscando e contando dados em array

        baseados em array de livro por cartegorias abaixo, faça os seguentes desaios

        ° contar o numero de cartegorias e o numero de livros em cada categoriasa
        ° contar o numero de autores
        ° Mostrar livros do autor Augusto Cury
        ° Tranformar a função a cimma em uma função que irá receber o nome do autor e devolver os livros desse autou.
    */

    const booksByCategory = [
        {
            category: "riqueza",
            books: [
                {
                    title: "Os segredos da mente milionaria",
                    author: "T. Harv Eker"
                },
                {
                    title: "O homem mais rico da babilonia",
                    author: "Geoge S."
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T."
                },
            ],
        },
        {
            category: "Inteligencia emocional",
            books: [
                {
                    title: "você é insubstituivel",
                    author: "Augusto Cury"
                },
                {
                    title: "Anciedade",
                    author: "Augusto Cury"
                },
                {
                    title: "os 7 habitos",
                    author: "Stephen r."
                },
            ],
        }
    ]
    const totalCategory = booksByCategory.length
    for (category of booksByCategory) {
        console.log("Total de livros da categoria: ", category.category)
        console.log(category.books.length)
    }
    console.log(`total de category na array: ${totalCategory}`)

    function countAuthor() {
        let authors = []

        for (let category of booksByCategory) {
            for (let books of category.books) {
                if (authors.indexOf(books.author) == -1) {
                    authors.push(books.author)
                }
            }
        }
        console.log("Total de autores: ", authors.length)
    }
    countAuthor();

    function booksOfAuthor(author){
        let book = []

        for (let category of booksByCategory) {
            for (let books of category.books) {
                if(books.author === author){
                    book.push(books.title)
                }
            }
        }
        console.log(`books of ${author}: ${book.join(", ")}`)
    }
    booksOfAuthor('T. Harv Eker');
    booksOfAuthor('Geoge S.');
    booksOfAuthor('Augusto Cury');
    booksOfAuthor('Robert T.');
    booksOfAuthor('Stephen r.');


