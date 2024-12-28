import "../style/Header.css";
import dz from '../assets/dz.png';
import pp from '../assets/toji.jpg';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

function Header() {
    return (
        <>
            <div className="header">
                <Link to="/" className="logo"><img  src={dz} alt="" /></Link>
                

                <ul className="links">
                    <li>
                        <Link className="account" to="/mon-compte"> <img src={pp} alt="" /> Miminho</Link> {/* Lien vers MonCompte */}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
