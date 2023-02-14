const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "387802216979-buhj7ck5tpkdoqh0bqqle7hk2spjsoi3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
