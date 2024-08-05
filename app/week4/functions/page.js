

export default function Page(){

    function helloWorld(username, dayOfWeek){
        //return "Hello World! Welcome back, " + username + ". Today is " + dayOfWeek;
        return `Hello World! Welcome back, ${username}. Today is ${dayOfWeek}.`;
    }


    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back, ${username}. Today is ${dayOfWeek}.`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a+b;

    //higher order function  pass a function as a variable
    const louder =(textFunc) => {
        // check to make sure the incoming argument is a function
        const text = textFunc("James");
        return `${text.toUpperCase()}!!`;
    }

    const louder2 =(textFunc,username) => {
        // check to make sure the incoming argument is a function
        const text = textFunc(username);
        return `${text.toUpperCase()}!!`;
    }

    const multiplyBy = (num1) => {
        // return a function, creating a lower order function
        // whatever you name it
        return (num2) => {
            return num1 * num2;
        }
    }

    // -> name the returned function these ways
    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    const orginalFunc = (num) => {return num+2};
    const newFunc = orginalFunc;

    return(
        <main>
            <h1>Function</h1>
            <p>{helloWorld("Holly", "Tuesday")}</p>
            <p>{helloWorld2("Jane","Wednesday")}</p>
            <p>{helloWorld3("Bob")}</p>
            <p>{helloMath(5,8)}</p>
            <p>{louder(helloWorld3)}</p>
            <p>{louder2(helloWorld3, "Hāaaaa")}</p>
            <p>{louder(helloWorld2)}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
            <p>{multiplyBy(4)(9)}</p>

            <p>{newFunc.name}</p>
            <p>{newFunc(3)}</p>
        </main>
    );
}