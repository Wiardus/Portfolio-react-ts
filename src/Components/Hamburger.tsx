function knopje () {
    alert('This button is still under construction...')
    
}

const Hamburger = () => 
    <div className="hamburger" onClick={knopje}>       
            <svg viewBox="0 0 100 70" width="35" height="35">
                <rect width="100" height="20" ></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="90" height="20"></rect>
            </svg>     
    </div>

  
export default Hamburger