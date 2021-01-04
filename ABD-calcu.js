var waist = document.getElementById("waist");
var height = document.getElementById("height");
var waist = document.getElementById("waist");
var age = document.getElementById("age");
var waistv = (waist.value/2.54);
var weightv = (weight.value/0.453592);
var heightv = (height.value/2.54);
var agev = (age.valuinRepse);
var sex=1;
var inReps= document.getElementById("inReps");
var inWeightLifted= document.getElementById("inWeightLifted");
function reset() {
   waist.value = null;
   weight.value = null;
   height.value = null;
   age.value = null;
}
function sexcm() {
  sex=0;
  return;
}
function sexcf() {
  sex=1;
  return;
}
function ali() {
  sex=0;
  var height = document.getElementById("height");
  var age = document.getElementById("age");
  height.value = 167;
  age.value = 30;
  return;
}
function kirsten() {
  sex=1;
  var height = document.getElementById("height");
  var age = document.getElementById("age");
  height.value = 172;
  age.value = 32;
  return;
}
function calc() {
  var bf = document.getElementById("bodyfat");
  var lbm = document.getElementById("leanbodymass");
  var whtr = document.getElementById("whtr");
  var bmr = document.getElementById("bmr");
  var waw = document.getElementById("waw");
  var wawa = document.getElementById("wawa");
  var waist = document.getElementById("waist");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var age = document.getElementById("age");
  var waistv = (waist.value/2.54);
  var weightv = (weight.value/0.453592);
  var heightv = (height.value/2.54);
  var agev = (age.value);
  
  if (sex=="0") {
    var up1 = ((4.15*waistv)-98.42);
    var up2 = (0.082*weightv);
    var va = ((100*(up1-up2))/weightv);
    whtr.value=(waistv/heightv);
    bf.value=(va);
    lbm.value=(weight.value*(1-(va/100)));
    bmr.value=(13.75*weight.value+5.003*height.value-6.775*agev+66.5);
    waw.value=(((heightv*heightv*heightv)/1906)*0.453592);
    wawa.value=((heightv*0.4584)*2.54);
  }
 else {
    var up1 = ((4.15*waistv)-76.76);
    var up2 = (0.082*weightv);
    var va = ((100*(up1-up2))/weightv);
    whtr.value=(waistv/heightv);
    bf.value=(va);
   lbm.value=(weight.value*(1-(va/100)));
    bmr.value=(9.563*weight.value+1.850*height.value-4.676*agev+655.1);
   waw.value=0;
   wawa.value=0;
  }
}
function round25(x)
{
    return (x % 2.5) >= 1.25 ? parseInt(x / 2.5) * 2.5 + 2.5 : parseInt(x / 2.5) * 2.5;
}
function oneRepMax() {
  var inReps= document.getElementById("inReps");
  var inWeightLifted= document.getElementById("inWeightLifted");
  var j;
  var onerm;
for (j = 1; j < 25; j++) { 
   if (inReps.value==j) {
     onerm=(inWeightLifted.value/(1-(0.025*j)));
   }
}
  var weightLiftedArray = ["Weight100","Weight95","Weight90","Weight85","Weight80","Weight75","Weight70","Weight65","Weight60","Weight55","Weight50"];
  var repsArray =["inReps100","inReps95","inReps90","inReps85","inReps80","inReps75","inReps70","inReps65","inReps60","inReps55","inReps50"];
  
var i;
for (i = 0; i < weightLiftedArray.length; i++) { 
    var wl = document.getElementById(weightLiftedArray[i]);
    var rp = document.getElementById(repsArray[i]);
  if (i==0) {
    wl.value= onerm*(1-(0.05*i));
    rp.value= 1;
  }
  else {
  wl.value= onerm*(1-(0.05*i));
  rp.value= i*2;
  }
  wl.value= round25(wl.value);
}
}

