export var datethai;
    var  now = new Date(); 
    var thday = new Array ("อาทิตย์","จันทร์",
    "อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"); 
    var thmonth = new Array ("มกราคม","กุมภาพันธ์","มีนาคม",
    "เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน",
    "ตุลาคม","พฤศจิกายน","ธันวาคม");    
    // datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
    datethai = now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);

    
 