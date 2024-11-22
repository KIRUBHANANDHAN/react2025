function Footer(){
    const handleClick = (e)=>e.target.textContent = "OUCH"

    return(
        <>
       
        <footer>
            <p>&copy; {new Date().getFullYear()+" "}Kirubs'$ site</p>
        </footer>

<button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
</>
    )
}
export default Footer