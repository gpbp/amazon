import express from 'express';
import User from '../model/user';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
	try {
		const user = new User({
			name: 'Basir',
			email: 'trung@gmail.com',
			password: '1234',
			isAdmin: true
		});
		const newUser = await user.save();
		res.send(newUser);
	} catch (error) {
		res.send({ msg: error.message });
	}
});

export default router;

