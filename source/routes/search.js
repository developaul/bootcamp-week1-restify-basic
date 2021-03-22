/**
 * {{url}}/api/search/profile/name/:name
 * {{url}}/api/search/profile/dni/:dni
 * {{url}}/api/search/profile/created/:date
 */

import { Router } from 'restify-router';

import { profileController } from '../controllers';

const router = new Router();

router.get('/profile/name/:firstname', (req, res) => {

  const { firstname } = req.params.firstname;

  try {
    const response = profileController.resolveProfilesByName(firstname);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

router.get('/profile/dni/:docnumber', (req, res) => {

  const docnumber = Number(req.params.docnumber);

  try {
    const response = profileController.resolveProfilesByDocNumber(docnumber);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

router.get('/profile/created/:createdat', (req, res) => {

  const createdat = new Date(req.params.createdat);

  try {
    const response = profileController.resolveProfilesByCreatedAt(createdat);
    res.json(response);
  } catch (error) {
    res.json({
      error: error.message,
      success: false
    });
  }
});

export default router;

// ruta / busqueda por nombre
// ruta / busqueda por dni
// ruta / busqueda por perfiles entre fecha de creacion