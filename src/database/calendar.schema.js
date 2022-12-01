const { mongoose } = require("./connection");

let calendarSchema = mongoose.Schema({
    title: String,
    day: String,
    month: String,
    year: String,
});

calendarSchema.statics.getEvents = async () => {
    return await Calendar.find();
};

calendarSchema.statics.saveEvent = async (event) => {
    let evt = Calendar(event);
    console.log(event);
    return await evt.save();
};

calendarSchema.statics.deleteEvent = async (title) => {
    return await Calendar.findOneAndDelete({ title });
}

calendarSchema.statics.getEventbyTitle = async (title) => {
    return await Calendar.findOne({ title });
}

calendarSchema.statics.updateEvent = async (event) => {
    return await Calendar.findOneAndUpdate(
        { email: event.email },
        { $set: event },
        { new: true }
    );
};

const Calendar = mongoose.model("Calendar", calendarSchema);
module.exports = { Calendar };