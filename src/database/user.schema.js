const { mongoose } = require("./connection");

let userSchema = mongoose.Schema({
  email: String,
  name: String,
  lastname: String,
  career: String,
});

userSchema.statics.getUsers = async () => {
  return await User.find();
};
userSchema.statics.saveUser = async (user) => {
  let usr = User(user);
  console.log(user);
  return await usr.save();
};

userSchema.statics.deleteUser = async (email) => {
  return await User.findOneAndDelete({ email });
}

userSchema.statics.getUserByEmail = async (email) => {
  return await User.findOne({ email });
}

userSchema.statics.updateUser = async (user) => {
  return await User.findOneAndUpdate(
    { email: user.email },
    { $set: user },
    { new: true }
  );
};

const User = mongoose.model("User", userSchema);
//funciones despues de aquí, no se lee
module.exports = { User };
