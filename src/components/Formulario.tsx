import { useRef, useState } from "react"
import useAdicionarParticipante from "../state/hook/useAdicionarParticipante";
import useMensagemErro from "../state/hook/useMensagemErro";

export default function Formulario() {

    const [nome, setNome] = useState('')
    
    const inputRef = useRef<HTMLInputElement>(null)
    const adicionarNaLista = useAdicionarParticipante()
    const mensagemDeErro = useMensagemErro()

    function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <input
                value={nome}
                ref={inputRef}
                onChange={evento => setNome(evento.target.value)}
                type="text" 
                placeholder="Insira os nomes dos participantes" />
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
        </form>
    )
}