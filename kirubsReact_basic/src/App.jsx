
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Increament from './Increament.jsx';

function App() {

  const favFood="Mutton Biryani";
  const favFruit="Pomegranate";
  const hobbie="trekking"

  const sampleObjects = [
    { name: "John Doe", id: 12345, age: 30 },
    { name: "Jane Smith", id: 67890, age: 25 },
    { name: "Alice Johnson", id: 11223, age: 28 }
  ];
  return(
    <>
    {/* <Header/> */}
    <Food food={favFood} fruit={favFruit} hobbie={hobbie}/>
    <Food food='sambhar sadham' fruit='guava' hobbie='swimming'/>
    <Food/>
    <UserGreeting isLoggedIn={true} username="Kirubs"></UserGreeting>
    <List items={sampleObjects}> </List>
    <Footer/>
    <Increament/>
    </>

  )
}

export default App
