import Link from "next/link";
import Student from "./student-component";

export default function PropsPage(){

    let studentOneId = 123;
    let studentTwoId = 456;


    let studentOne = { //crate a object
        name: 'Joe',
        age: 25,
        schedule: ['CPRG306','CPRG303', 'CPRG123','CPRG456'], // array
        address:{ //another object inside the student object
            line1: '123 Home Street',
            city: 'Calgary',
            postalcode: 'T3H 1C3',
        },
    };

    let studentTwo = {
        name: 'Alice',
        age: 23,
        address:{
            city: 'Edmonton',
            postalcode: 'A1B 2C3',
        }
    }


    let {name, age, address:{city}, schedule:[,mobile,,othercourse]} = studentOne;
    // let{schedule:[,,,othercourse]} = student;     skips the first three elements in the array
    // the othercourse variable will display 'CPRG456'

    return(
        <main>
            <h1 className="text-2xl">Practice with Props</h1>
            <h2 className="text-xl">---Compoments with Props---</h2>
            <Student student={studentOne} studentId={studentOneId}/>
            <Student student={studentTwo} studentId={studentTwoId}/>

            <h2 className="text-xl">---Hardcoded Object---</h2>
            <p>Name: {studentOne.name}</p>
            <p>Age: {studentOne.age}</p>
            <p>City: {studentOne.address.city}</p>
            <p>Mobile App Class Code: {studentOne.schedule[1]}</p>

            <h2 className="text-xl">---Destructured Variables---</h2> 
            {// due to this code:let {name, age.....} = student;//
            }
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>{mobile}</p>
            <p>{othercourse}</p>
            <p>-------------------------------</p>
            <Link href="../">Back</Link>
        </main>
    );
}