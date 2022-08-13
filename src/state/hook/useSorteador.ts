import { useSetRecoilState } from "recoil"
import { resultadoSorteio } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useListaParticipantes } from "./useListaParticipantes"

export const useSorteador = () => {
  const participantes = useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoSorteio)

  return () => {
    const resultado = realizarSorteio(participantes)
    setResultado(resultado)
  } 
}