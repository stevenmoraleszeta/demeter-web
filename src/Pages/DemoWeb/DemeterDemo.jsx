import React, { useState } from 'react';
import './DemeterDemo.css';

const initialZones = [
    { id: 1, name: 'Zona 1', temperature: 22, humidity: 55, nutrients: 'Adecuado' },
    { id: 2, name: 'Zona 2', temperature: 24, humidity: 60, nutrients: 'Alto' },
    { id: 3, name: 'Zona 3', temperature: 21, humidity: 50, nutrients: 'Bajo' },
];

function DemeterDemo() {
    const [zones, setZones] = useState(initialZones);
    const [irrigationActive, setIrrigationActive] = useState(false);
    const [inventory, setInventory] = useState({
        water: 1000,
        fertilizer: 500,
        seeds: 200,
    });

    const toggleIrrigation = () => {
        setIrrigationActive(!irrigationActive);
    };

    const updateZoneInfo = (id, data) => {
        setZones(zones.map(zone =>
            zone.id === id ? { ...zone, ...data } : zone
        ));
    };

    return (
        <div className="demo-web">
            <header className="demo-header">
                <h1>Demeter - Plataforma de Gestión de Finca</h1>
                <button onClick={toggleIrrigation} className="irrigation-button">
                    {irrigationActive ? 'Desactivar Riego' : 'Activar Riego'}
                </button>
            </header>

            <section className="zones-info">
                <h2>Información de Zonas</h2>
                {zones.map(zone => (
                    <div key={zone.id} className="zone">
                        <h3>{zone.name}</h3>
                        <p><strong>Temperatura:</strong> {zone.temperature}°C</p>
                        <p><strong>Humedad:</strong> {zone.humidity}%</p>
                        <p><strong>Nutrientes:</strong> {zone.nutrients}</p>
                        <button onClick={() => updateZoneInfo(zone.id, { temperature: zone.temperature + 1 })}>
                            Aumentar Temperatura
                        </button>
                        <button onClick={() => updateZoneInfo(zone.id, { humidity: zone.humidity + 5 })}>
                            Aumentar Humedad
                        </button>
                    </div>
                ))}
            </section>

            <section className="inventory-management">
                <h2>Manejo del Inventario</h2>
                <p><strong>Agua:</strong> {inventory.water} L</p>
                <p><strong>Fertilizante:</strong> {inventory.fertilizer} kg</p>
                <p><strong>Semillas:</strong> {inventory.seeds} unidades</p>
            </section>
        </div>
    );
}

export default DemeterDemo;
