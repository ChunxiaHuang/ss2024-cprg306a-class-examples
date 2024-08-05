"use client"
import { useEffect, useState } from "react";
import SingleArt from "./single-art";
import Artwork from "./artwork";


export default function Gallery(){

    const [artworkIds, setArtworkIds] = useState( [] );
    const [galleryDisplay, setGalleryDisplay] = useState( [] );

    async function getListOfArtIds(){
        try {
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects"
            );
            if(!response.ok){
                console.log(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            //console.log(data); // the data here is the array of all Art ID
            let shuffled = [...data.objectIDs];
            shuffled = shuffled.sort( (a, b) => 0.5 - Math.random());
            shuffled = shuffled.slice(0, 10); //only want some of the array, the first ten
            console.log(shuffled); // ten id fetched 
            setArtworkIds(shuffled); // set the list of id into the state
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }


    async function getArtworkById(artId){
        try {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
            );
            if(!response.ok){
                console.log(response.status);
            }
            //console.dir(response);
            const data = await response.json();
            console.dir(data);// the data is an object here
            return data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getListOfArtIds();
    }, []);
    useEffect( () => {
        // having async here for the await being able to work
        (async () => {
              //create a loop to fetch the id from the id array
            if(artworkIds != null && artworkIds.length > 0){
                let thisGallery = [];
                for( let i = 0; i < artworkIds.length; i++ ){
                    let thisArt = await getArtworkById(artworkIds[i]);
                    thisGallery.push(thisArt);
                }
                //console.log(thisGallery);
                setGalleryDisplay(thisGallery);
            }   
        })();
      
    }, [artworkIds]) //if artworkIds(the dependency) change, should rerender the code 


    return(
        <section>
            {/* <SingleArt /> */}
            {
                galleryDisplay.map( (art) => (
                    <Artwork artworkObj={art}/>
                ))
            }
        </section>
    );
}