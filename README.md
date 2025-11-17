# Typescript_assignment_1


### Explain the difference between any, unknown, and never types in TypeScript.

উত্তর: 
any: মানে এখানে টাইপস্ক্রিপ্ট কাজ করছে না। এটা টাইপ চেক করে না, তাই টাইপ সেফটির ব্যাপারে চিন্তা করতে হয় না।

unknown: আমরা unknown টাইপের ভ্যালু যেকোনো কিছুকে অ্যাসাইন করতে পারি, কিন্তু এই ভ্যালু ব্যবহার করতে গেলে অবশ্যই টাইপ চেক করতে হবে, নাহলে এরর পাবো।

never: যখন কোনো ফাংশন কখনোই কিছু রিটার্ন করে না, তখন আমরা never টাইপ ব্যবহার করি।


### Provide an example of using union and intersection types in TypeScript.

উত্তর: union টাইপের উদাহরণ হচ্ছে:


type Check = string | number;

const CheckPerson = (input: Check): void => {
  if(typeof input == 'string') {
    console.log(`My name is ${input}`);
  } else {
    console.log(`My phone number is ${input}`);
  }
}


CheckPerson('Ak khan');
CheckPerson(183832922);


intersection টাইপের উদাহরণ হচ্ছে:


type StudentInfoType = {
  id: number;
  name: string;
}

type StudentSchoolInfoType = {
  schoolID: number;
  schooolNmae: string;
};

type StudentType = StudentInfoType & StudentSchoolInfoType;

const checkStudentInfo = (input: StudentType): void => {
    console.log(`My name is ${input.name}, and my school name is ${input.schooolNmae}`);
}


checkStudentInfo({id: 1, name: 'ak khan', schoolID: 1, schooolNmae: 'new school'});

