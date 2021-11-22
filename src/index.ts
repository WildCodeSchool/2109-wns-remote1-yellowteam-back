import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening on ${PORT || 3000}`));
