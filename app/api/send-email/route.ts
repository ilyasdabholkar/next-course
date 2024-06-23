import { NextRequest, NextResponse } from "next/server";
//import { Resend } from "resend";
// import WelcomeTemplate from "@/emails/WelcomeTemplate";

//const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    // resend.emails.send({
    //     from : 'onboarding@resend.dev',
    //     to : 'ilyasdabholkar9@gmail.com',
    //     subject : 'Onbording',
    //     react : WelcomeTemplate({name:"Ilyas"})
    // });
    
    return NextResponse.json({})
}
