import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../../App.css';
import './DemeterMenu.css';
import { FaMap, FaTasks, FaBoxes, FaUser, FaChalkboardTeacher, FaLeaf, FaBrain, FaCircle, FaBook } from 'react-icons/fa';

// Configura el elemento raíz para el modal
Modal.setAppElement('#root');

function DemeterMenu() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleButtonClick = (path, message) => {
        if (path === 'mapa') {
            navigate(`/demeter/map`);
        } else if (path === 'ai') {
            navigate(`/demeter/ai`);
        } else if (path === 'tutorial') {
            window.open('https://youtu.be/QOyhXv3qfaI?si=eUaVVCOc5vqhWb7d', '_blank');
        } else {
            setModalMessage(message);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    return (
        <>
            <div className="demeter-menu">
                <div className="menu-button" onClick={() => handleButtonClick('mapa')}>
                    <FaMap className="menu-icon" />
                    <div className="menu-text">Mapa de Finca</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('ai')}>
                    <FaBrain className="menu-icon" />
                    <div className="menu-text">Inteligencia artificial</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('tutorial')}>
                    <FaBook className="menu-icon" />
                    <div className="menu-text">Tutorial Prototipo</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('tareas', 'Próximamente podrás gestionar las tareas de la finca desde aquí. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaTasks className="menu-icon" />
                    <div className="menu-text">Tareas</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('inventario', 'Gestiona el inventario de la finca de forma sencilla. Próximamente disponible. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaBoxes className="menu-icon" />
                    <div className="menu-text">Inventario</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('personal', 'Gestiona tu personal desde esta sección. Disponible próximamente. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaUser className="menu-icon" />
                    <div className="menu-text">Personal</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('capacitaciones', 'Proximamente se mostrarán capacitaciones en temas agrícolas y ecológicos en esta sección. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaChalkboardTeacher className="menu-icon" />
                    <div className="menu-text">Capacitaciones</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('recursos-ecologicos', 'Acá se podrá acceder a recursos ecológicos para tu finca, además de recetas y tutoriales para la creación de los mismos; como agroquímicos verdes. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaLeaf className="menu-icon" />
                    <div className="menu-text">Recursos Ecológicos</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('', 'Otras funcionalidades estarán disponibles próximamente. Pruebe el Mapa de Finca o la Inteligencia Artificial.')}>
                    <FaCircle className="menu-icon" />
                    <div className="menu-text">Otros</div>
                </div>

                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                    contentLabel="Información de funcionalidad"
                    className="modal"
                    overlayClassName="modal-overlay"
                >
                    <h2>Funcionalidad Próxima</h2>
                    <p>{modalMessage}</p>
                    <button onClick={closeModal}>Cerrar</button>
                </Modal>
            </div>
        </>
    );
}

export default DemeterMenu;
