import { useState } from "react";

export default function ExemploFor() {

    const [numeros, setNumeros] = useState([]);

    function gerarNumeros() {
        const lista = [];

        for(let i = 1; i <= 5; i++) {
            lista.push(i);
        }
        setNumeros(lista);
    }

    return(
        <div style={{ padding: 20}}>
            <h2>Exemplos com FOR:</h2>
            <button onClick={gerarNumeros}>Gerar Números</button>

            <ul>
                {numeros.map((n)=> (
                    <li key={n}>Número: {n}</li>
                ))}
            </ul>
        </div>
    )
}