

export default function Counter({currentCount, incrementCountFunction}){

    // active: when press the button
    const buttonStyles = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    return(
        <div className="bg-slate-300 p-5">
            <h1 className="text-2xl">Increment Counter</h1>
            <p className="text-lg">Counter: {currentCount}</p>
            <button onClick={incrementCountFunction} className={buttonStyles}>Increment!</button>
        </div>
    );
}
