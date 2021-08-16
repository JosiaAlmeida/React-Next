import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
//import userEvent from "@testing-library/user-event"
import { Input } from "."

describe('<Input />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<Input handlesearchPost={fn} search={'testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i)

        expect(input.value).toBe('testando')
    })
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn()
        render(<Input handlesearchPost={fn} />)

        const input = screen.getByPlaceholderText(/type your search/i)
        const value = 'o valor'
        userEvent.type(input, value)
        //Tornando o valor do input o value
        expect(input.value).toBe(value)
        //Verificar se for chamado na quantidade de digitos
        expect(fn).toHaveBeenCalledTimes(value.length)
    })
})
