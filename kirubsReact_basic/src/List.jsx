function List(props){
    
    const personList = props.items

    personList.sort((a,b)=>a.name.localeCompare(b.name))



    const listItems = personList.map(person=> <li key={person.id}>{person.name} :<b>{person.age}</b></li>)
    
    return (<ul>{listItems}</ul>)
}

export default List