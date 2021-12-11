import { useState } from 'react'

interface Props {
    href: string
}

const Hamburger = ({href}: Props) => {

    let dropDownMenu = (
        <ul className="dropDownMenu">
            <li>
                <a href={href}>My Work</a>
            </li>
        </ul>
    )

    const [IsOpen, setIsOpen] = useState({
        isOpen: false
    })

    if (IsOpen.isOpen) {
        return (
            <div className="hamburger" onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}>       
            <svg viewBox="0 0 100 70" width="35" height="35">
                <rect width="100" height="20" ></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="90" height="20"></rect>
            </svg> {dropDownMenu}   
    </div>
        )
    } else {
        return (
            <div className="hamburger" onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}>       
            <svg viewBox="0 0 100 70" width="35" height="35">
                <rect width="100" height="20" ></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="90" height="20"></rect>
            </svg>     
    </div>
        )
    }
    
}

  
export default Hamburger