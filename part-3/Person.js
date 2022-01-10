const Person = ({name, age, hobbies}) => {
    return(
        <div>
            <h1>{name.length>6? name.slice(0,6):name}</h1>
            <p>Learn some information about this person:</p>
            <p>Hobbies include:<br />
            <ul>
                {hobbies.map(ea => (<li>{ea}</li>))}
            </ul></p>
            <h3>{age >= 18 ? "Please Go Vote!" : "you must be 18 to vote"}</h3>
        </div>
    )
}