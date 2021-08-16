import { render, screen } from "@testing-library/react"
import {PostCard} from '.'
import {PostCardMock} from './mock'

const Props = PostCardMock
describe('<PostCard />',()=>{
    it('should render PostCard correctly', ()=>{
        render(<PostCard {...Props} /> )
        expect(screen.getByRole('img', {name: /title 1/i})).toHaveAttribute('src', Props.cover)
        expect(screen.getByRole('heading', {name: /title 1/i})).toBeInTheDocument()//Pegando cabeçalho
        expect(screen.getByText('body 1')).toBeInTheDocument() //Pegando textos
    })
    it('should match snapshot', ()=>{
        const {container} = render(<PostCard {...Props} /> )
        expect(container.firstChild).toMatchSnapshot()
    })
})