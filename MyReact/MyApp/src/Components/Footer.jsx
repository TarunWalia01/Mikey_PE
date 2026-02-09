import "./Footer.css";

export default function Footer(props) {
    return(
    <footer class="footer">
        <p>{props.year[2]}{ props.company.name}{ props.company.name}</p>
    </footer>
    )
}