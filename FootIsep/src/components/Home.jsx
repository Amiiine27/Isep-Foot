import React from 'react';
import Timer from './Timer';
import five from '../assets/five-auber.jpg'
import field from '../assets/field.jpg'
import '../style/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>

        <section className="home">

            <div className='title'>
                <h1>Le Foot à L'ISEP</h1>
            </div>

            <div className='next-match Aku'>
            
                <h1 className='match-title'>Prochain évenement dans : <Timer targetDate="2025-01-06T00:00:00"/></h1>
                
                <div className="sides">

                    <div className="left">
                        <p>Voir les compos</p>
                        <Link className='compo' to="/match"></Link>
                    </div>
                        
                    <div className="right">
                        <h1 className='location-title'>à : Urban Soccer - Porte d'Aubervilliers</h1>
                        <img className='location-image' src={five} alt="" />
                    </div>

                </div>
                
                
            </div>

        </section>
        
        </>
    );
}

export default Home;
