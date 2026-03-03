const moment = require("moment")
let regexStrip = /^\d{2}-\d{2}-\d{4}$/;

function dateConversion(date){
    if(regexStrip.test(date)){

        const formattedDate = moment(date, 'DD-MM-YYYY').format('DD/MM/YYYY')
        return formattedDate
    } else{
        return "Format tanggal salah"
    }

}

module.exports = dateConversion



