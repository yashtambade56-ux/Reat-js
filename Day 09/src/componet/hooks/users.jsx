import useFetch from "./coustumHooks.jsx";
import React from "react";
import useLocalStorage from "./localstorage.jsx";

function Users() {
    const { data, loading, error } = useFetch(
        "https://pokeapi.co/api/v2/pokemon/658"
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data && (
                <>
                <section>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <h2>{data.name}</h2>
                    <p>Type: {data.types.map((type) => type.type.name).join(", ")}</p>
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                </section>
                <section>
                    
                </section>
                </>
            )}
        </div>
    );
}

export default Users;