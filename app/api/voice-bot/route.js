import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();
    console.log('Message received:', message);  // Log the incoming message

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // Authorization header
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
      }),
    });

    // Check if the response is successful
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error fetching from OpenAI:', res.statusText, errorText);
      return NextResponse.json({ reply: 'Error: Could not fetch from OpenAI.' });
    }

    const data = await res.json();
    console.log('OpenAI response:', data);  // Log the response for debugging

    // Handle case where no valid response is returned
    if (!data.choices || !data.choices[0]?.message?.content) {
      return NextResponse.json({ reply: 'No valid response from AI.' });
    }

    return NextResponse.json({ reply: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ reply: 'Server error occurred.' }, { status: 500 });
  }
}
