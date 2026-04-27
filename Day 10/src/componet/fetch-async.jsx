import {useState, useEffect} from "react";
export default function AsyncFetchExample() {
const [user,setUser]= useState( []);
useEffect (()=>{
    async function loadUsers(){
        try {
        const res =await fetch("https://pokeapi.co/api/v2/pokemon/25");
        const data = await res.json();
        setUser([data]);
        } catch (error) {
            console.error("error fetching users:",error);
        }
    }
    loadUsers();
},[])
    return (
        <>  
        <h2>
            Pokemon - (fetching data with async)
        </h2>
        {user.map((u) =>(
            <div key={u.name}>
            <p>{u.name}</p>
            <img src={u.sprites.front_default} alt={u.name} />
            </div>
        ))}
        </>
    )   
}