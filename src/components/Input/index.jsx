import './style.css'
export const Input = ({search, handlesearchPost}) => {
    return (
        <>
            {
                !!search && (
                    <>
                        <h1>Busca {search}</h1>
                    </>
                )
            }
            < input type="text" className='text-input' placeholder='type your search' value={search} onChange={handlesearchPost} />
        </>
    );
}
