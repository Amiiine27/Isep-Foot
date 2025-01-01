import React, { useState } from 'react';
import pp from './../assets/toji.jpg';
import './../style/MonCompte.css';

function MonCompte() {
    // State pour gérer l'image
    const [image, setImage] = useState(pp);

    // Fonction pour mettre à jour l'image
    const updateProfilePic = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            // Lire le fichier sélectionné
            reader.onload = (e) => {
                setImage(e.target.result); // Met à jour l'image dans le state
            };

            reader.readAsDataURL(input.files[0]); // Lire le fichier
        }
    };

    return (
        <div>
            <h1 className="name">Mon compte</h1>
            <div className="monCompte">
                <div
                    className="profile-pic"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '250px',
                        height: '250px',   
                        overflow: 'hidden',
                    }}
                >
                    <input
                        type="file"
                        className="pp"
                        accept="image/*"
                        onChange={updateProfilePic}
                    />
                </div>
            </div>
        </div>
    );
}

export default MonCompte;
