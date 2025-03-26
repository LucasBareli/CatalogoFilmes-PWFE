import estilo from './NavBar.module.css';

export function NavBar() {
    return (
        <nav className={estilo.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}