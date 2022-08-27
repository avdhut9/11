const Card=({data=[]})=>{
 
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        
                        <h1>Hero Name:{item.Name}</h1>
                        <h2>Height:{item.Height}</h2>
                        <h2>Weight:{item.Weight}</h2>
                        <h2>Power Level:{item.PowerLevel}</h2>
            
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
