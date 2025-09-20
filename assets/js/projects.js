// Datos de los proyectos
const projectsData = {
    proyecto1: {
        title: "Hollow Knight: Silksong",
        description: "Desarrollo de interfaz para videojuego indie con tecnologías web modernas. Implementación de animaciones fluidas y diseño responsivo para una experiencia de usuario inmersiva.",
        image: "../assets/images/projects/proyecto1.svg",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Animaciones fluidas con CSS y JavaScript",
            "Diseño responsivo para múltiples dispositivos",
            "Optimización de rendimiento para experiencia de juego fluida"
        ],
        demoLink: "#",
        codeLink: "#"
    },
    proyecto2: {
        title: "Tienda Online",
        description: "Plataforma e-commerce con carrito de compras y pasarela de pagos integrada. Sistema completo con gestión de inventario, perfiles de usuario y panel de administración.",
        image: "../assets/images/projects/proyecto2.svg",
        technologies: ["React", "Node.js", "MongoDB"],
        features: [
            "Carrito de compras con persistencia de datos",
            "Integración con pasarela de pagos",
            "Panel de administración para gestión de productos"
        ],
        demoLink: "#",
        codeLink: "#"
    },
    proyecto3: {
        title: "Aplicación Móvil",
        description: "App multiplataforma para gestión de tareas y productividad personal. Incluye sistema de notificaciones, sincronización en la nube y estadísticas de productividad.",
        image: "../assets/images/projects/proyecto3.svg",
        technologies: ["Flutter", "Firebase", "Dart"],
        features: [
            "Sincronización en tiempo real con Firebase",
            "Notificaciones programables",
            "Modo offline con sincronización posterior"
        ],
        demoLink: "#",
        codeLink: "#"
    }
};

// Elementos DOM
const modal = document.getElementById('previewModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalMainImage = document.getElementById('modalMainImage');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalFeatures = document.getElementById('modalFeatures');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalCodeLink = document.getElementById('modalCodeLink');
const closeModal = document.querySelector('.close-modal');

// Función para abrir el modal con la información del proyecto
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project) return;
    
    // Actualizar contenido del modal
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalMainImage.src = project.image;
    modalMainImage.alt = project.title;
    
    // Actualizar tecnologías
    modalTechnologies.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        modalTechnologies.appendChild(tag);
    });
    
    // Actualizar características
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Actualizar enlaces
    modalLiveLink.href = project.demoLink;
    modalCodeLink.href = project.codeLink;
    
    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
}

// Cerrar modal
function closeProjectModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restaurar scroll
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Botones de vista previa
    const previewButtons = document.querySelectorAll('.preview-button');
    previewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Cerrar modal con el botón X
    closeModal.addEventListener('click', closeProjectModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeProjectModal();
        }
    });
});