
const Cards = ({id, title, description, color, onShowDetail}) => {
    console.log(color);

    return ( 
        <>
        <section className="card" onClick={() => onShowDetail(id)}
            style={{ border: `2px solid ${color}` }}>
            <h2>{title}</h2>
            <h3>{description}</h3>
         
        </section>
        </>
     );
}
 
export default Cards;