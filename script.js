
var stopWatch1 = { msecond:0, second:0, minut:0, time:1, flag:false};

function start_stop() {
  if(stopWatch1.flag == false) {
    stopWatch1.flag = true;
    stopWatch1.starts();
  } else {
    stopWatch1.flag = false;
    stopWatch1.stop();
  }
}
function stop() {
  clearTimeout(this.time);
}
function start() {
  this.time = setInterval("st()", 10);
}
function st(x) {
  stopWatch1.tPls();
}
function timePlus() {
  this.msecond += 1;
  if(this.msecond > 99) {
    this.second++;
    this.msecond = 0;
  }
  if(this.second > 59) {
    this.minut++;
    this.second = 0;
  }
  document.getElementById("watch").innerHTML = ((this.minut<10)? '0'+this.minut.toString(): this.minut.toString())+
                                               ':' + ((this.second<10)? '0'+this.second.toString():this.second.toString()) +
                                               ':'+ ((this.msecond<10)? '0'+this.msecond.toString():this.msecond.toString());

}
function resetObject(){
  stopWatch1.reset();
}
function reset() {
  if(this.flag == true) this.stop();
  this.msecond =0;
  this.second = 0;
  this.minut = 0;
  document.getElementById("watch").innerHTML = ((this.minut<10)? '0'+this.minut.toString(): this.minut.toString())+
                                               ':' + ((this.second<10)? '0'+this.second.toString():this.second.toString()) +
                                               ':'+ ((this.msecond<10)? '0'+this.msecond.toString():this.msecond.toString());
}
stopWatch1.starts=start;
stopWatch1.tPls=timePlus;
stopWatch1.stop=stop;
stopWatch1.reset=reset;
