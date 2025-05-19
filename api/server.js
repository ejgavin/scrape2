import axios from 'axios';

export default async function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send('Missing ?url= query parameter');
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      }
    });

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send('Proxy Error: ' + error.message);
  }
}
