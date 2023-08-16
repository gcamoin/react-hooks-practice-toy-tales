import React from "react"



function ToyCard({toy, onUpdateToy, onDeleteToy}) {

const {id, name, image, likes} = toy

function handleLike() {
    const updateObj = {
        likes: toy.likes + 1,
    };


    fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
    })
        .then((r) => r.json())
        .then(onUpdateToy);

}

function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`,{
        method: "Delete",
    })
    .then((r) => r.json())
    .then(() => {
        onDeleteToy(toy);
    });
}

return (
   <div className="toycard">
        <h1>{name}</h1>
        <img src={image} alt="toy" />
        <br></br>
        <p>{likes} Likes</p>
        <button onClick={handleLike}>Like</button>
        <br></br>
        <button className="delete-btn" onClick={handleDeleteClick}> Donate to Goodwill</button>



   </div>
    


)



}



export default ToyCard;