'use client';
import { useState, useEffect, useRef } from 'react';

const VoiceBotPage = () => {
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Setup speech recognition on mount
    const SpeechRecognition = (window).SpeechRecognition || (window).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      handleSend(spokenText);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setTranscript('');
      setResponse('');
      setListening(true);
      recognitionRef.current.start();
    }
  };

  const handleSend = async (message) => {
    try {
      const res = await fetch('/api/voice-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
  
      const text = await res.text();
      const data = JSON.parse(text || '{}');
  
      if (data.reply) {
        setResponse(data.reply);
        speakText(data.reply);
      } else {
        setResponse('No response from assistant.');
      }
    } catch (error) {
      console.error(error);
      setResponse('Something went wrong.');
    }
  };
  

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    synth.speak(utter);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Voice Assistant</h1>

      <button
        onClick={startListening}
        disabled={listening}
        className={`px-6 py-3 rounded-full text-white ${
          listening ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {listening ? 'Listening...' : 'Start Talking'}
      </button>

      <div className="mt-6 w-full max-w-xl bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
        <p className="font-medium">You said:</p>
        <p className="italic text-blue-700">{transcript || '—'}</p>

        <p className="mt-4 font-medium">Assistant:</p>
        <p className="text-green-700">{response || '—'}</p>
      </div>
    </div>
  );
};

export default VoiceBotPage;
