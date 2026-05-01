export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Add a small delay to simulate email processing
  await new Promise(resolve => setTimeout(async () => {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // Fake email processing - log to console for debugging
    console.log('Fake email sent:', {
      from: email,
      subject: `Contacto desde Capshi - ${name}`,
      name,
      email,
      message
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      fake: true
    });

    resolve();
  }, 500));
}