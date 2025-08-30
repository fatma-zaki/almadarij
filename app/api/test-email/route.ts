import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'API key is missing',
        message: 'RESEND_API_KEY environment variable is not set',
        hasApiKey: false,
        envVars: Object.keys(process.env).filter(key => key.includes('RESEND'))
      }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    // Test the API key by sending a simple email
    const { data, error } = await resend.emails.send({
      from: 'Test <noreply@almadarij.school>',
      to: ['info@almadarij.school'],
      subject: 'Test Email - API Key Verification',
      html: '<p>This is a test email to verify the API key is working correctly.</p>',
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ 
        error: 'API key test failed',
        details: error.message,
        hasApiKey: true,
        apiKeyPrefix: apiKey.substring(0, 10) + '...'
      }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'API key test successful!',
      emailId: data?.id,
      hasApiKey: true,
      apiKeyPrefix: apiKey.substring(0, 10) + '...'
    });
  } catch (error) {
    console.error('Test Error:', error);
    return NextResponse.json({ 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKey: process.env.RESEND_API_KEY ? 'Present' : 'Missing'
    }, { status: 500 });
  }
}
