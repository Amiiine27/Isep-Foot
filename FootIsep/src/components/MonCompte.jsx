import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import pp from './../assets/toji.jpg';
import './../style/MonCompte.css';

function MonCompte() {
    const [image, setImage] = useState(pp); // Image actuelle
    const [cropping, setCropping] = useState(false); // Activer/Désactiver le mode rognage
    const [crop, setCrop] = useState({ x: 0, y: 0 }); // Position du rognage
    const [zoom, setZoom] = useState(1); // Zoom pour le rognage
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null); // Zone rognée

    // Fonction pour lire l'image sélectionnée
    const updateProfilePic = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result); // Met à jour l'image dans le state
            };

            reader.readAsDataURL(input.files[0]); // Lire le fichier comme URL
        }
    };

    // Fonction pour convertir la zone rognée en image
    const getCroppedImage = async () => {
        const canvas = document.createElement('canvas');
        const img = new Image();

        return new Promise((resolve, reject) => {
            img.onload = () => {
                canvas.width = croppedAreaPixels.width;
                canvas.height = croppedAreaPixels.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(
                    img,
                    croppedAreaPixels.x,
                    croppedAreaPixels.y,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height,
                    0,
                    0,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height
                );

                // Convertir le canvas en URL d'image
                resolve(canvas.toDataURL('image/jpeg'));
            };

            img.onerror = (error) => reject(error);
            img.src = image;
        });
    };

    // Fonction pour gérer la validation du rognage
    const handleCropComplete = async () => {
        try {
            const croppedImage = await getCroppedImage();
            setImage(croppedImage); // Mettre à jour l'image rognée
            setCropping(false); // Quitter le mode rognage
        } catch (error) {
            console.error('Erreur lors du rognage :', error);
        }
    };

    return (
        <div>
            <h1 className="name">Mon compte</h1>
            <div className="monCompte">
    <div
        className={`profile-pic ${cropping ? 'blocked' : ''}`}
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <input
            type="file"
            className="pp"
            accept="image/*"
            onChange={updateProfilePic}
        />
    </div>
    {!cropping && (
        <button
            className="crop-button"
            onClick={() => setCropping(true)}
        >
            Rogner la photo
        </button>
    )}
    {cropping && (
        <div className="crop-container">
            <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1} // Pour un carré
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(croppedArea, croppedPixels) =>
                    setCroppedAreaPixels(croppedPixels)
                }
            />
            <div className="crop-buttons">
                <button
                    className="crop-button"
                    onClick={handleCropComplete}
                >
                    Valider le rognage
                </button>
                <button
                    className="crop-button cancel-button"
                    onClick={() => setCropping(false)}
                >
                    Annuler
                </button>
            </div>
        </div>
    )}
</div>

            

        </div>
    );
}

export default MonCompte;
