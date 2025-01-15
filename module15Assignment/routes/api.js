import express from 'express';
const router = express.Router();
import * as Controller from "../app/controllers/controller.js";



router.get("/show-hello",Controller.showHello);
router.get("/show-token",Controller.showToken);
router.post("/post-response",Controller.postResponse);



export default router;