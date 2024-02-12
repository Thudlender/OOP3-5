class Customer {
    getId(){
        return this.getId;
    }
    getName(){
        return this.getName;
    }
    getDiscount(){
        return this.getDiscount;
    }
    setDiscount(){
        this.getDiscount = discount;
    }
    toString(){
        return `${this.name}($(this.id)) ($(this.discount)%)`;
    }
}
class Invoice {
    id = 0;
    customer = null;
    amount = 0;
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId(){
        return this.id;
    }
    getCustomer(){
        return this.customer;
    }
    setCustomer(){
        this.customer = customer;
    }
    getAmount(){
        return this.amount;
    }
    setAmount(){
        this.amount = amount;
    }
    getCustomerName(){
        return this.customer.getName;
    }
    getCustomerDiscount(){
        return this.customer.getDiscount;
    }
    getAmountAfterDiscount(){
        return this.amount - (this.amount * this.customer.getDiscount()) / 100;
    }
    toString(){
        return ("Invoice [id =" +
         this.id +
          ", customer = " +
           this.customer.toString() +
          ", amount = " +
           this.getAmountAfterDiscount() +
          "]"
          );
    }
}
const main = () => {
    const customer1 = new Customer(1, " Tinnapaht ", 10);

    const invoice1 = new Invoice(1, customer1, 100);
};