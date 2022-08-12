import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

export default function useMensagemErro() {
    const mensagem = useRecoilValue(erroState)
    return mensagem
}