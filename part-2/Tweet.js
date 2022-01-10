const Tweet = ({username, name, date, message}) =>{
    return (
        <div className="tweet">
           <span>{ name}</span>
            <span className="username">@{ username}</span><br />
            <span className="date">{ date}</span><br/>
            <p>{ message}</p>
        </div>
    
    )
}