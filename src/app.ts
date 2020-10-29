import { config } from 'dotenv';
config();
import express from 'express';
import YAML from 'yamljs';
import * as swaggerUi from 'swagger-ui-express';
import path from 'path';
import cors from 'cors';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '..', 'swagger', 'swagger.yml'));
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health-check', (_req, res) => {
	res.json({ ok: true });
});

const PORT = +process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
