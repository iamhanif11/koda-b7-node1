function ubahTanggal(tanggal){
    let regexStrip = /^\d{2}-\d{2}-\d{4}$/;
    if(regexStrip.test(tanggal)){

        let result = tanggal.split('-');
        return result.join('/')
    } else{
        return "Format tanggal salah"
    }
}

console.log(ubahTanggal("22-02-2022"));
console.log(ubahTanggal("1 Januari 2021"));

