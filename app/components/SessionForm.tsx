'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSessionAsync } from '../lib/store/sessionSlice';
import type { AppDispatch, RootState } from '../lib/store/store';

function SessionForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.sessions.status);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description || !date) {
      alert('Please fill all fields');
      return;
    }
    dispatch(createSessionAsync({ title, description, date }));
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    // The form is now styled for the dark theme
    <div>
      <h3 className="text-xl font-bold text-white mb-4">
        Create New Trading Session
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Session Title"
          className="p-3 bg-gray-700/50 border border-gray-600 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Session Description"
          className="p-3 bg-gray-700/50 border border-gray-600 rounded-md w-full min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          className="p-3 bg-gray-700/50 border border-gray-600 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          type="submit"
          className="py-3 px-5 bg-blue-600 text-white rounded-md font-semibold cursor-pointer transition hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed self-start"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Creating...' : 'Create Session'}
        </button>
      </form>
    </div>
  );
}

export default SessionForm;