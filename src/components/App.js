import React, {useState, useEffect} from "react"
import ToyContainer from "/home/gcamoin/react-hooks-practice-toy-tales/src/components/ToyContainer.js"
import Header from "/home/gcamoin/react-hooks-practice-toy-tales/src/components/Header.js"
import ToyForm from "/home/gcamoin/react-hooks-practice-toy-tales/src/components/ToyForm.js"

function App() {

const [toys, setToys] = useState([])



useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then(setToys)
},[])

function handleDelete(toyToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys);
}

function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

function addToy(newToy) {
    setToys([...toys, newToy])
}

return (
    <div className="app">
    <Header />
    <ToyForm addToy={addToy}/>
    <ToyContainer 
        toys={toys}
        onUpdateToy={handleUpdateToy}
        onDeleteToy={handleDelete}
    
    />

    </div>



)








}

export default App;