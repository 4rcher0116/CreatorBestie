import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(req : Request) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount=1, resolution="512x512" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status:401});
        } 

        if (!configuration.apiKey){
            return new NextResponse("OpenAI API Key not Configured Properly", { status: 500});
        }

       
        if(!amount){
            return new NextResponse("Amount is required", { status:400 });
        }
        
        if(!resolution){
            return new NextResponse("Resolution is required", { status:400 });
        }

        const response = await configuration.images.generate({
            prompt: prompt,
            n: parseInt(amount),
            size: resolution
        })

        return NextResponse.json(response.data);
    } catch (error){
        console.log("[IMAGE_ERROR]", error);
        return new NextResponse("Internal error", { status:500});
     }
}