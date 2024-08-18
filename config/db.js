import mongoose from "mongoose";

const DB_NAME = "menu-management-db";

const connect = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGO_URI}`
		);
		console.log(
			`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
		);
	} catch (error) {
		console.log("MONGO DB FAILED", error);
		process.exit(1);
	}
}

export default connect;