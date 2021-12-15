import github from './GitHub-Emblem.png'

interface workProps {
    title: string
    subtitle?: string
}

const Work = ({title, subtitle}: workProps) => 
<div className="work">
    <h2 id="workTitle">{title}</h2>
    <a target="blank" href="https://whisper-chat-app.vercel.app/">Visit my social media app Whisper! <br /> Use the username Ynte and password 123 to login</a><a target="blank" href="https://github.com/Wiardus">
    <a target="blank" href="https://guitar-masters.vercel.app/">Visit my Guitar Masters app!</a>
    <h3>{subtitle}</h3>  
        <img id="github" src={github} alt="Github"/>
    </a>   
</div>

export default Work