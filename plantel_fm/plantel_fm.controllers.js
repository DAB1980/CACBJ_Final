import { db } from "./plantel_fm.dao.mysql.js"
import { messages } from "./plantel_fm.data.js"
import { adapters } from "./plantel_fm.adapter.js"


const getPlantel_FM = async (_, res) => {
            const result = await db.getPlantel_FM()
            res.json(result)
       
}


const createPlantel_FM= async (req, res) => {
    const plantel_fm = adapters.plantel_fmAdapter(req.body, req.file)
    const result = await db.createPlantel_FM(plantel_fm)
    result ? res.redirect('/') : res.redirect('/')
}

// Atención al control de errores: Función síncrona
const incomplete = (req, res) => {
    throw Error(4)
}

/*
Atención al control de errores: Función Asíncrona 
necesita next, como si fuese un middleware
*/
const updatePlantel_FM = async (req, res, next) => {
    const { id } = req.params
    const plantel_fm = adapters.plantel_fmAdapter(req.body)
    const result = await db.updatePlantel_FM(id, plantel_fm)
    result.message === '0' ? res.json(messages.upd) : next(result)
}



const deletePlantel_FM = async (req, res, next) => {
    
    const result = await db.deletePlantel_FM(req.params.id)
    result.message === '0' ? res.json(messages.del) : next(result)
}

const getPlantel_FMbyId = async (req, res) => {
    
    const result = await db.getPlantel_FMbyId(req.params.id)
    console.log("vino Plantel",result)
    res.json(result)

}




export const controllers = {
    getPlantel_FM,
    getPlantel_FMbyId,
    createPlantel_FM,
    updatePlantel_FM,
    deletePlantel_FM,
    incomplete
}