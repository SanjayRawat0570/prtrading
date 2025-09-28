import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import dbConnect from '@/app/lib/mongodb';
import Session from '@/app/lib/models/Session';

const { MASTODON_URL, MASTODON_TOKEN } = process.env;

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { title, description, date }: { title: string; description: string; date: string } = await request.json();
    
    const mastodonStatus = `📈 Upcoming Trading Session\n${title}\n${description}\nDate: ${date}`;

    const mastodonRes = await axios.post(
      `${MASTODON_URL}/api/v1/statuses`,
      { status: mastodonStatus },
      { headers: { Authorization: `Bearer ${MASTODON_TOKEN}` } }
    );

    const newSession = new Session({
      title,
      description,
      date,
      mastodonPostId: mastodonRes.data.id,
    });
    await newSession.save();

    return NextResponse.json(newSession, { status: 201 });
  } catch (err: any) {
    console.error("--- MASTODON API ERROR ---", err.response?.data || err.message);
    const errorDetails = err.response?.data?.error || 'Failed to create session.';
    return NextResponse.json({ error: errorDetails }, { status: 500 });
  }
}