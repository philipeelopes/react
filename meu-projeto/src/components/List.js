import Item from './Item'


function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
       <Item marca="lamborghini" ano_lancamento={1986}/>
       <Item marca="porsche" ano_lancamento={2025}/>
       <item marca="bmw" ano_lancamento={1990}/>
       <Item/>
        </ul>

        </>
    )
}

export default List