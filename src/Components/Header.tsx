import Arrow from './Arrow'
import ynte from './Tesla ynte.jpeg';



interface headerProps {
    title: string
    subtitle: string
}

const Header = ({title, subtitle}: headerProps) => 
<div className="header">
    <h1>{title}</h1> <h2>{subtitle}</h2>
    <div className="profielfoto">
        <img src={ynte} alt="profielfoto" id="profielfoto"/>     
    </div>   
    <Arrow />
</div>


export default Header