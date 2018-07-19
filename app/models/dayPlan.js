import mongos from "mongoose";

let Schema = mongos.Schema;

var dayPlanSchema = new Schema({
    taskDescription: String,
    time: String,
    checked: Boolean
})

export default mongoose.model('DayPlan', dayPlanSchema);