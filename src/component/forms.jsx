import React from "react";
// import Card from "./card";

function Forms({entry,setEntry}) {

    // const [showCard, setShowCard] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setEntry(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    // function handleClick(event) {
    //     setShowCard(true);
    //     event.preventDefault();
    // }


    return <div className="form">
        <form >
            <label>Name</label>
            <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter your Name"
                value={entry.name} /> <br />
            <label>Title</label>
            <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Enter your Designation"
                value={entry.position} /><br />
            <label>Date Of Birth</label>
            <input
                onChange={handleChange}
                name='date'
                type="date"
                value={entry.date} /><br />
            <label>Email</label>
            <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={entry.email} /><br />
            <label>Phone number</label>
            <input
                onChange={handleChange}
                name="number"
                type="tel"
                placeholder="Enter your Number"
                value={entry.number} /><br />
            <label>Address</label>
            <input
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Enter your Address"
                value={entry.address}
            /><br />
            {/* <label>Image</label>
            <input
                onChange={handleChange}
                name="image"
                type="file"
                value={entry.image}
            /><br /> */}
            <button onClick={() => window.print()}>Print Card</button>
        </form>

    
    </div>
}

export default Forms;
