import mongoose, { Document, Model } from 'mongoose';

// Interface for the Session document
export interface ISession extends Document {
  title: string;
  description: string;
  date: Date;
  mastodonPostId: string;
}

const sessionSchema = new mongoose.Schema<ISession>({
  title: String,
  description: String,
  date: Date,
  mastodonPostId: String,
});

// Prevent model overwrite in development HMR
const Session: Model<ISession> = mongoose.models.Session || mongoose.model<ISession>('Session', sessionSchema);

export default Session;