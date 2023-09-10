import express from "express"
const router=express.Router()
import { getAllData,removeBook } from "../controllers/controller.js";

router.route("/").get(getAllData)
router.route("/:id").delete(removeBook)
export default router;

