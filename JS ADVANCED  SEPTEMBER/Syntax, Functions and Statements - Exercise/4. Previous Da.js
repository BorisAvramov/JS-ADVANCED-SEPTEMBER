function demo(year, month, date){

    let dateinput = `${year}-${month}-${date}`;
    let previus = new Date(dateinput);
    previus.setDate(previus.getDate() - 1);
    console.log(`${previus.getFullYear()}-${previus.getMonth() + 1}-${previus.getDate()}`);
}

demo(2016, 9, 30);