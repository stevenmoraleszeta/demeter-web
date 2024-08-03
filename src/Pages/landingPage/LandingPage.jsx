import React from 'react';
import '../../App.css';
import './LandingPage.css';

function LandingPage() {
    return (
        <>
            <header className="page-header">
                <h1 className='header-title'>DEMETER</h1>
                <p className="header-pharse">Revoluciona la agricultura con tecnología avanzada</p>
                <a href="#demeter-info" className="header-button">Descubre Más</a>
            </header>

            <section id="demeter-info" className="demeter-info">
                <h2 className="demeter-info-description">Demeter es un sistema avanzado que transforma la agricultura mediante tecnología y automatización. Optimiza la producción alimentaria con dispositivos de recolección de datos y sistemas automatizados. Nuestro objetivo es proporcionar alimentos de alta calidad, promoviendo prácticas agrícolas sostenibles y apoyando a la comunidad agrícola. Demeter minimiza el uso de recursos naturales, reduce la huella de carbono y protege la biodiversidad, mejorando la eficiencia y evitando la contaminación. Empoderamos a los agricultores locales con acceso a tecnologías avanzadas y datos precisos, promoviendo la equidad y el desarrollo económico. Con Demeter, la agricultura del futuro es verde, justa y próspera.</h2>
            </section>

            <section className="devices-container">
                <div className="device">
                    <h2>Dispositivo Hormiga</h2>
                    <p>Recolección de datos (humedad, temperatura, nutrientes, enfermedades, plagas).</p>
                </div>
                <div className="device">
                    <h2>Sistema de Administración</h2>
                    <p>Visualización y análisis de datos.</p>
                    <p>Manejo de cultivos, inventarios, zonas, fechas, tareas, entre otros.</p>
                </div>
            </section>
            <section className="demo-access">
                <h1>Prueba el Simulador del Sistema Demeter</h1>
                <p className="demo-access-description">El prototipo está diseñado para ilustrar cómo funcionaría el prototipo en una finca real, brindando una visión clara y práctica de su impacto y operación en un entorno agrícola auténtico.</p>
                <a href="/demeter-demo" className="demo-button" target="_blank" rel="noopener noreferrer">Acceder al Prototipo</a>
            </section>
            <section className="video-demo">
                <h2>Mi Proyecto en Dos Minutos</h2>
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/mrjzUFPloiY"
                        title="Video Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
