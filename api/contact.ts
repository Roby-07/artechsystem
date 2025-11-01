import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(5),
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const parsed = ContactSchema.parse(req.body);
    // In production you would persist this to a DB or send an email.
    console.log('Contact submission:', parsed);
    res.status(200).json({ ok: true, message: 'Message received' });
  } catch (err) {
    console.error('Contact validation error', err);
    res.status(400).json({ ok: false, error: (err as Error).message });
  }
}

