var monthNamesRy = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var daysOfTheWeekRy = ["S", "M", "T", "W", "T", "F", "S"]
var d = new Date();
var year = d.getFullYear();
var thisMonth = d.getMonth();
var today = d.getDate("Өнөөдөр");
var year = d.getFullYear();
for( var month = 0; month< 12; month++){
	createCalendar(month);
}
function createCalendar(month){
    var monthDiv = createMonthHeader(month);
    var firstDayOfTheMonth  = getFirstDayOfTheMonth(year,month);
    var daysinmonth  = daysInMonth(year,month)
    var counter = 0,order = 6;
    for( var i = 0; i < firstDayOfTheMonth +7; i++){
    order++;
    createDay(month, "&nbsp;",order, monthDiv);
    }
    for( var i = firstDayOfTheMonth; i < daysInMonth(year,month) + firstDayOfTheMonth; i++){
    counter ++;
    order++;
    createDay(month,counter,order,monthDiv);
    }
    for( var i = firstDayOfTheMonth + daysinmonth; i < 6*7; i++){
    order++;
    createDay(month, "&nbsp;",order, monthDiv);
    }
}
    function createDay(month,counter,order,monthDiv){
    var day = document.createElement("div");
    if(month == thisMonth && counter == today){day.setAttribute("class","to day");
    }
    else{
    day.setAttribute("class","day");}
    day.setAttribute("style","order:"+order);
    day.innerHTML = counter;
    monthDiv.appendChild(day);
    }
    function createMonthHeader(month){
        var calendar = document.querySelector(".calendar");
            
    var monthDiv = document.createElement("div");
        monthDiv.setAttribute("class","month");
        calendar.appendChild(monthDiv);
        
    var h4 = document.createElement("h4");
        h4.innerHTML = monthNamesRy[month];
        monthDiv.appendChild(h4);	
        
    for( var i = 0; i < 7; i++){
        var hday = document.createElement("div");
        hday.setAttribute("class","day OfWeek");
        hday.setAttribute("style","order:"+i);
        hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
        monthDiv.appendChild(hday);
    }
        return monthDiv;	
    }
    function daysInMonth(year,month) {
        return new Date(year, month+1, 0).getDate();
    }
    function getMonthName(month){
        return monthNamesRy[month];
    }
    function getDayName(day){
        return daysOfTheWeekRy[day];
    }
    function getFirstDayOfTheMonth(y,m){
        var firstDay = new Date(y, m, 1);
        return firstDay.getDay();
    }
    function getLastDayOfTheMonth(y,m){
        var lastDay = new Date(y, m + 1, 0);
        return lastDay.getDay();
    }

    var calendar2021 = {
        Jan: {1: "Сайхан амарна"},
        Feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"},
        Mar: {2: "Энэ лабыг сунгах эсэхээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ"},
        Apr: {1: "Бүгдээрээ худлаа ярьцгаана"},
        May: {10: "Энэ сард ёстой юу ч болдоггүй сар даа"},
        Jun: {6: "Жавхлан багшийн төрсөн өдөр", 30: "Мөнгөөнөөгийн төрсөн өдөр"},
        Jul: {4: "Хичээл амарсаан"},
        Aug: {1: "Аяллаар явна даа", 25: "Хичээл сонголт эхэллээ дээ"},
        Sep: {1: "9 сарын нэгэн боллоо ерөөсөө бидний баяр даа"},
        Oct: {13: "Сур сур бас дахин сур"},
        Nov: {2: "Сурсаар л бай"},
        Dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"}
    }
    
    
            