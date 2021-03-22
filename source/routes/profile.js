/**
 * {{url}}/api/profile
 */

import { Router } from 'restify-router';

import { profileController } from '../controllers';

const router = new Router();

router.get('/full/:id', (req, res) => {

  const id = Number(req.params.id);

  try {
    const response = profileController.resolveFullProfileById(id);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

router.get('/basic/:id', (req, res) => {

  const id = Number(req.params.id);

  try {
    const response = profileController.resolveBasicProfileById(id);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

router.get('/info/:id', (req, res) => {

  const id = Number(req.params.id);

  try {
    const response = profileController.resolveInfoProfileById(id);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

export default router;