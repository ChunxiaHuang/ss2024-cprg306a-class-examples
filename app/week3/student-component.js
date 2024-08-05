

export default function Student({student, studentId}){ //pass a student object and a single variable

    //destruct the props of the student
    let {name, age, address:{city, postalcode}} = student;

    // m-10 = mx-10 my-10 = margin
    // p-10 = px-10 py-10 = padding
    return(
        <div className="text-red-300 bg-slate-800 border-cyan-100 mx-10 my-10 p-5">
            <h3 className="text-lg">{name}</h3>
            <p>Student ID: {studentId}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Postal Code: {postalcode}</p>
        </div>
    );
}