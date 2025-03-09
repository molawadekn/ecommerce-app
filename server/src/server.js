import app from './app.js';
import createTestData from './testData.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await createTestData();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();