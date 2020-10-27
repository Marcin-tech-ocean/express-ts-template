import { config } from 'dotenv';
config();
import express from 'express';

const app = express();
app.use(express.json());

app.get('/health-check', (_req, res) => {
	res.json({ ok: true });
});

const PORT = +process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
