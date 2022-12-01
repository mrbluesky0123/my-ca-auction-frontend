import React,{ useState,useEffect } from "react";

function Sample0(props) {
    const [state, setState] = useState({});
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const add = (w, value) => {
        state[w] = value
        setState({...state});
    }


    const upsert = (key, value) => {
        setState((prev) => new Map(prev).set(key, value));
    };

    const del = (key) => {
        setState((prev) => {
            const newState = new Map(prev);
            newState.delete(key);
            return newState;
        });
    };

    const clear = () => {
        setState((prev) => new Map(prev.clear()));
    };

    const handleButtonClick = (event) => {
        add(firstname,lastname);
    };

    const handleFirstnameChange = (event) =>{
        setFirstname(event.target.value);
    };

    const handleLastnameChange = (event) =>{
        setLastname(event.target.value);
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div>
            <input type="text" value={firstname} onChange={handleFirstnameChange}></input>
            <input type="text" value={lastname} onChange={handleLastnameChange}></input>
            <button onClick={handleButtonClick}>추가</button>

            {Object.keys(state).map((d) => (<p>{d + " " + state[d]}</p>))
            }

        </div>
    );
}

export default Sample0;