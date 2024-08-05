import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";


export async function dbAddBlogPost(userId, blogPostObj){

    try {
        // database structure: db -> users -> userId -> blogposts -> postId
        // place of data store
        const newBlogPostReference = collection(db, "users", userId, "blog-posts");
        // put the data to the place
        const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
        console.log(newBlogPostPromise.id);// check if the code works
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetAllPosts(userId, updataPostList){
    try {
        const collectionReference = collection(db, "users", userId, "blog-posts");
        const blogPostQuery = query(collectionReference);
        const querySnapshot = await getDocs(blogPostQuery);
        let blogPostList = [];
        querySnapshot.forEach( (doc) => {
            let thisPost = {
                id: doc.id,
                ...doc.data()
            }
            blogPostList.push(thisPost);
        })
        //return blogPostList;
        updataPostList(blogPostList); // actually a set method from parent
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetPost(userId, postId, updateBlogPost){
    try {
        const docRef = doc(db, "users", userId, "blog-posts", postId);
        const documentSnapshot = await getDoc(docRef); //getDocs above to get multiple documents??
        if (documentSnapshot.exists()) {
            updateBlogPost( documentSnapshot.data() );
        } else {
            console.log("This post does not exist!")
        }
    } catch (error) {
     console.log(error);   
    }
}