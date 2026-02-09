import "./Header.css";

export default function Header({title, color, year, card}) {
    return (
        <header>
            {card}
            
            <h1>{title}    {color}  { year}</h1>
            <nav>
                 <a href="#">Home</a>
                 <a href="#">About</a>
                 <a href="#">Contact</a>
            </nav>
        </header>
    )
}