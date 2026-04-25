const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String
    },
    age:{
        type:Number,
        min:18,
        max:100,
    },
    gender:{
        type:String,
        validate(value){
            if (!['male','female','others'].includes(value)){
                throw new Error('gender data not valid');
                
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
    },
    skills:{
        type:[String],
        default:"fun"
    }
},
{   
    timestamps:true,
}
);
const User= mongoose.model("User",userSchema);
module.exports=User;