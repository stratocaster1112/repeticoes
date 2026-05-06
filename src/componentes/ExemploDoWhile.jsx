import { useState } from "react";

export default function ExemploDoWhile() {
    const [senhaDigitada, setSenhaDigitada] = useState("");
    const [tentativas, setTentativas] = useState(0);
    const [mensagem, setMensagem] = useState(0);
    const senhaCorreta = "1234";

    function verificarSenha() {
        let tentativaAtual = senhaDigitada;
        let contador = tentativas;

        do {
            contador++; 
            if (tentativaAtual === senhaCorreta) {
                setMensagem(`Senha correta após ${contador} tetativa(s)`);
            } else {
                setMensagem(`Senha incorreta. Tetativas: ${contador}`);
            }

            setTentativas(contador);

            break;
        } while(tentativaAtual !== senhaCorreta)
    }
    return(
        <div style={{ padding: 20 }}>
            <h2>Exemplo com do...While</h2>
            <p>Digite a senha correta para entrosar....</p>

            <input 
                type="password"
                value={senhaDigitada}
                placeholder="Digga a senha...."
                style={{ padding: 6, marginRight: 8}}
            />

            <button onClick={verificar}>

            </button>
        </div>
    )
}