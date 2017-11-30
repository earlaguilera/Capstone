const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/user');
const config=require('../config/database');

module.exports=function(passport){
    let opts={};
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
        //might be an issue here, need to change to _doc._id
        User.getUserById(jwt_payload.data._id, (err,user)=>{
            if(err){
                return done(err,false);
            }

            if(user){
                return done(null,user);
            }else{
                return done(null, false);
            }
        });
    }));
}