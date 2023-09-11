import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit =async () => {
    const { userId } = auth();

    if(!userId){
        return;
    }

    const userApiLimit = await prismadb.userAPILimit.findUnique({
        where: {
            userID: userId
        }
    });
    
    if (userApiLimit) {
        await prismadb.userAPILimit.update({
            where: { userID: userId },
            data: {count: userApiLimit.count + 1}
        })
    }
    else {
        await prismadb.userAPILimit.create({
            data: {userID: userId, count: 1}
        })
    }
};

export const checkApiLimit  =async () => {
    const { userId } = auth();

    if(!userId){
        return false;
    }

    const userApiLimit = await prismadb.userAPILimit.findUnique({
        where: {
            userID: userId
        }
    })

    if(!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS){
        return true;
    }
    else{
        return false;
    }
};

export const getAPILimitCount =async () => {
    const { userId } = auth();

    if(!userId){
        return 0;
    }

    const userApiLimit = await prismadb.userAPILimit.findUnique({
        where: {
            userID: userId
        }
    });

    if(!userApiLimit) {
        return 0;
    }

    return userApiLimit.count;
}