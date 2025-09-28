import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const { MASTODON_URL, MASTODON_TOKEN } = process.env;

export async function POST(request: NextRequest, { params }: { params: { postId: string } }) {
  try {
    const { postId } = params;
    const { comment }: { comment: string } = await request.json();

    const mastodonRes = await axios.post(
      `${MASTODON_URL}/api/v1/statuses`,
      { status: comment, in_reply_to_id: postId },
      { headers: { Authorization: `Bearer ${MASTODON_TOKEN}` } }
    );

    return NextResponse.json(mastodonRes.data);
  } catch (err: any) {
    console.error("--- MASTODON API ERROR ---", err.response?.data || err.message);
    const errorDetails = err.response?.data?.error || 'Failed to post comment.';
    return NextResponse.json({ error: errorDetails }, { status: 500 });
  }
}