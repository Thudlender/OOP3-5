class Author {
    name = "";
    email = "";
    gender = "";
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail() {
        this.email = email;
    } 
    toString() {
        return `Author [name = ${this.name}, Email = ${this.email}]`;
    }
}


class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;

    constructor(name, price, qty) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }

    constructor(name, authors, price) {
        this.name = name;
        this.authors = authors;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price.push(price);
    }
    getQty() {
        return this.qty;
    }
    setQty() {
        this.qty = qty;
    }
    toString() {
        let bookname = "";
        
        for(let i = 0; i < this.authors.length; i++){
            authorname += this.authors[i].toString();
            if (i < this.authors.length -1) {
                this.authorname +=", ";
            }
            // console.log(this.authors[i].toString();
        }
        return `Book[name = ${this.name}, authors = {}, price = ${this.price} qty = ${this.qty}]`;
    }
    getAuthorNames() {
        let authorname2 = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorname2 += this.authors[i].getName();
            if (i < this.authors.length; i++) {
                authorname += " + ";
            }
        }
            return authorname;
    }
}



const main = ()=>{
    const author1 = new Author("Vick", "vick@email.com","M");
    const author2 = new Author("Mind", "mind@email.com", "F");
    console.log(author1.toString());
    console.log(author2.toString());

    const book1 = new Book("กรพต่ายกับเต่า", [author1, author2], 299, 10);
    console.log(book1.toString());
};

main();