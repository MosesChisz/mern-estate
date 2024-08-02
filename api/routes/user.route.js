import express from 'express';
import { deleteteUser, test, updateUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteteUser);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;