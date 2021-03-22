import { createServer } from 'restify';
import {PROFILE} from '../controllers'

// por implementar Restify Router

const profileController = new PROFILE()

const server = createServer();

server.get('/profile/full', (req, res)=> {
    try {
        const response = profileController.resolveFullProfile()
        res.json(response)
    } catch (error) {
        res.json({
            error: error.message,
            success: false
        })
    }
})

server.get('/profile/basic', (req, res)=> {
    try {
        const response = profileController.resolveBasicProfile()
        res.json(response)
    } catch (error) {
        res.json({
            error: error.message,
            success: false
        })
    }
})

server.get('/profile/info', (req, res)=> {
    try {
        const response = profileController.resolveInfoProfile()
        res.json(response)
    } catch (error) {
        console.log("🚀 ~ server.get ~ error", error)
        res.json({
            error: error.message,
            success: false
        })
    }
})


export default server