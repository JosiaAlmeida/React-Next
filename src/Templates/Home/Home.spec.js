import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import Home from "."
import {rest} from 'msw'
import {setupServer} from 'msw/node'

/*const handlers = [
    rest.get(`https://jsonplaceholder.typicode.com/posts`, async (req,res, ctx)=>{
        return res(
            ctx.json([
                {
                    userId:1,
                    id: 1,
                    title: `TITLE 1`,
                    body: `BODY  1`
                },

                {
                    userId:2,
                    id: 2,
                    title: `TITLE 2`,
                    body: `BODY 2`

                }
            ])
        )
    })
]*/

//const server = setupServer(...handlers)

describe('<Home />', () => {
    /*beforeAll(()=>{
        server.listen()
    })
    afterAll(()=>{
        server.close()
    })*/
    it('should render search, posts and load more', async () => {
        render(<Home />)
        const noMorePost = screen.getByText("Não existem posts")

        //expect.assertions(2)

        const search = screen.getByPlaceholderText(/type your search/i)
        const button = screen.getByText(/load more post/i)
        expect(button).toBeInTheDocument()
        expect(search).toBeInTheDocument()

        await waitForElementToBeRemoved(noMorePost)
        screen.debug()
    })

})
