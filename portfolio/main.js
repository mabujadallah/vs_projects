// Typing effect
new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
});

// Check saved theme
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
}

// Project data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        link: "#"
    },
    // Add more projects here
];

// Populate projects
const projectsContainer = document.querySelector('#projects .grid');
projects.forEach(project => {
    projectsContainer.innerHTML += `
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="mb-4">${project.description}</p>
            <a href="${project.link}" class="text-blue-600 hover:underline">Learn more →</a>
        </div>
    `;
});