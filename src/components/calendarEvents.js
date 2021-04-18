import Dayz from "dayz";
import moment from "moment";

var CALENDAR_EVENTS = new Dayz.EventsCollection([
    {
      content: "Career Fair",
      range: moment.range(new Date(2021, 3, 1), new Date(2021, 3, 3)),
      colorIndex: 3,
    },
    {
      content: "GBM 1",
      range: moment.range(new Date(2021, 3, 13), new Date(2021, 3, 13)),
      colorIndex: 2,
    },
    {
      content: "Workshop",
      range: moment.range(new Date(2021, 3, 13), new Date(2021, 3, 13)),
      colorIndex: 4,
    },
    {
      content: "GBM 2",
      range: moment.range(new Date(2021, 3, 29), new Date(2021, 3, 29)),
      colorIndex: 2,
    },
    {
      content: "Guest Lecture",
      range: moment.range(new Date(2021, 3, 29), new Date(2021, 3, 29)),
      colorIndex: 5,
    },
]);

export default CALENDAR_EVENTS;