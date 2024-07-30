import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Demeter</h1>
                <p className="tagline">Revoluciona la agricultura con tecnología avanzada</p>
                <button className="cta-button">Descubre Más</button>
            </header>
            <section className="demo-access">
                <h2>Prueba Nuestra Plataforma</h2>
                <a href="/demeter-demo" className="demo-button" target="_blank" rel="noopener noreferrer">Acceder a la Demo Web</a>
            </section>

            <section className="features">
                <div className="feature">
                    <div className="feature-icon">🌍</div>
                    <h2>Sistema Computacional y Móvil</h2>
                    <p>Recolección de datos y activación de riego desde cualquier lugar.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">🌱</div>
                    <h2>Dispositivo de Sensores Terrestres</h2>
                    <p>Monitoreo preciso de condiciones del suelo para una agricultura más eficiente.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">💧</div>
                    <h2>Sistema de Riego Automatizado</h2>
                    <p>Riego eficiente y programable para optimizar el uso de agua.</p>
                </div>
            </section>
            <section className="video-demo">
                <h2>Video Demo</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/mrjzUFPloiY"
                        title="Video Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <footer className="App-footer">
                <p>&copy; {new Date().getFullYear()} Demeter. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
