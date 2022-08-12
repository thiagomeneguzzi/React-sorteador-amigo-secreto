import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import Formulario from "./Formulario";

// Jest
test('Quando o input está vazio, não pode adicionar novos participantes', () => {

    render(<Formulario />)
    
    // Encontrar no DOM o input
    const input =  screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Encontrar no DOM o botão
    const botao = screen.getByRole('button')

    // Garantir que input está no documento
    expect(input).toBeInTheDocument()

    // Garantir que botão esteja desabilitado
    expect(botao).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido', () => {
    render(<Formulario />)
    
    // Encontrar no DOM o input
    const input =  screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Encontrar no DOM o botão
    const botao = screen.getByRole('button')

    // Inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Thiago Meneguzzi'
        }
    })

    // Clicar no botão de submeter
    fireEvent.click(botao)

    // Garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // Garantir que o input não tenha um valor
    expect(input).toHaveValue('')
})