import Link from "next/link";


export default function MyFirstComponent(){

    //javascript code
    let a = 3;
    let b = 4;

    //content displayed on the website
    return(
        <div>
            <h2>My First Component</h2>
            <Link href="http://www.sait.ca">SAIT Website</Link>
            <p>{a} + {b} = {a+b}</p>
        </div>
    );
}