import express from "express";
import path from "path";
import { createHelp, deleteHelp, getHelp, getHelps, updateHelp } from "../controllers/help.js";
import Help from "../models/Help.js";
import { verifyUser, verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", verifyUser, (req, res) => {
    res.render(path.resolve("views/helps.ejs"), {
        username: req.body.username,
        email: req.body.email,
    });
});

//CREATE
router.post("/", createHelp); //create for only
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateHelp);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteHelp);
//GET
router.get("/:id", verifyToken, verifyAdmin, getHelp);
//GET All
router.get("/all", verifyToken, verifyAdmin, getHelps);

export default router;
