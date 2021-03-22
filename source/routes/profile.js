import { Router } from 'restify-router';

import { PROFILE } from '../controllers'

const router = new Router();
const profileController = new PROFILE();

router.get('/full', (req, res) => {
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

router.get('/basic', (req, res) => {
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

router.get('/info', (req, res) => {
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

export default router;