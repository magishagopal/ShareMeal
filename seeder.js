import mongoose from 'mongoose';
import connectDB from './config/mongo.js';
import Organ from './models/Organ.js';
import User from './models/user.js';

// Connect to the database
connectDB();

const seeder = async () => {
    const user = await User.findOne(); // Assume a user is already in the database

    if (!user) {
        console.error('No user found in the database. Seed a user first.');
        return;
    }

    const organ = new Organ({
        organType: 'Kidney',
        bloodType: 'O+',
        donor: user._id,
        status: 'Available',
    });

    await organ.save();

    user.donatedOrgans.push(organ._id);
    await user.save();

    console.log('Seeding completed.');
    mongoose.connection.close();
};

seeder();
