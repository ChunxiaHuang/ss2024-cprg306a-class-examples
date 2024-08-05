"use client"

import { useState } from "react";

export default function DogForm(){

    const [dogName, setDogName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [dogBio, setDogBio] = useState("");

    const handleSubmit = (event) => { 
        console.dir(event);
        event.preventDefault();

        let newDog = {
            name: dogName,
            img: imageUrl,
            bio: dogBio,
        }

        alert(`This dog is named ${newDog.name}
        \nThis is the Image URL: ${newDog.img}
        \nThis is their story: ${newDog.bio}`)
        
        // set input areas to empty after submit
        setDogName("");
        setImageUrl("");
        setDogBio("");
    }

    const handleDogName = (event) => {
        //console.dir(event);
        setDogName(event.target.value);
    }
    const handleImageUrl = (event) => setImageUrl(event.target.value);
    const handleDogBio = (event) => setDogBio(event.target.value);

    return(
        //<form method="GET" action="https://www.sait.ca">
        // action decide where the info to send
        <form onSubmit={handleSubmit}>
            <div>
                <lable>Dog Name: </lable>
                <input required type="text" onChange={handleDogName} value={dogName}/>
            </div>
            <div>
                <lable>Image URL: </lable>
                <input type="text" onChange={handleImageUrl} value={imageUrl}/>
            </div>
            <div>
                <lable>Dog Bio: </lable>
                <textarea onChange={handleDogBio} value={dogBio}/>
            </div>
            <div>
                <label>Dog Bread</label>
                <select onChange={handleBread}>
                    <option value="golden_retriever">Golder Retriever</option>
                    <option value="poodle">Poodle</option>
                    <option value="burnese">Burnese</option>
                </select>
            </div>
            <div>
                <button>Add Dog!</button>
            </div>
            <p>{dogName}</p>
        </form>
    );
}