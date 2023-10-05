import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function POST(req: Request){
  try{
    const account = await req.json();
    
    if(!account){
      return new NextResponse("Missing account credentials", { status: 400 });
    }

    const checkExisting = await db.user.findUnique({
      where: {
        username: account.username
      }
    });

    if (checkExisting) {
      return new NextResponse("Account already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(account.password, 10);

    const newAccount = await db.user.create({
      data: {
        username: account.username,
        password: hashedPassword,
        email: account?.email || "",
        imageUrl: account?.imageUrl || null,
      }
    })

    return NextResponse.json({ status: 200 });
  }catch(error){
    console.log("ACCOUNT_CREATION_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}