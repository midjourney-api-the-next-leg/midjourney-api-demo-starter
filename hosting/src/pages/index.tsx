'use client'; // this is a client component 👈🏽
import axios from 'axios';
import { firestore } from '../db';
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const AUTH_TOKEN = '';
const endpoint = `https://api.thenextleg.io`;

export default function Home() {
  const [text, setText] = useState('');
  const [imgs, setImgs] = useState<{ createdAt: any; imgUrl: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    onSnapshot(collection(firestore, 'imgs'), snapshot => {
      let allImgs: { createdAt: any; imgUrl: string }[] = snapshot.docs.map(
        doc => doc.data(),
      ) as any;
      setImgs(allImgs);
    });
  }, []);

  return (
    <div className='container mx-auto h-screen flex flex-col items-center justify-center '>
      <div className='w-full mx-auto px-20'>
        <div>
          {/* tailwindui.com */}
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Prompt
          </label>
          <div className='mt-2 flex space-x-2'>
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Enter your prompt here'
            />
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={async () => {
                console.log(`Submitting my prompt: ${text}`);
                setLoading(true);
                try {
                  let headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${AUTH_TOKEN}`,
                  };

                  let r = await axios.post(
                    `${endpoint}`,
                    {
                      cmd: 'imagine',
                      msg: text,
                    },
                    { headers },
                  );

                  console.log(r.data);
                  setResponse(JSON.stringify(r.data, null, 2));
                } catch (e: any) {
                  console.log(e);
                  setError(e.message);
                }
                setLoading(false);
              }}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          <pre>Response Message: {response}</pre>
          Error: {error}
        </div>
      </div>
      <div>
        <h1 className='text-4xl py-8'>These are your images!</h1>
        <div className='grid grid-cols-3 gap-4'>
          {imgs.map(img => (
            <img
              src={img.imgUrl}
              className='w-full'
              key={img.imgUrl}
              alt='nothing'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
