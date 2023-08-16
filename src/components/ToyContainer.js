import React from "react"
import ToyCard from "/home/gcamoin/react-hooks-practice-toy-tales/src/components/ToyCard.js"


function ToyContainer({toys, onUpdateToy, onDeleteToy}) {
    const toyCards = toys.map((toy) => (
        <ToyCard 
            key={toy.id}
            toy={toy}
            onUpdateToy={onUpdateToy}
            onDeleteToy={onDeleteToy}
        
        />
    ))

return (
    <div className="toy-collection">{toyCards}</div>
)





}

export default ToyContainer;