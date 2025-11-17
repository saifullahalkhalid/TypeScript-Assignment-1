
type T = string | number | boolean;

function formatValue(input: T):T{

if(typeof input === "string"){
    return input.toUpperCase();
}

else if (typeof input === "number"){
    return input*10;
}

else{
    return !input;
}



}

formatValue('hello');
formatValue(5)
formatValue(true)





function getLength<T>(value:T) : number | undefined{

    if(typeof Array.isArray(value)){

        return value.length ;
    }

    else if(typeof value ==="string"){
        return value.length;
    }
    else{
        return undefined;
    }

   
}
getLength('typescript')
getLength([10, 20, 30, 40])



class Person{
    name:string;
    age: number;


    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(){

        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }

}

const person1 = new Person('John Doe', 30);


const person2 = new Person('Alice', 25);

person1.getDetails()


   type TBook ={
        title: string;
        rating: number;
    }

const books:TBook[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
   { title: 'Book D', rating: 6.0 }
];

const filterByRating =(books:TBook[]):TBook[] =>{

   return books.filter((book)=> {
    if(book.rating<= 5){
      return  book.rating >= 4
    }
   
   })

}

filterByRating(books)


type TUser ={
    id:number;
    name:string;
    email:string;
    isActive: boolean;
}
 
const users:TUser[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



const filterActiveUsers =(activeUsers:TUser[]):TUser[] =>{

    return activeUsers.filter((activeUser)=> activeUser.isActive==true)

}

filterActiveUsers(users);

interface IBook {
    title: string;
    author: string;
    publishedYear:number;
    isAvailable:boolean;
}

const myBook: IBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails =(books:IBook):string =>{

    return `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? "Yes": "No"}`

}

printBookDetails(myBook);



   

type Arr = number |string
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



const getUniqueValues =(arr1:Arr[], arr2:Arr[]): Arr[] =>{
const array3:Arr[] = []


for(let i = 0; i<arr1.length; i++){
            let isDuplicate = false
    for(let j = 0; j<array3.length; j++){

        if(array3[j] === arr1[i]){

            isDuplicate = true
            break;
        }
        
    }

     if(!isDuplicate){
            array3[array3.length++] = arr1[i]
        }

}





for(let i = 0; i<arr2.length; i++){
            let isDuplicate = false
    for(let j = 0; j<array3.length; j++){

        if(array3[j] === arr2[i]){

            isDuplicate = true
            break;
        }
      
    }

    if(!isDuplicate){
            array3[array3.length] = arr2[i]
        }

}


return array3;
}


getUniqueValues(array1, array2);





type Products={


    name:string;
price :number;
quantity :number;
discount?:number;
}


const products:Products[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


const calculateTotalPrice = (pro:Products[]):number =>{

 const priceArr = pro.map((product)=>{
    const price = product.price*product.quantity;
    if(product.discount){
        return price - price*product.discount/100;
    }

    return price
 })


 const totalPrice = priceArr.reduce((acc, curr) =>acc + curr, 0)

 
 return totalPrice;

}

calculateTotalPrice(products);