const parseDate = (stamps) => {
    let date = new Date(stamps);
    let day = date.getDate();
    let month = date.getMonth()
    let year = date.getFullYear()
    return day + '/' + month + '/' + year;
}

export default parseDate;