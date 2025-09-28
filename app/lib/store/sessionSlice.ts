import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISession } from '../models/Session';

// Define the shape of the session state
interface SessionState {
  items: ISession[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SessionState = {
  items: [],
  status: 'idle',
  error: null,
};

// Define types for async thunk payloads
interface CreateSessionData {
  title: string;
  description: string;
  date: string;
}

interface CommentOnSessionData {
  postId: string;
  comment: string;
}

export const createSessionAsync = createAsyncThunk(
  'sessions/createSession',
  async (sessionData: CreateSessionData) => {
    const response = await axios.post('/api/mastodon/session', sessionData);
    return response.data as ISession;
  }
);

export const likeSessionAsync = createAsyncThunk(
  'sessions/likeSession',
  async (postId: string) => {
    await axios.post(`/api/mastodon/like/${postId}`, {});
    return postId;
  }
);

export const commentOnSessionAsync = createAsyncThunk(
  'sessions/commentOnSession',
  async ({ postId, comment }: CommentOnSessionData) => {
    const response = await axios.post(`/api/mastodon/comment/${postId}`, { comment });
    return response.data;
  }
);

const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSessionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createSessionAsync.fulfilled, (state, action: PayloadAction<ISession>) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createSessionAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create session';
      });
  },
});

export default sessionSlice.reducer;