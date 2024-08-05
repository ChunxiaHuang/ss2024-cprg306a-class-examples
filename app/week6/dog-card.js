

export default function DogCard({dogObj}){

    // destructure
    const {id, name, age} = dogObj;
    // if not destructure, can access the variable using dogObj.name

    return(
        <div className="border border-blue-500 bg-blue-800 m-1 p-2 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p><b>ID: </b>{id}</p>
            <p><b>Age: </b>{dogObj.age}</p>
        </div>
    );
}