import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Check if API key is configured
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log('Registration POST request received');
  
  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json({ 
      error: 'Registration service is not configured. Please contact the administrator.' 
    }, { status: 500 });
  }
  
  try {
    const body = await req.json();
    console.log('Registration request body:', body);
    
    const {
      studentName,
      studentNameEn,
      birthDate,
      gender,
      nationality,
      previousSchool,
      grade,
      fatherName,
      fatherPhone,
      fatherEmail,
      motherName,
      motherPhone,
      motherEmail,
      address,
      emergencyContact,
      emergencyPhone,
      medicalConditions,
      specialNeeds,
      additionalNotes
    } = body;

    // Validate required fields
    if (!studentName || !birthDate || !gender || !grade || !fatherName || !fatherPhone) {
      console.log('Missing required fields in registration');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Sending registration email to:', 'info@almadarij.school');

    // Create email HTML
    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">📝 New Student Registration Request</h2>
            
            <h3 style="color: #2196F3; margin-top: 20px; margin-bottom: 10px;">Student Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333; width: 30%;">Student Name (Arabic):</td>
                <td style="padding: 8px;">${studentName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Student Name (English):</td>
                <td style="padding: 8px;">${studentNameEn || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Date of Birth:</td>
                <td style="padding: 8px;">${birthDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Gender:</td>
                <td style="padding: 8px;">${gender}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Nationality:</td>
                <td style="padding: 8px;">${nationality || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Required Grade:</td>
                <td style="padding: 8px;">${grade}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Previous School:</td>
                <td style="padding: 8px;">${previousSchool || 'Not provided'}</td>
              </tr>
            </table>

            <h3 style="color: #2196F3; margin-top: 20px; margin-bottom: 10px;">Parent Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333; width: 30%;">Father Name:</td>
                <td style="padding: 8px;">${fatherName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Father Phone:</td>
                <td style="padding: 8px;">${fatherPhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Father Email:</td>
                <td style="padding: 8px;">${fatherEmail || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Mother Name:</td>
                <td style="padding: 8px;">${motherName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Mother Phone:</td>
                <td style="padding: 8px;">${motherPhone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Mother Email:</td>
                <td style="padding: 8px;">${motherEmail || 'Not provided'}</td>
              </tr>
            </table>

            <h3 style="color: #2196F3; margin-top: 20px; margin-bottom: 10px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333; width: 30%;">Address:</td>
                <td style="padding: 8px;">${address || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Emergency Contact:</td>
                <td style="padding: 8px;">${emergencyContact || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Emergency Phone:</td>
                <td style="padding: 8px;">${emergencyPhone || 'Not provided'}</td>
              </tr>
            </table>

            <h3 style="color: #2196F3; margin-top: 20px; margin-bottom: 10px;">Additional Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333; width: 30%;">Medical Conditions:</td>
                <td style="padding: 8px;">${medicalConditions || 'None'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Special Needs:</td>
                <td style="padding: 8px;">${specialNeeds || 'None'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Additional Notes:</td>
                <td style="padding: 8px;">${additionalNotes || 'None'}</td>
              </tr>
            </table>

            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Submission Time:</strong> ${new Date().toLocaleString()}<br>
                <strong>IP Address:</strong> ${req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown'}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'School Registration <onboarding@resend.dev>',   
      to: ['info@almadarij.school'],
      subject: `New Student Registration: ${studentName} - Grade ${grade}`,
      replyTo: fatherEmail || 'no-reply@almadarij.school',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      
      // Handle specific API key errors
      if ('statusCode' in error && error.statusCode === 401) {
        return NextResponse.json({ 
          error: 'Registration service configuration error. Please contact the administrator.',
          details: 'Invalid API key - needs to be regenerated'
        }, { status: 500 });
      }
      
      return NextResponse.json({ 
        error: 'Failed to send registration request. Please try again later.',
        details: error.message 
      }, { status: 500 });
    }

    console.log('Registration email sent successfully:', data);
    return NextResponse.json({ message: 'Registration request sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ 
      error: 'An unexpected error occurred. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
