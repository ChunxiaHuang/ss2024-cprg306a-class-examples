"use client"
import DogForm from './dog-form';
import DogList from './dog-list';
import DogData from './dogs.json';
import { useState } from 'react';

export default function DogPage(){

    const [dogList, setDogList] = useState(
        DogData.map( (dog) => ({...dog}) )
    );

    const handleCreateDog = (newDog)=> {
        // dogList.push(newDog); <---- DON'T do this, state is immutable, we cannot mutate state variables directly
        setDogList([...dogList, newDog]); // copy current dogList, and add new dog to the array
    }

    const [isDogFormOpen, setDogFormOpen] = useState(false);
    const openDogForm = () => setDogFormOpen(true);
    const closeDogForm = () => setDogFormOpen(false);



    return(
        <main>
            {//conditional render
                isDogFormOpen && (
                    <DogForm closeFormFunc={closeDogForm} onCreateDog={handleCreateDog} />
                )
            }
            {//{ dogList.map( (dog) => (
                //<p>{dog.name}</p>
            //))}
            // the following code, pass the doglist to the DogList component
        }
            <h1 className='text-3xl font-bold text-center'>Dog for Adoption</h1>
            <DogList listOfDog={dogList} />
            <div className='text-center m-4'>
                <button onClick={openDogForm} className="py-2 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-white">Open Dog Form</button>
            </div>
            
        </main>
    );
}