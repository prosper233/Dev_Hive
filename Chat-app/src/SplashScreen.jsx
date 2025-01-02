import AppIcon from "./assets/app-icon.png"

function Splash(){

    return(
        <div className="spalsh-background">
            <img src={AppIcon} alt="icon" ></img><br/>
           <h1>hermes</h1>
           <p>From Dev Hive</p>
        </div>
    )
}

export default Splash