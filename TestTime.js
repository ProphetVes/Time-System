//////// Time system //////////////////////////

let sec = 0;  // seconds
let min = 0;  // minutes
let h = 1;    // hours
let day = 1;  // days
let m = 1;    // mounts

let cool1min = 0;          // min + 5
let cool1h = 0;            // h + 4
let cool1day = 0;         // days

let timeSumSring = 0;     // sum all time to string
let timeSumNumber = 0;    // convert sum all time to number

let mSum = "";
let daySum = "";
let hSum = "";
let minSum = "";
let secSum = "";

function timeOn() {
  setTimeout(() => {
    console.log(m, day, h, min);
    console.log(timeSumSring);
    console.log(timeSumSring);
    sec++;                          // seconds +1
    if (sec < 2) {
      if (sec === 1) {
        sec = 0;
        min++;                      // minutes +1
        timeConvert();
        if (min === 60) {
          min = 0;
          h++;                      // hours +1
          
          // if (coolCheck == true) {
          //   Cool1Check();
          // }
          if (h === 24) {
            h = 1;
            day++;                  // days +1
            if (day === 2) {
              console.log("Start Cooldawn!")
              cool1();
            }
            if (day === 8) {
              day = 1;
              m++;                  // mounts +1
              if (m === 13) {
                m = 1;
              }
            }
          }
        }
      }
      timeOn();
    }
  }, 1);
}

//////// Convert Time to big number //////////////

function timeConvert() {
  // if (m <= 9) {
  //   mSum = "0" + m.toString();
  // } else {
  //   mSum = m.toString();
  // }
  mSum = m.toString();

  if (day <= 9) {
    daySum = "0" + day.toString();
  } else {
    daySum = day.toString();
  }

  if (h <= 9) {
    hSum = "0" + h.toString();
  } else {
    hSum = h.toString();
  }

  if (min <= 9) {
    minSum = "0" + min.toString();
  } else {
    minSum = min.toString()
  }

  if (sec <= 9) {
    secSum = "0" + sec.toString();
  } else {
    secSum = sec.toString();
  }

  timeSumSring = mSum + daySum + hSum + minSum;
  timeSumNumber = ~~timeSumSring;

  if (timeSumNumber >= 1031300) {
    console.log("HIT HIT HIT HIT HIT HIT HIT")
  }
}

///////// Cooldawn System /////////////////

let coolOn


function cool1() {
  // need time min 5 + h 4
  //add need time to current time

  cool1min = 5 + min;
  cool1h = 4 + h;
  cool1day = 2 + day;

  if (cool1min >= 60) {
    cool1min = cool1min - 60;
    cool1h = +1;
  }

  if (cool1h > 12) {
    cool1h = cool1h - 12;
    cool1day = +1;
  }

  coolOn = false;
  coolCheck = true;
}

////////////// Cooldawn System Check ///////////////


timeOn();