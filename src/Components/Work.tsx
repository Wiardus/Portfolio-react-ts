import github from './GitHub-Emblem.png'

interface workProps {
    title: string
    subtitle?: string
}

const Work = ({title, subtitle}: workProps) => 
<div className="work">
    <h2 id="workTitle">{title}</h2>
    <h3>{subtitle}</h3>
    <a target="blank" href="https://github.com/Wiardus">
        <img id="github" src={github} alt="Github"/>
    </a>   
</div>

export default Work