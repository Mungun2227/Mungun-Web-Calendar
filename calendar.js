var calendar2021 = {
    jan: { 1: 'Сайхан амарна' },
    feb: {   1: 'Сагсны тэмцээнтэй', 3: 'Шагнал гардуулна даа',  17: 'Жавхлан багшийн лаб 2-ыг хийнэ',   },
    mar: {  2: 'Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ', 6: 'Энд юу бичье дээ байз', 8: 'Эмэгтэйчүүддээ баяр хүргэнэ дээ', },
    apr: { 1: 'Бүгдээрээ худлаа ярьцаагаагаарай' },
    may: { 10: 'Энэ сард ч ёстой юу ч болдоггүй сар даа' },
    jun: { 6: 'Жавхлан багшийн төрсөн өдөр' },
    jul: { 4: 'Хичээл амарсаан ураа' },
    aug: { 1: 'Хөдөө явдаг цаг даа', 25: 'Хичээл сонголт эхэллээ' },
    sep: { 1: '9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа' },
    oct: { 13: 'Сур сур бас дахин сур' },
    nov: { 2: 'Сурсаар л бай' },
    dec: { 20: 'Өвлийн семистер хаагдах нь дээ', 30: 'Дүн гаргаж дууслаа баярлалаа баяртай',},
  }; //events zarlah yavts    
  var monthNames = [  'January',   'February',   'March',   'April',   'May',   'June',   'July',  'August',   'September', 'October',  'November', 'December', //month names olgoh yavts
  ];
  var date = new Date(); //date object uusgeh uil yavts
  function searchEvents() {} //hailt hiih 
  function printCalendar() {    //calendar hevleh
    let days = ''; //udur nemeh
    let events = ''; //events nemeh
    let monthName = monthNames[date.getMonth()].substring(0, 3).toLowerCase(); //sariin ner uguh
  
    let dayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0); //umnuh sariin udruudiig avah
  
    let dayofCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); //ene sariin udruudiig avah
    document.querySelector('.month h1').innerHTML = monthNames[date.getMonth()];
    for (let i = 0; i < monthNames; i++) {} //monthNames func hurtel sar uusgeh
    for (let i = 1; i <= dayOfPrevMonth.getDay(); i++) { //sariin udur uusgeh
      days += `<div>${
        dayOfPrevMonth.getDate() - dayOfPrevMonth.getDay() + i
      }</div>`;
    }
    for (let i = 1; i <= dayofCurrentMonth.getDate(); i++) { //ene sariin calendar 
      if (calendar2021[monthName][i]) { //herev sariin udur n deer zarlsan eventiin udurtei tentsvel
        if (date.getFullYear() == 2021) { 
          events += `<div>${date.getMonth() + 1} сарын ${i} - ${
            calendar2021[monthName][i]
          }</div>`;
          days += `<div class="currentMonth event">${i}</div>`; 
        } else {
          days += `<div class="currentMonth">${i}</div>`;
        }
      } else {
        days += `<div class="currentMonth">${i}</div>`;
      }
    }
  
    for (let i = 1; i <= 7 - dayofCurrentMonth.getDay(); i++) {
      days += `<div>${i}</div>`;
    }
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.listed-events').innerHTML = events;
  }
  printCalendar();
  function daraasar() {
    date.setMonth(date.getMonth() + 1);
    printCalendar();
  }
  function umnuhsar() {
    date.setMonth(date.getMonth() - 1);
    printCalendar();
  }
  document.querySelector('.search-input').addEventListener('keypress', (e) => {
    let searchResults = '',
      count = 0;
    if (e.key === 'Enter') {
      if (document.querySelector('.search-input').value == '') {
        searchResults += '<h3>Not Found</h3>';
      } else {
        searchResults += '<h3>Search Results</h3><div class="result">';
        for (let i = 0; i < monthNames.length; i++) {
          let monthName = monthNames[i].substring(0, 3).toLowerCase();
          for (let j = 1; j <= 31; j++) {
            if (calendar2021[monthName][j]) {
              if (
                calendar2021[monthName][j].includes(
                  document.querySelector('.search-input').value
                )
              ) {
                count++;
                searchResults += `<div>${i + 1} Сарын ${j} - ${
                  calendar2021[monthName][j]
                }</div>`;
              }
            }
          }
        }
      }
      searchResults += '</div>';
      if (count === 0) {
        searchResults = '<h3>Not Found</h3>';
      }
      document.querySelector('.search-result').innerHTML = searchResults;
      console.log(searchResults);
    }
  });
