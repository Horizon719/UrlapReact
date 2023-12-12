import { URLAPLEIRO } from "../model/urlapLeiro";

export default function FoUrlap(props){
    const adat={}
    function adatKuld(event){
        event.preventDefault();
        console.log(adat);
        props.adatKap(adat);
    }
    function adatValt(event){
        console.log(event.target.id);
        console.log(event.target.value);
        adat[event.target.id] = event.target.value
        console.log(adat);
    }
    return(
        <form onSubmit={adatKuld}>
            {Object.keys(URLAPLEIRO).map((kulcs, index) => {
                let elem = URLAPLEIRO[kulcs];
                return(
                    
                    <div className="mb-3 mt-3" key={index}>
                    <label htmlFor={kulcs} className="">
                        {elem.megjelenes}
                    </label>
                    <input 
                        type={elem.tipus} 
                        className="form-control" 
                        id={kulcs} 
                        placeholder={elem.placeholder} 
                        name={kulcs} 
                        onChange={adatValt}></input>
                    </div>
                )
            })}
            <input type="submit" className="btn btn-primary"></input>
        </form>
    )
}