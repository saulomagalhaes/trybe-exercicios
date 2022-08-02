import 'dotenv/config';
import app from './src/index';

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));