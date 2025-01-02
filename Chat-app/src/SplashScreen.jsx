import AppIcon from "./assets/app-icon.png"
import { motion } from 'framer-motion';
function Splash(){

    return(
        <motion.div className="spalsh-background">
            <motion.div className="splash-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}>
            <img src={AppIcon} alt="icon" ></img><br/>
           <h1>hermes</h1>
           <p>From Dev Hive</p>
           </motion.div>
        </motion.div>
    )
}

export default Splash