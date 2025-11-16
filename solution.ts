
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


type BookType = {title: string, rating: number};
const filterByRating = (inputBook: BookType[]): BookType[] => {

  const filterArray: BookType[] = [];

  inputBook.forEach((book) => {
    if(book.rating >= 4) {
      filterArray.push({title: book.title, rating: book.rating.toFixed(1)});
    }
  })
  return filterArray; 
}


//------------------------





































