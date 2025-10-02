function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boaa: </h3>
            
            {itens.length > 0 ?(
            itens.map((item, index) => <p key={index}>{item}</p>)
        
            ) : (
                <p>Nao há itens na lista</p>
            )}

        </>
    )
}

export default OutraLista

