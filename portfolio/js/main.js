// Config object for better maintenance
const CONFIG = {
    typingSpeed: 50,
    backSpeed: 30,
    theme: {
        light: 'light',
        dark: 'dark'
    }
};

// Project data moved to separate module
import { projects } from './data/projects.js';

// Initialize app
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    initializeTyping();
    initializeTheme();
    renderProjects();
}

function initializeTyping() {
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: CONFIG.typingSpeed,
        backSpeed: CONFIG.backSpeed,
        loop: true
    });
}

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 
                      (prefersDark.matches ? CONFIG.theme.dark : CONFIG.theme.light);
    document.documentElement.classList.toggle('dark', savedTheme === CONFIG.theme.dark);
    
    // Theme toggle handler
    themeToggle?.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const currentTheme = document.documentElement.classList.contains('dark') ? 
                           CONFIG.theme.dark : CONFIG.theme.light;
        localStorage.setItem('theme', currentTheme);
    });
}

function renderProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) return;

    const projectHTML = projects
        .map(project => createProjectCard(project))
        .join('');
    
    projectsContainer.innerHTML = projectHTML;
}

function createProjectCard({ title, description, link }) {
    return `
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <h3 class="text-xl font-bold mb-2">${escapeHTML(title)}</h3>
            <p class="mb-4">${escapeHTML(description)}</p>
            <a href="${escapeHTML(link)}" class="text-blue-600 hover:underline">Learn more →</a>
        </div>
    `;
}

// Security: Escape HTML to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}