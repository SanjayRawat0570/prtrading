'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  likeSessionAsync,
  commentOnSessionAsync,
} from '../lib/store/sessionSlice';
import type { AppDispatch, RootState } from '../lib/store/store';
import type { ISession } from '../lib/models/Session';

function SessionItem({ session }: { session: ISession }) {
  const dispatch = useDispatch<AppDispatch>();
  const [comment, setComment] = useState('');

  const handleLike = () => {
    dispatch(likeSessionAsync(session.mastodonPostId));
    alert('Liked post!');
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment) return;
    dispatch(
      commentOnSessionAsync({ postId: session.mastodonPostId, comment })
    );
    setComment('');
    alert('Comment posted!');
  };

  return (
    // Restyled for dark theme
    <div className="border border-gray-700 p-5 mt-4 rounded-lg bg-gray-900/50">
      <h3 className="text-lg font-semibold text-white">{session.title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{session.description}</p>
      <small className="block text-gray-500 mt-3 text-xs">
        Date: {new Date(session.date).toLocaleDateString()}
      </small>
      <small className="block text-gray-500 mt-1 text-xs break-all">
        Mastodon Post ID: {session.mastodonPostId}
      </small>

      <div className="mt-5 flex items-center gap-4">
        <button
          onClick={handleLike}
          className="px-3 py-1.5 text-xs bg-green-500/20 text-green-400 rounded-md transition hover:bg-green-500/30"
        >
          👍 Like
        </button>
        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-grow gap-2"
        >
          <input
            type="text"
            placeholder="Add a comment..."
            className="p-2 text-sm bg-gray-700/50 border border-gray-600 rounded-md flex-grow focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-1.5 text-xs bg-blue-600 text-white rounded-md transition hover:bg-blue-700"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

function SessionList() {
  const { items: sessions, status, error } = useSelector(
    (state: RootState) => state.sessions
  );

  if (status === 'failed') {
    return <div className="text-red-500 p-4 bg-red-500/10 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-white">
        Active Sessions
      </h3>
      {sessions.length === 0 ? (
        <p className="text-gray-400 text-sm mt-2">No sessions created yet. Create one above!</p>
      ) : (
        <div className="mt-2">
            {sessions.map((session: ISession) => (
              <SessionItem key={session.mastodonPostId} session={session} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SessionList;