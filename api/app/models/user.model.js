import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    password:{
        type: String,
        trim: true,
        required: "Password is required"
    }
});

export default mongoose.model("User", UserSchema);