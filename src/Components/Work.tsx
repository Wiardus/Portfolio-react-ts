interface workProps {
    title: string
    subtitle: string
}

const Work = ({title, subtitle}: workProps) => 
<div className="work">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <a target="blank" href="https://github.com/Wiardus">
        <img id="github" src="/pics/GitHub-Emblem.png" alt="Github"/>
    </a>
    
</div>

export default Work