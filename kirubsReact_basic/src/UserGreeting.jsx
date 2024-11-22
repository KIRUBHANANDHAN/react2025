function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welocome{props.username}</h2>
    // }
    // else{
    //     return <h2>Please login to continue</h2>
    // }

    return (props.isLoggedIn ? <h2 className="welcome-message">Welocome{props.username}</h2>:<h2 className="prompt">Please login to continue</h2>)
}

export default UserGreeting