import React, {useState} from "react"



function ToyForm({addToy}) {
    const [formData, setFormData] = useState({
        name: "",
        image: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    const newToy = {
        ...formData,
        likes: 0,
    }

    fetch ('http://localhost:3001/toys', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy),
    })
        .then((r) => r.json())
        .then(addToy)

}

return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h3>Create a Toy!</h3>
            <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter a toy's name..."
                className="input-text"
            
            />
            <br />
            <input 
                type="text"
                name="image"
                onChange={handleChange}
                value={formData.image}
                placeholder="Enter a toy's image url..."
                className="input-text"
            />
            <br />
            <input 
                type="submit"
                name="submit"
                value="Create New Toy"
                className="submit"
            />

        </form>

    </div>
)


}

export default ToyForm;