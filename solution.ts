
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


const getLength = <T>(input: string | Array<T>): number => {
  if(typeof input == 'object') {
    return input.length;
  }

  return input.length;
}



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


type BookType = {
  title: string;
  rating: number;
};

const filterByRating = (inputBook: BookType[]): BookType[] => {

  const filterArray: BookType[] = [];

  inputBook.forEach((book) => {
    if(book.rating >= 4) {
      filterArray.push({title: book.title, rating: book.rating.toFixed(1)});
    }
  })
  return filterArray;
}


type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};


const filterActiveUsers = (userInfo: UserType[]): UserType[] => {

  const filterArray: UserType[] = [];

  userInfo.forEach((user) => {
    if(user.isActive == true) {
      filterArray.push(user);
    }
  })
  return filterArray;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes': 'No'}`);
}




const getUniqueValues = <T>(array1: Array<T>, array2: Array<T>): Array<T> => {
  const uniqueArray: Array<T> = new Array(array1.length);

  for(let i = 0; i < array1.length; i++) {
      uniqueArray[i] = array1[i];
  }

  for(let i = 0; i < array1.length; i++) {
    let find = true;
    for(let j = 0; j < array2.length; j++) {
     if(array2[i] === uniqueArray[j]) {
        find = false;
        break;
      }
    }
    if(find) {
      uniqueArray[uniqueArray.length] = array2[i];
    }
  }

  return uniqueArray;
}



interface IProduct  {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}


const calculateTotalPrice = (products: IProduct[]): number => {
  const totalCalculatePrice = products.reduce((totalPrice, currentItem) => {

    if(currentItem.discount) {
      const itemPrice = currentItem.price * currentItem.quantity;
      return totalPrice += itemPrice - ((currentItem.discount / 100) * itemPrice);
    } else {
      const itemPrice = currentItem.price * currentItem.quantity;
      return totalPrice += itemPrice;
    }
  }, 0);

  return totalCalculatePrice;
}












