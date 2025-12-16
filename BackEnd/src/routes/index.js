// backend/src/http/index.js
import express from 'express';
import authRouter from './auth.routes.js';
import ownerRouter from './owner.routes.js';
import insuranceRouter from './insurance.routes.js';
import vehicleRouter from './vehicle.routes.js';

import { InitialService } from "./../services/initial.service.js";

const router = express.Router();

const initialService = new InitialService();

router.use('/auth', authRouter);
router.use('/owner', ownerRouter);
router.use('/insurance', insuranceRouter);
router.use('/vehicle', vehicleRouter);

router.get("/initialDb", async (req, res, next) => {
	try {
		const results = await initialService.initDb(req.body);
		res.status(201).json(results);
	} catch (err) {
		next(err);
	}
});

export default router;
