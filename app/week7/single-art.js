"use client"
import { useEffect, useState } from "react";
import Artwork from "./artwork";


export default function SingleArt(){

    const [singleArt, setSingleArt] = useState( null );

    async function getSingleArtword(){
        try {
            const response = await fetch(
                //"https://collectionapi.metmuseum.org/public/collection/v1/objects"
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734"
            );
            if(!response.ok){
                console.log(response.status);
            }
            //console.dir(response);
            const data = await response.json();
            console.dir(data);// the data is an object here
            setSingleArt(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getSingleArtword();
    }, [] ); // NOT trigger a rerender, the infinite loop

    return(
        <section>
            {
                singleArt && (<Artwork artworkObj={singleArt}/>)
            }
        </section>
    );

}