"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "./_services/blog-service";


export default function SignInPage(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    //console.dir(user);
    const [blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if(user){
            dbGetAllPosts(user.uid, setBlogPostList);
        }
    }, [user])

    return(
        <main>
            <header>
                <h1 className="text-3xl font-bold">Cloud Firestore</h1>
            </header>
            { user ? (
                // user is logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p>{user.email}</p>
                    <img className="w-8 h-8" src = {user.photoURL}/>
                    <p><Link href="/week10/add-blog-post">Add New Blog Page</Link></p>
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                    <section>
                        <h2>My Blog Posts</h2>
                        <ul>
                            {
                                blogPostList.map( (post) => {
                                    let postUrl = `/week10/${post.id}`; // we set up an id for all post in function dbGetAllPosts
                                    return <li key={post.id}><Link href={postUrl}>{post.title}</Link></li>
                                } )
                            }
                        </ul>
                    </section>
                </div>
            ) : (
                // user is not loggged in
                <div>
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
                </div>
            ) }
        </main>
    );
}