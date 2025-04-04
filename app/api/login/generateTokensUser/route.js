import { UserToken } from "@/models/usertoken.model";
import jwt from "jsonwebtoken";

export async function generateTokens(user){
    try {
        const payload = {
            _id: user._id,
        };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "5d",
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "30d",
        });

        const userToken = await UserToken.findOne({ userId: user._id });
        if (userToken) await userToken.deleteOne();

        await new UserToken({ userId: user._id, token: refreshToken }).save();
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};

