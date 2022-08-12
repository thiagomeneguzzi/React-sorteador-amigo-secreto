import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom";

export default function useAdicionarParticipante() {
    const setListaParticipantes = useSetRecoilState(listaParticipantesState)
    return (participante: string) => {
        setListaParticipantes(listaAntiga => [...listaAntiga, participante])
    }
}