interface workProps {
    title: string
    subtitle: string
}

const Work = ({title, subtitle}: workProps) => 
<div className="work">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <img id="pokedex" src="/pics/pokedex.png" alt="Pokédex project"/>
</div>

export default Work