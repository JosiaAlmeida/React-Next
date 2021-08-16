import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."

describe('<Button />',()=>{
    it('should render the button with the text "Load More"',()=>{
        render(<Button text="Load More" />)
        const button = screen.getByRole("button", {name: /load more/i})
        expect.assertions(1)//Quantos desejo que passa
        expect(button).toBeInTheDocument()
    })
    it('should call function on button click', ()=>{
        //Criar uma função de mock
        const fn = jest.fn()
        render(<Button text="Load More" onClick={fn} />)
        const button = screen.getByRole('button',{name: /load more/i})
        //Chamar a função
        //fireEvent.click(button)

        //Torna o evento mais natural ou real
        userEvent.click(button)

        //expect(fn).toHaveBeenCalled() -- Ver se a função foi chamado
        expect(fn).toHaveBeenCalledTimes(1)//Chamar apenas uma vez
    })
    it("should be disabled when disable is true", ()=>{
        render(<Button text="Load more" disabled={true} />)
        const button = screen.getByRole('button', {name: /load more/i})

        expect(button).toBeDisabled()
    })
    it("should be disabled when disable is false", ()=>{
        render(<Button text="Load more" disabled={false } />)
        const button = screen.getByRole('button', {name: /load more/i})

        expect(button).toBeEnabled()
    })
})
