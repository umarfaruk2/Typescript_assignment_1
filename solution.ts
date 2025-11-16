
type charType = string | number | boolean;

const formatValue = (input: charType): charType => {
  if(typeof input == 'string') {
    return input.toUpperCase();
  } else if(typeof input == 'number') {
    return input * 10;
  } else {
    if(input == true) {
      return false;
    } else {
      return true;
    }
  }
};

//---------------------

const getLength = <T>(input: string | Array<T>): number => {
  if(typeof input == 'object') {
    return input.length;
  }

  return input.length;
}

//-------------------------


class Person {
  name : string;
  age : number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

//-------------------------

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


const filterByRating = books.reduce((book, currentBook): object => {
  if(currentBook.rating >= 4) {
    book.push(currentBook);
  }
  return book;
}, []);









































