import React from "react";
import Header from "./Header";
import Forms from "./forms";
import Card from "./card";
import { useState } from "react";

function App() {
    const [entry, setEntry] = useState({
        name: "",
        title: "",
        date: "",
        email: "",
        number: "",
        address: "",
        // image: ""
    });

    return <div >
        <Header />
        <div className="container">
            <Forms entry={entry} setEntry={setEntry} />
            <Card entry={entry} />
        </div>
    </div>
}

export default App;