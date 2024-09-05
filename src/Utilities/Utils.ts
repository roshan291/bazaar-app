import moment from 'moment';

export const Roshan = "Roshan";
export const syed = "Syed"


export const onKeyPress= (e: any) => {
    const keyCode = e.charCode;
    if (!(keyCode >= 48 && keyCode <= 57)) {
      e.preventDefault();
    }
  }

  const generateUniqueId = () => {
    return (Date.now() + Math.floor(Math.random() * 1000)) % 10000;
  }

  const generateCurrentDateAndTime = () => {
    return new Date().toLocaleString();
  }

  const dateDifference = (givenDate: any) => { 
    // Current date and time
    const currentDate = moment();

    // Convert the given date string to a moment object
    const givenMoment = moment(givenDate, "M/D/YYYY, h:mm:ss A");

    // Calculate the difference in days
    const differenceInDays = currentDate.diff(givenMoment, 'days');
    return differenceInDays == 1 ? `${differenceInDays} Day` : `${differenceInDays} Days`;
  }

  const dateFormat = (date: any) => {
    return moment(date).format("DD/MM/YYYY");
  }

  export {
    generateUniqueId,
    generateCurrentDateAndTime,
    dateDifference,
    dateFormat
  }