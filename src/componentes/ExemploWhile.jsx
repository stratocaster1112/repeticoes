import { useState } from "react"

export default function ExemploWhile() {
    const [pares, setPares] = useState([]);

    function gerarPares() {
        const lista = [];

        let i = 2;

        while(i <= 10) {
            lista.push(i);

            i += 2;
        }
        setPares(lista);
    }

    return(
        <div style={{ padding: 20 }}>
            <h2>Exemplos com While:</h2>

            <button onClick={gerarPares}>Gerar Números Pares</button>
            <ul>
                {pares.map((n)=>(
                    <li key={n}>Número Par: {n}</li>
                ))}
            </ul>
        </div>
    )
}
