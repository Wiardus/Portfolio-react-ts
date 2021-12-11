import Hamburger from './Hamburger'

interface Props {
    href: string
    hamburgerHref: string
}

const Navbar = ({href, hamburgerHref}: Props) => 
    <div className="navbar">
        <a id="homeBtn" href={href}>Home</a>
        <a id="mailBtn" href="mailto: yntebraaksma@gmail.com">E-mail me</a>
        <Hamburger href={hamburgerHref} />
    </div>


export default Navbar