import React from 'react';
import './Profile.css';
import '../../App.css';
import profileImage from '../../Assets/Img/StevenMorales.png';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={profileImage} alt="Steven Morales Fallas" />
            </div>
            <div className="profile-info">
                <h1>Steven Morales Fallas</h1>
                <b className='roles'>Desarrollador de Software, Diseñador, Profesor y Emprendedor.</b>
                <p>
                Me destaco por mi alta creatividad y habilidades excepcionales, impulsado por una profunda pasión por la innovación y la mejora continua del mundo. Mi entusiasmo se extiende a diversas áreas de STEAM, donde siempre busco nuevas formas de crear y desarrollar. Si tuviera que describirme en seis palabras, serían: innovador, adaptable, ambicioso, autodidacta, eficiente e ingenioso.
                </p>
                <p className='quote'>
                "Las personas que están lo suficientemente locas como para pensar que pueden cambiar el mundo son las que lo hacen" Steve Jobs
                </p>
            </div>
        </div>
    );
}

export default Profile;
