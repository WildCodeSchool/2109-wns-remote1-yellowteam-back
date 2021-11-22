import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on ${port || 3000}`));