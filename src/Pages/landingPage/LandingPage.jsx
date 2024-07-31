import React from 'react';
import '../../App.css';
import './LandingPage.css';

function LandingPage() {
    return (
        <>
            <header className="page-header">
                <h1 className='header-title'>Demeter</h1>
                <p className="header-pharse">Revoluciona la agricultura con tecnología avanzada</p>
                <a href="#demeter-info" className="header-button">Descubre Más</a>
            </header>

            <section id="demeter-info" className="demeter-info">
                <h2 className="demeter-info-description">Demeter es un sistema avanzado diseñado para transformar la agricultura mediante la integración de tecnología y automatización. Utilizando dispositivos de recolección de datos y sistemas automatizados, Demeter optimiza todo el proceso de producción alimentaria. Nuestro objetivo es proporcionar alimentos de alta calidad a todas las personas, al mismo tiempo que promovemos prácticas agrícolas sostenibles y apoyamos a la comunidad agrícola. Al mejorar la eficiencia y reducir el impacto ambiental, Demeter contribuye a un futuro más saludable y sostenible para todos.</h2>
            </section>

            <section className="devices-container">
                <div className="device">
                    <h2>Sensor Terrestre</h2>
                    <p>Recolección de datos, humedad, temperatura, nutrientes.</p>
                </div>
                <div className="device">
                    <h2>Sistema de Riego Inteligente</h2>
                    <p>Automatización y eficiencia del riego de agua y otros compuestos.</p>
                </div>
                <div className="device">
                    <h2>Sistema de Administración</h2>
                    <p>Manejo de cultivos, inventarios, zonas, gráficos, fechas, tareas, entre otros.</p>
                </div>
            </section>

            <section className="demo-access">
                <h2>Prueba Nuestra Plataforma</h2>
                <a href="/demeter-demo" className="demo-button" target="_blank" rel="noopener noreferrer">Acceder a la Demo Web</a>
            </section>

            <section className="video-demo">
                <h2>Video Demo</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
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
