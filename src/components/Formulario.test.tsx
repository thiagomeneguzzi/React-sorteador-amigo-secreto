import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

// Jest

describe('Comportamento do Formulario.tsx', () => {

    test('quando o input está vazio, não pode adicionar novos participantes', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        
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
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
            )
        
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
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
            )
        
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
    
        // Inserir um outro valor no input
        fireEvent.change(input, {
            target: {
                value: 'Thiago Meneguzzi'
            }
        })
    
        // Clicar no botão de submeter
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
        
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
    })
    
    test('a mensagem de erro deve sumir após timer', () => {
        jest.useFakeTimers()
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
            )
        
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
    
        // Inserir um outro valor no input
        fireEvent.change(input, {
            target: {
                value: 'Thiago Meneguzzi'
            }
        })
        
        // Clicar no botão de submeter
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole('alert')
        
        expect(mensagemDeErro).toBeInTheDocument()
    
        // esperar N segundos
        act(() => {
            jest.runAllTimers()
        })
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })

})
