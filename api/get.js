export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await fetch('https://script.google.com/a/macros/shopee.com/s/AKfycbxpYpULOOj9yqab2zuCSxmPhEhupmoKBWZfFNGHelMpIrU-mrdvrJSkum5_oAAN97O6/exec?action=get');
    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
