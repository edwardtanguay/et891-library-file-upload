/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import * as jwttools from "../../jwttools";

import {
	getSingleUser,
	getAllUsers,
	addSingleUser,
	updateSingleUser,
	deleteSingleUser,
	deleteAllUsers,
	loginUser,
	getCurrentUser,
	updateProfile,
} from "../controllers/userController.js";
import multer from "multer";

const storage = multer.diskStorage({
	destination: (req: express.Request, file: any, cb: any) => {
		cb(null, "public/images/users");
	},
	filename: (req: express.Request, file: any, cb: any) => {
		setTimeout(() => {
			cb(null, req.body.fileName);
		}, 500);
	},
});

const upload = multer({ storage });

export const userRouter = express.Router();

userRouter
	.route("/")
	.post(addSingleUser)
	.get(getAllUsers)
	.delete(deleteAllUsers);
userRouter.route("/profile").post(upload.single("file"), updateProfile);
userRouter.route("/current").get(jwttools.verifyToken, getCurrentUser);
userRouter
	.route("/:id")
	.get(getSingleUser)
	.patch(updateSingleUser)
	.delete(deleteSingleUser);
userRouter.route("/login").post(loginUser);
