import mountHandler from './mountHandler.js'
import runHandler from './runHandler.js'
import stepHandler from './stepHandler.js'
import backHandler from './backHandler.js'

export default (module, error) => {
    if (module === 'mount'){ 
        mountHandler(error)
    }
    
    if (module === 'run') {
        runHandler(error)
    }
    
    if (module === 'step') {
        stepHandler(error)
    }
    
    if (module === 'back') {
        backHandler(error)
    }
}
