import { render, screen } from "@testing-library/react"
import { Button } from "."

describe('<Button />',()=>{
    it('should render the button with the text "Load More"',()=>{
        render(<Button text="Load More" />)
        const button = screen.getByRole("button", {name: /load more/i})
        expect(button).toBeInTheDocument()
    })
})