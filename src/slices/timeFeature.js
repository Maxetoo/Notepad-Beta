import moment from 'moment'

export const timeMoment = (time) => {
  return moment(time).format('MMMM Do YYYY, h:mm a')
}
