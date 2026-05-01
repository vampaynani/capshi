export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, terapia } = req.body;

  if (!nombre || !email || !telefono || !terapia) {
    return res.status(400).json({ error: 'Missing required fields: nombre, email, telefono, terapia' });
  }

  console.log('Fake email sent:', {
    from: email,
    subject: `Contacto desde Capshi - ${nombre}`,
    nombre,
    email,
    telefono,
    terapia
  });

  res.status(200).json({
    success: true,
    message: 'Email sent successfully'
  });
}
