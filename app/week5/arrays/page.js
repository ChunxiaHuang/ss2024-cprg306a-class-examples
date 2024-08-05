

export default function Page(){

    let emptyArray = [];
    let numbers = [5, 3, 9, 1, 4];
   // numbers.push(12); // add a new item to the array
   // numbers.pop(); // remove the last item of the array
   // numbers.splice(1,2); // remove 2 items from position 1 from the array

    let doubled = numbers.map( (num) => num * 2 );
    let lessThanFive = numbers.filter( (num) => num < 5 ); // filt numbers less than 5...yes or no result
    let moreNumbers = [6,7,8];
    let allNumbers = numbers.concat(moreNumbers); // add two arrays together

    let numbersToBeSorted = [...allNumbers];
    //let sortedNumbers = allNumbers.toSorted();
    let sortedNumbers = numbersToBeSorted.sort( (a,b) => a - b) ; // sort numbers from small to big
    let sum = allNumbers.reduce( 
        (accumulator, currentValue) => accumulator + currentValue, 
        0
        );

    //let newNumbers = [numbers[0], numbers[1]];
    let newNumbers = [...numbers]; // copy the array
    let newNumbers2 = [...newNumbers, 12, 23, 34, ...moreNumbers];

    let originalStudent = {
        name: 'Alice',
        age: 25,
        email: 'alice@sait.ca',
    }
    let newStudent = {
        ...originalStudent, // copy an object
        phone: '1233334567',
    }

    //let studentCopy = originalStudent; // NOT a real copy, it is refencing the original object
    //change the copy's value according above will change the value of the original TOO
    let studentCopy = {...originalStudent}
    studentCopy.name = 'Bob'; 


    return (
        <main>
            <p>{ numbers.join(` | `) }</p>
            <p>{ doubled.map( (num) => `${num},`) }</p>
            <p>{ doubled.join(',') }</p>   {// equal to the one above
            }
            <p>{ lessThanFive.join('..') }</p>
            <p>{ allNumbers.join(' | ') }</p>
            <p>{ sortedNumbers.join(' | ') }</p>
            <p>{ sum }</p>
            <p>{ newNumbers2.join(',') }</p>
            <p>{ JSON.stringify(originalStudent) }</p>
            <p>{ JSON.stringify(newStudent) }</p>
            <p>{ JSON.stringify(studentCopy) }</p>
        </main>
    );
}