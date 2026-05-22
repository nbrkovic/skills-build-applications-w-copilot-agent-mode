import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  res.json({
    status: 'ok',
    service: 'octofit-backend',
    port: 8000,
    baseUrl,
    mongodb: 'mongodb://localhost:27017/octofit_db',
  });
});

export default router;
