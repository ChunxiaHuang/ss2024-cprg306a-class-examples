import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
            <h1 className="text-xl">My React Site</h1>
      <p>Hello World!</p>
      <h2>Application Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./page2/">Page 2</Link>
          {// two methods to implement the styles
          }
        </li>
        <li><Link className="underline text-cyan-600 hover:text-cyan-300" href="./week2/">Week 2</Link></li>
        <li><Link className={linkStyles} href="./week3/">Week 3 - Props</Link></li>
        <li><Link className={linkStyles} href="./week4/functions">Week 4 - Function</Link></li>
        <li><Link className={linkStyles} href="./week4/counter">Week 4 - Counter</Link></li>
        <li><Link className={linkStyles} href="./week4/managed_form">Week 4 - Managed Form</Link></li>
        <li><Link className={linkStyles} href="./week5/arrays">Week 5 - Array Mutation</Link></li>
        <li><Link className={linkStyles} href="./week5/contact">Week 5 - Contact Filter/Sort</Link></li>
        <li><Link className={linkStyles} href="./week6">Week 6 - Managing State</Link></li>
        <li><Link className={linkStyles} href="./week7">Week 7 - Single Art</Link></li>
        <li><Link className={linkStyles} href="./week8">Week 8 - Firebase Auth</Link></li>
        <li><Link className={linkStyles} href="./week10">Week 10 - Cloud Firestore</Link></li>
      </ul>
    </main>
  );
}
