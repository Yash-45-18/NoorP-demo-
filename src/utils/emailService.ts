/**
 * Email Service — sends booking confirmation emails via Web3Forms
 * 
 * SETUP (takes 2 minutes, completely FREE):
 * 1. Go to https://web3forms.com
 * 2. Enter your email → get your Access Key
 * 3. Open .env file and set: VITE_WEB3FORMS_ACCESS_KEY=your_key_here
 * 
 * No backend, no server, no SMTP config needed.
 */

interface BookingEmailData {
  customerName: string;
  email: string;
  phone: string;
  eventType: string;
  packageType: string;
  date: string;
  time: string;
  location: string;
  guestCount: number;
  budget: string;
  message: string;
}

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
const USE_EMAIL_SERVICE = ACCESS_KEY !== '';

export async function sendBookingNotification(data: BookingEmailData): Promise<{ success: boolean; message: string }> {
  
  // If no API key configured, return info message
  if (!USE_EMAIL_SERVICE) {
    console.warn(
      '⚠️ Email notifications not configured. Set VITE_WEB3FORMS_ACCESS_KEY in your .env file.\n' +
      'Get your free key at: https://web3forms.com\n' +
      'Booking was saved locally but no email was sent.'
    );
    return {
      success: false,
      message: 'EMAIL_NOT_CONFIGURED'
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `🎉 New Booking: ${data.eventType} — ${data.customerName}`,
        from_name: 'Noor Studio Booking System',
        reply_to: data.email,

        // Booking details in clean format
        customer_name: data.customerName,
        customer_email: data.email,
        customer_phone: data.phone,
        event_type: data.eventType,
        package_selected: data.packageType,
        wedding_date: data.date,
        preferred_time: data.time,
        venue_location: data.location,
        guest_count: data.guestCount.toString(),
        budget_range: data.budget,
        client_message: data.message || 'No additional message provided',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, message: result.message || 'Failed to send email' };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Network error while sending email' };
  }
}
