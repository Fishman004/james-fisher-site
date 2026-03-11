import {Resend} from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request){
    const {name, email, message} = await request.json()
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dwfishman4@gmail.com',
        subject: `Portfolio contact from ${name}`,
        text: `From: ${email}\n\n${message}`
    })
    return Response.json({success : true})
}