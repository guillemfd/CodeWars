// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360



var whatTimeIsIt = function(angle) {

    let h = Math.floor(angle / 30)
      if (h == 0) {
        h = 12
      } else if (h < 10) {
        h = '0' + h
      }
  
    let m = Math.floor(angle % 30)
      if (m < 10) {
        m = '0' + m
      }
    
    return h + ":" + m;
  }


  
//exemple internet
  // var whatTimeIsIt = function(angle) {
  //   console.log(angle);
  //     mins = angle*2;
  //     h = Math.floor(mins / 60);
  //     m = Math.floor(mins % 60);
  //     if (h==0) {h = "12"}
  //     if (h<10) {h = "0"+h}
  //     if (m<10) {m = "0"+m}
  //     return h + ":" + m;
  //   }