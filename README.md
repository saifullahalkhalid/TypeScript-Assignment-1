# 1.TypeScript: Interface vs Type

## Interface:
TypeScript-এ interface একটি অবজেক্ট বা ক্লাসের গঠন ও বৈশিষ্ট্য নির্ধারণের জন্য ব্যবহার করা হয়। এটি মূলত একটি কাঠামোবদ্ধ ব্লুপ্রিন্ট যা নির্দিষ্ট করে দেয় একটি অবজেক্ট কী ধরনের প্রপার্টি ও মেথড ধারণ করবে।TypeScript-এ 
interface declaration merging একটি গুরুত্বপূর্ণ ফিচার। একই নামে দুই বা ততোধিক interface ডিফাইন করলে TypeScript সেগুলোকে স্বয়ংক্রিয়ভাবে merge করে একটি একীভূত interface তৈরি করে।

উদাহরণ:
interface IUser{
    name: string;
    age : number;
};

interface IUser{
    id: number;
}

Intersection ব্যবহার করে টাইপ extend করা যায়:



interface IUserWithRole extends IUser{
    role: "Admin" | "user"
}


## Type: 

TypeScript-এ type কেবল অবজেক্টের জন্যই নয়—primitive, union, tuple, function সহ যেকোনো ধরনের টাইপ সংজ্ঞায়িত করতে ব্যবহৃত হয়। এই কারণে type অনেক বেশি ব্যবহারযোগ্য।

উদাহরণ:
type User ={
    name:string;
    age: number;

};

type Role ={
    role : "admin" | "user";
}

type UserWithRole = User & Role;

# 5. Provide an example of using union and intersection types in TypeScript.
## Union: 
TypeScript-এ Union Type ব্যবহার করে একটি ভ্যারিয়েবলকে একাধিক সম্ভাব্য টাইপের জন্য অনুমোদিত করা যায়। Union Type প্রকাশ করা হয় |  চিহ্নের মাধ্যমে।

উদাহরণ:
interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// Union Type: হতে পারে IUser বা IUserWithRole

type User = IUser | IUserWithRole;


const user1: User = { id: 1, name: "Saifullah", age: 25 };
const user2: User = { id: 2, name: "Khalid", age: 30, role: "admin" };

## Intersection:
Intersection Type একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ বানায়। ভ্যারিয়েবলটি এই নতুন টাইপের সব প্রপার্টি ধারণ করে। Intersection & চিহ্ন দিয়ে প্রকাশ করা হয়।

উদাহরণ:
interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IRole {
  role: "admin" | "user";
}

// Intersection Type: IUser + IRole



type User = IUser & IRole;


const user: User = {
  id: 1,
  name: "Saifullah",
  age: 25,
  role: "admin"
};

console.log(user);


উদাহরণ:
type Name = { name: string };
type Age = { age: number };
type Role = { role: "admin" | "user" };


type User = Name & Age | Name & Role;


const user1: User = { name: "Saifullah", age: 25 };      
const user2: User = { name: "Khalid", role: "admin" };    






