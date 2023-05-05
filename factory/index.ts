abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation() : string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`; 
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod() :Product{
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod() :Product{
    return new ConcreteProduct2();
  }
}

interface Product {
  operation() : string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return `{Result of the Concrete Product 1}`;
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return `{Result of the Concrete Product 2}`;
  }
}

function clientCode (creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class but, it still works.');
  console.log(creator.someOperation());
}

console.log('App: Launced with the ConcreteCreator1');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launced with the ConcreteCreator2');
clientCode(new ConcreteCreator2());