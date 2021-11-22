import prisma  from "../../../prisma/prismaClient";
import UserHandlers from "./interfaces";

const getAll: UserHandlers["getAll"] = async (req, res, next) => {
    // TODO 
    // try {
    //     const users = await prisma.user.findMany();
    //     res.setHeader("X-Total-Count", users.length);
    //     res.set({
    //         "X-Total-Count": users.length,
    //         ""
    //     })
    // } catch (error) {
        
    // }
}