import authRoutes from './routes/auth.routes.js';
import organRoutes from './routes/organ.routes.js';
import hospitalRoutes from './routes/hospital.routes.js';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js';
import matchingRequestRoutes from './routes/matchingRequest.routes.js';
import bodyParser from 'body-parser';
import connectDB from './config/mongo.js';
import cors from 'cors';

import express from 'express';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Organ Donation System API is running!');
});

app.use('/', authRoutes);
app.use('/', organRoutes);
app.use('/', hospitalRoutes);
app.use('/', adminRoutes);
app.use('/', userRoutes);
app.use('/', matchingRequestRoutes);

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
