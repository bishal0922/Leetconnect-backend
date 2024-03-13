const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    leetCodeUsername: String,
    verificationToken: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    name: String,
    birthday: String,
    avatar: String,
    ranking: Number,
    reputation: Number,
    gitHub: String,
    twitter: String,
    linkedIN: String,
    website: [String],
    country: String,
    company: String,
    school: String,
    skillTags: [String],
    about: String
});

module.exports = mongoose.model('User', userSchema);
