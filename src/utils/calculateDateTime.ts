import moment from "moment";

export function calculateTimeDifference(startTime: string, endTime: string): string {

  const dateStart = moment.utc(startTime).utcOffset(2);
  const dateEnd = moment.utc(endTime).utcOffset(2);

  const duration = moment.duration(dateEnd.diff(dateStart));
  let hours = Math.floor(duration.asHours());
  let minutes = duration.minutes();
  let seconds = duration.seconds();


  if (hours < 0)
      hours *= -1;
  if (minutes < 0)
      minutes *= -1;
  if (seconds < 0)
      seconds *= -1;

  return `${hours > 0 ? hours + 'h-' : ''}${minutes > 0 ? minutes + 'm-' : ''}${seconds > 0 ? seconds + 's' : ''}`
  }
 