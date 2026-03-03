import moment from "moment";

function dateConversion(date){
    const inputDate = moment(date, 'DD-MM-YYYY',);
    if(inputDate.isValid()){
        const formattedDate = moment(date, 'DD-MM-YYYY').format('DD/MM/YYYY');
        return formattedDate;
    } else{
        return "Format tanggal salah";
    }

}

export default dateConversion;



