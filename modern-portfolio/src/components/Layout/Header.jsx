const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Your Name</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                        <li><a href="#publications" className="hover:text-gray-400">Publications</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;