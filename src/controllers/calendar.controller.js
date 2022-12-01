const { Calendar } = require("../database/calendar.schema");

class CalendarController {
    static async getAll(req, res) {
        let result = await Calendar.getEvents();
        res.send(result);
    }

    static async insertOne(req, res) {
        let result = await Calendar.saveEvent(req.body);
        res.status(200).send("ok");
        return;
    }

    static async removeOne(req, res) {
        let result = await Calendar.deleteEvent(req.params.title);
        res.status(200).send("ok");
        return;
    }

    static async updateOne(req, res) {
        let selectedEvent = await Calendar.getEventbyTitle(req.params.title)
        let { title, day, month, year } = req.body;
        if (title != "") {
            selectedEvent.title = title;
        }
        if (name != "") {
            selectedEvent.day = day;
        }
        if (lastname != "") {
            selectedEvent.month = month;
        }
        if (career != "") {
            selectedEvent.year = year;
        }
        let result = await Calendar.updateEvent(selectedEvent)
        res.status(200).send("ok");
        return;
    }
}

module.exports = CalendarController;