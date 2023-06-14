
import Post from "@/src/models/Post";
import connect from "@/src/utils/db";
import { NextResponse } from "next/server"


export const GET=async (request)=>{

    try{
        await connect();

        const posts=await Post.find()

        return new NextResponse(posts,{status:200});
    }  catch (err) {
        return new NextResponse("Database Error",{status:500});
    }
};