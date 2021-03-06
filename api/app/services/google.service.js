import passport from 'passport';
import User from '../models/user.model';


const GoogleTokenStrategy = require('passport-google-token').Strategy;

const getProfile = (profile) => {
    const { id, displayName, emails, provider } = profile;
    if (emails && emails.length) {
        const email = emails[0].value;
        return { googleId: id, name: displayName, email, provider };
    }
    return null;
};

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        },
        //  Passport verify callback
        async (accessToken, refreshToken, profile, done) => {
            try {
                const existingGoogleUser = await User.findOne({
                    where: { googleId: profile.id }
                });
                if (!existingGoogleUser) {
                    const existingEmailUser = await User.findOne({
                        where: { email: getProfile(profile).email }
                    });
                    // Create user if user is not registered already
                    if (!existingEmailUser) {
                        const newUser = await User.create(getProfile(profile));
                        return done(null, newUser);
                    }
                    return done(null, existingEmailUser);
                }
                return done(null, existingGoogleUser);
            } catch (e) {
                throw new Error(e);
            }
        }
    )
);

// Saves user's ID to a session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Retrieve user's ID from a session
passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {
        done(null, user);
    });
});