import DogCard from "./dog-card";


export default function DogList({listOfDog}){



    return(
        <div>
            {listOfDog.map((dog)=>(
                <DogCard dogObj={dog} />
            ))}
        </div>
    );
}