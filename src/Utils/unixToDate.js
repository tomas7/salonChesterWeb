let converterUnix = (unix) => {
    let unix_timestamp = unix
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var testDate = new Date(formattedTime)

    hours = parseInt(hours)
    return hours
}

export default converterUnix