import CartWidget from "./CartWidget";
import Barra from "./Barra";
import '../App.css';

const NavVar = ({greeting}) => {
    return (
    
    <div className="divBarra">
        <Barra/>
        <p>{greeting}</p>
        <CartWidget/>
    </div>
    )
}

export default NavVar;