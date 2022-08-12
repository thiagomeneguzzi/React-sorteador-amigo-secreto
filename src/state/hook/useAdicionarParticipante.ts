import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

export default function useAdicionarParticipante() {
    const setListaParticipantes = useSetRecoilState(listaParticipantesState)
    const list = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)

    return (participante: string) => {
        if(list.includes(participante)) {
            setErro('Nomes duplicados não são permitidos')
            setTimeout(() => {
                setErro('')
            }, 3000)
            return 
        }
        setListaParticipantes(listaAntiga => [...listaAntiga, participante])
    }
}