interface Props {
    href: string
}

const Navbar = ({href}: Props) => 
    <div className="navbar">
        <a id="homeBtn" href={href}>Home</a>
        <a id="mailBtn" href="mailto: yntebraaksma@gmail.com">E-mail me</a>
    </div>


export default Navbar