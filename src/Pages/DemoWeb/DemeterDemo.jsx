import React, { useState } from 'react';
import '../../App.css';
import './DemeterDemo.css';
import fincaImagenArriba from '../../Assets/Img/fincaImagenArriba.png'; // Importa la imagen

function DemeterDemo() {
    const [activeZone, setActiveZone] = useState(null);

    const zones = [
        {
            name: 'Zona 1', gridArea: '1 / 1 / 2 / 2', data: {
                title: 'Zona 1',
                indicators: [
                    'Tipo de plantación: Tomates',
                    'Última fecha y hora de monitoreo: 01-08-2024 10:00 AM',
                    'Última fecha y hora de riego: 30-07-2024 04:00 PM',
                    'Temperatura encontrada: 20°C',
                    'Temperatura ideal: 18-22°C',
                    'Humedad: 65%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Normal',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Bajo',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Normal',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Ninguna'
                ]
            }
        },
        {
            name: 'Zona 2', gridArea: '1 / 2 / 2 / 3', data: {
                title: 'Zona 2',
                indicators: [
                    'Tipo de plantación: Lechugas',
                    'Última fecha y hora de monitoreo: 01-08-2024 11:00 AM',
                    'Última fecha y hora de riego: 29-07-2024 06:00 PM',
                    'Temperatura encontrada: 22°C',
                    'Temperatura ideal: 18-22°C',
                    'Humedad: 70%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Bajo',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Normal',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Bajo',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Leve',
                    'Sospecha de plaga: Alta'
                ]
            }
        },
        {
            name: 'Zona 3', gridArea: '1 / 3 / 2 / 4', data: {
                title: 'Zona 3',
                indicators: [
                    'Tipo de plantación: Pimientos',
                    'Última fecha y hora de monitoreo: 01-08-2024 12:00 PM',
                    'Última fecha y hora de riego: 28-07-2024 05:00 PM',
                    'Temperatura encontrada: 25°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 60%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Normal',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Normal',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Alto',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Leve'
                ]
            }
        },
        {
            name: 'Zona 4', gridArea: '1 / 4 / 2 / 5', data: {
                title: 'Zona 4',
                indicators: [
                    'Tipo de plantación: Zanahorias',
                    'Última fecha y hora de monitoreo: 01-08-2024 01:00 PM',
                    'Última fecha y hora de riego: 27-07-2024 07:00 PM',
                    'Temperatura encontrada: 27°C',
                    'Temperatura ideal: 22-27°C',
                    'Humedad: 55%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Alto',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Normal',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Bajo',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Alta',
                    'Sospecha de plaga: Ninguna'
                ]
            }
        },
        {
            name: 'Zona 5', gridArea: '2 / 1 / 3 / 2', data: {
                title: 'Zona 5',
                indicators: [
                    'Tipo de plantación: Cebollas',
                    'Última fecha y hora de monitoreo: 02-08-2024 10:00 AM',
                    'Última fecha y hora de riego: 01-08-2024 04:00 PM',
                    'Temperatura encontrada: 18°C',
                    'Temperatura ideal: 15-20°C',
                    'Humedad: 75%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Bajo',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Bajo',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Normal',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Moderada'
                ]
            }
        },
        {
            name: 'Zona 6', gridArea: '2 / 2 / 3 / 3', data: {
                title: 'Zona 6',
                indicators: [
                    'Tipo de plantación: Calabacines',
                    'Última fecha y hora de monitoreo: 02-08-2024 11:00 AM',
                    'Última fecha y hora de riego: 31-07-2024 06:00 PM',
                    'Temperatura encontrada: 23°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 68%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Normal',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Bajo',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Normal',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Leve',
                    'Sospecha de plaga: Ninguna'
                ]
            }
        },
        {
            name: 'Zona 7', gridArea: '2 / 3 / 3 / 4', data: {
                title: 'Zona 7',
                indicators: [
                    'Tipo de plantación: Espinacas',
                    'Última fecha y hora de monitoreo: 02-08-2024 12:00 PM',
                    'Última fecha y hora de riego: 30-07-2024 05:00 PM',
                    'Temperatura encontrada: 24°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 62%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Normal',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Normal',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Bajo',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Moderada',
                    'Sospecha de plaga: Baja'
                ]
            }
        },
        {
            name: 'Zona 8', gridArea: '2 / 4 / 3 / 5', data: {
                title: 'Zona 8',
                indicators: [
                    'Tipo de plantación: Judías verdes',
                    'Última fecha y hora de monitoreo: 02-08-2024 01:00 PM',
                    'Última fecha y hora de riego: 29-07-2024 07:00 PM',
                    'Temperatura encontrada: 26°C',
                    'Temperatura ideal: 22-27°C',
                    'Humedad: 58%',
                    'Humedad ideal: 60-70%',
                    'Nitrogeno: Alto',
                    'Nitrogeno ideal: 80-100 ppm',
                    'Fosforo: Bajo',
                    'Fosforo ideal: 30-50 ppm',
                    'Potacio: Normal',
                    'Potacio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Moderada'
                ]
            }
        }
    ];
    
    

    const determineZoneState = (indicators) => {
        const temp = parseInt(indicators.find(ind => ind.includes('Temperatura encontrada')).split(': ')[1]);
        const idealTempRange = indicators.find(ind => ind.includes('Temperatura ideal')).split(': ')[1].split('-').map(Number);
        const humidity = parseInt(indicators.find(ind => ind.includes('Humedad')).split(': ')[1]);
        const idealHumidityRange = [40, 60]; // Ejemplo de rango ideal

        // Definir márgenes para estado amarillo
        const tempMargin = 2; // Rango de margen para temperatura en estado amarillo
        const humidityMargin = 10; // Rango de margen para humedad en estado amarillo

        if (temp < idealTempRange[0] - tempMargin || temp > idealTempRange[1] + tempMargin ||
            humidity < idealHumidityRange[0] - humidityMargin || humidity > idealHumidityRange[1] + humidityMargin) {
            return 'red'; // Estado rojo si está fuera del rango ideal
        } else if (temp < idealTempRange[0] || temp > idealTempRange[1] ||
            humidity < idealHumidityRange[0] || humidity > idealHumidityRange[1]) {
            return 'yellow'; // Estado amarillo si está cerca del límite ideal
        }
        return 'green'; // Estado verde si todo está en el rango ideal
    };

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Encuentra la zona correspondiente
        const gridX = Math.floor((x / rect.width) * 4) + 1; // Divide en 4 columnas
        const gridY = Math.floor((y / rect.height) * 2) + 1; // Divide en 2 filas

        const data = zones.find(zone => {
            const [rowStart, colStart, rowEnd, colEnd] = zone.gridArea.split(' / ').map(Number);
            return gridX >= colStart && gridX < colEnd && gridY >= rowStart && gridY < rowEnd;
        });

        setActiveZone(data ? { ...data.data, state: determineZoneState(data.data.indicators) } : null);
    };

    return (
        <div className="demo-container">
            <div className="grid-container" onMouseMove={handleMouseMove}>
                <img
                    src={fincaImagenArriba}
                    alt="Mapa de Finca"
                    className="demo-image"
                />
                {zones.map((zone, index) => (
                    <div
                        key={index}
                        className={`zone ${activeZone && activeZone.title === zone.data.title ? `zone-${activeZone.state}` : ''}`}
                        style={{ gridArea: zone.gridArea }}
                    >
                        {zone.name}
                    </div>
                ))}
            </div>
            <div className="zone-data-section">
                {activeZone ? (
                    <div className="zone-data">
                        <h1>{activeZone.title}</h1>
                        <ul>
                            {activeZone.indicators.map((item, index) => (
                                <ul key={index} className='indicador-container'>
                                    <li>
                                        <strong>{item.split(':')[0]}:</strong></li>
                                    <li>{item.split(':')[1]}</li>
                                </ul>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Posicione el cursor sobre una zona</p>
                )}
            </div>
        </div>
    );
}

export default DemeterDemo;
