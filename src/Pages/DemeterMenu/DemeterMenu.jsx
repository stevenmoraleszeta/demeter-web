import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './DemeterMenu.css';
import { FaMap, FaTasks, FaBoxes, FaUser, FaChalkboardTeacher, FaLeaf, FaBrain, FaCircle, FaBook } from 'react-icons/fa';

function DemeterMenu() {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        if(path == 'mapa'){
            navigate(`/demeter/map`);
        }else{
            alert('Estas y otras funcionalidades se implementarán en un futuro. Prueba con el mapa de finca.')
        }
    };

    return (
        <div className="demeter-menu">
            <div className="menu-button" onClick={() => handleButtonClick('mapa')}>
                <FaMap className="menu-icon" />
                <div className="menu-text">Mapa de Finca</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('')}>
                <FaBook className="menu-icon" />
                <div className="menu-text">Tutorial Prototipo</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('tareas')}>
                <FaTasks className="menu-icon" />
                <div className="menu-text">Tareas</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('inventario')}>
                <FaBoxes className="menu-icon" />
                <div className="menu-text">Inventario</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('personal')}>
                <FaUser className="menu-icon" />
                <div className="menu-text">Personal</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('capacitaciones')}>
                <FaChalkboardTeacher className="menu-icon" />
                <div className="menu-text">Capacitaciones</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('recursos-ecologicos')}>
                <FaLeaf className="menu-icon" />
                <div className="menu-text">Recursos Ecológicos</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('inteligencia-artificial')}>
                <FaBrain className="menu-icon" />
                <div className="menu-text">Inteligencia artificial</div>
            </div>
            <div className="menu-button" onClick={() => handleButtonClick('')}>
                <FaCircle className="menu-icon" />
                <div className="menu-text">Otros</div>
            </div>
        </div>
    );
}

export default DemeterMenu;
