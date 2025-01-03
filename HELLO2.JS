//class 3 
 var huNt = "hunter";
 console.log(huNt);




 // class 4 
 var strType = "hunterXhunter";
 console.log(strType);
   //variable type
 var StrType = "sejan abrar fahim";
 console.log(typeof strType)



//class 5 
var numType = 3429134 ;
console.log(numType)
    //variable type
var NumTYPe = 8754824 ;
console.log( typeof NumTYPe)



//class 6 
 var bulType = true ;
 console.log(bulType)
   //type 
var BUlType = false ;
console.log(typeof BUlType)



//class 7
 /*javascript reservrd words*/



 //class 8 
 var uppType = "A cow is a domestic animal. Cows are one of the most innocent animals who are very harmless. People keep cows at their homes for various benefits. Cows are four-footed and have a large body. It has two horns, two eyes plus two ears and one nose and a mouth. Cows are herbivorous animals. They have a lot of uses to mankind. In fact, farmers and people keep cows at their homes for the same purposes. " ;
console.log( uppType.toUpperCase())

var LowType = "A COW IS A DOMESTIC ANIMAL. COWS ARE ONE OF THE MOST INNOCENT ANIMALS WHO ARE VERY HARMLESS. PEOPLE KEEP COWS AT THEIR HOMES FOR VARIOUS BENEFITS. COWS ARE FOUR-FOOTED AND HAVE A LARGE BODY. IT HAS TWO HORNS, TWO EYES PLUS TWO EARS AND ONE NOSE AND A MOUTH. COWS ARE HERBIVOROUS ANIMALS. THEY HAVE A LOT OF USES TO MANKIND. IN FACT, FARMERS AND PEOPLE KEEP COWS AT THEIR HOMES FOR THE SAME PURPOSES.";
console.log(LowType.toLocaleLowerCase())



//class 9 
var myFrien = "sejan,siam,shuvo,abir,shahed,shanto,shanto,ratul.";
console.log(myFrien.split('abir'))

var huntXTr = " sabbir shahed malta";
console.log(huntXTr.split('malta'))

   //indexof - obosthan nirnoy kore 
var myHunt = "sabbir shahed";
console.log(myHunt.indexOf("shahed"))




//class 10 
var num1 = 50 ;
var num2 = 60;
console.log(num1+num2)

var num3 = 70 ;
var num4 = 80 ;
var moT = num3 + num4;
console.log(moT)

var numX1 = "55";
var numX2 = 60 ;
numX1 = parseFloat(numX1);
var motX = numX1 + numX2;
console.log(motX);

// float vs int
var numX1 = "55.32975498475";
var numX2 = 60 ;
numX1 = parseFloat(numX1);
var motX = numX1 + numX2;
console.log(motX);

var numX3 = "55.472635";
var numX4 = 60 ;
numX1 = parseInt(numX1);
var motX = numX1 + numX2;
console.log(motX);

//number theke strine convert
var numT1 = 40;
var numT2 = 50;
numT2 = "" + numT2;
console.log(numT1 + numT2)



//class 11 - js oparator
var numT11 = 150 ;
var numT22 = 60 ;
var ToT = numT11 - numT22 ;
console.log(ToT)

var nuD1 = 40 ;
var nuD2 = 50 ;
var toTX = nuD1 * nuD2 ;
console.log(toTX)

var moD1 = 50 ;
var moD2 = 50 ;
var ModtoT = moD1 / moD2;
console.log(ModtoT)


var mos1 = 60 ;
var mos2 = 34 ;
var toETot = mos1 % mos2 ;
console.log(toETot)



//class 12  - predefine function
var numHsa1= -24 ;
var hsaNUM = Math.abs(numHsa1)
console.log(hsaNUM)
//
var TotalVoat = 10;
var voTer = 5.004;
var joY = Math.round(voTer)
console.log(joY)

var toTalValue = 6;
var Value = 0.11123 ;
var valur1 = Math.round(Value);
console.log (valur1)

var toTalValue1 = 6;
var Value1 = 0.41123 ;
var valur2 = Math.round(Value1);
console.log (valur2)

var toTalValue2 = 6;
var Value2 = 0.51123 ;
var valur3 = Math.round(Value2);
console.log (valur3)

//
var toTalTk = 0.1233423 ;
var Tk = Math.ceil(toTalTk);
console.log(Tk)

var cutPY = 10.3423 ;
var PYc = Math.ceil(cutPY);
console.log(PYc)

//
var cutBOy = 0.43235435234235;
var bOy = Math.floor(cutBOy);
console.log(bOy) 

var bCEO = 4.2384837;
var ceo = Math.floor(bCEO);
console.log(ceo)


//
var lotary = Math.random() * 10 ;
console.log(lotary)



// class 15 - if condition
var a = 5 ;
var b = 2 ;

if(a > b){
      console.log("true1");
}

var c = 6 ;
var g = 7 ;
if( c > g){
  console.log("true2")
}

var f = 14 ;
if(f > 10){
  console.log("true3")
}



// class 16 - if_else

var t = 5;
var h = 7 ;
if(t > h){
  console.log("t boro");
}
else{
  console.log("h boro")
}


// class -17 else if
var X = 5 ;
var Y = 5 ;
if(X > Y){
  console.log("X boeo");
}
else if(X < Y){
         console.log(" y boro");
}
else{
  console.log("Y = X ");
}


// clas 18 - switch_statement
var rom = 10 ;
switch(rom){
  case 10:
     console.log("Hello world");
     break;   
  case 5 :
    console.log("Now i am in 5");
    break;
  case 1 :
    console.log("Now i am in 1")
    break;
  default:
    console.log("Ami kisu khuje pelam na");    
};

var yeAt = "big";
switch(yeAt){
    case 4:
      console.log("Now i am in 4");
      break;
    case 5 :
      console.log("Now i am in 5");
      break;
    default:
      console.log("kono kisui mile nai");
};



// class 19 - date object
var myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getUTCMilliseconds());


//class 20 - Array
var mUt = ["hunter,madmaX,atack on tai ten , kolaman"];
console.log(mUt);
  //
var mUT = [12,13,14,51,155,16534,3343,121];
console.log(mUT[2]);
  //
var uXt = ["hunter","big yt","dj alock"];
var uXn = uXt[1];
console.log(uXn);
   //
var lXk = ["hunter","big yt","dj alock"];
lXk[1] = "Hunter";
console.log(lXk);



// clas-21 array_push() pop() shift().....
var jLx = ["hunter","big yt","dj alock"];
jLx.push("Dhaka");
console.log(jLx);

var FlX = ["hunter","big yt","dj alock"];
FlX.push(32743724);
console.log(FlX);

// - pop
var timX1 = ["hunter","big yt","dj alock",48758437587];
timX1.pop() ;
console.log(timX1);

var tik = ["hunter","big yt","dj alock"];
tik.push(435742758943);
tik.pop();
console.log(tik);

// shift-unshift
var djV1 = ["hunter","big yt","dj alock"];
djV1.shift();
console.log(djV1);

var djV2 =["hunter","big yt","dj alock"];
djV2.unshift("hasibul");
console.log(djV2);

var djV3 = ["hunter","big yt","dj alock"];
djV3.shift();
djV3.unshift("Hunter");
console.log(djV3);



//class 22 slice()_splice()
var slIcE = ["hunter","big yt","dj alock","Hunter","big Yt"];
console.log(slIcE.slice(2,3));

var slIcE1 = ["hunter","big yt","dj alock","Hunter","big Yt"];
console.log(slIcE.slice(2,4));

var sliceCe2 = ["hunter","big yt","dj alock","Hunter"];
console.log(sliceCe2.splice(0,2, "Hunter"));
console.log(sliceCe2);


//class 23 - loop
for(var sum = 1; sum <=5; sum++){
 console.log("hello world")
};

var NUmS = [0,1,2,3,4,5,6,7,8,9,10,"hunter","madMAx"];
for(var i = 0;i < NUmS.length ; i++){
  console.log(NUmS[i])
};


// class 24 
var i = 0;
while(i<=5){
  console.log("Hello world");
  i++
};



//class 25 
function funX(){
  for(var T = 1;T<=5;T++){
    console.log("HEllo world")
  }
}
funX()
funX()
//
function mCT(hjlx,jjlx){
  var TotalT = hjlx + jjlx;
  console.log(TotalT)
}
mCT(5,2)
mCT(6,0)
mCT(7,7)

function mCT2(hjlx2,jjlx2){
  var TotalT2 = hjlx2 * jjlx2;
  return(TotalT2)
}
var a = mCT2(2,2);
console.log(a);


//class 26_object
var myInfo = {yourName : "Sejan abrar fahim", YourVIllage : "shuvoki",Phone:01757949595};
console.log(myInfo);
//console.log(myInfo.Phone); 

//
function MyInfo(yourName,YOurVillage,Phone){
  this.yourName = yourName;
  this.YourVIllage = YOurVillage;
  this.Phone = Phone;
  this.Showme =function(){
    console.log(this.yourName);
    console.log(this.Phone);
    console.log(this.YOurVillage);
  }
}
var newobJ = new MyInfo("sejan abrar fahim","shuvoki,tangail",01757949559);
console.log(newobJ);
console.log(newobJ.Phone);
newobJ.Showme()


// class 27 comment
// (//)-single line comment
// ( /*  */)multi line comment



//clas 28 ternary operator 
var dim = 6 ;
var nDim = (dim < 10) ? "ami boro hote parlam na" : "yea ami boro hoye gesi";
console.log(nDim);


var dim1 = 16 ;
var nDim2 = (dim1 < 10) ? "ami boro hote parlam na" : "yea ami boro hoye gesi";
console.log(nDim2);



//class 29 - continue _ break... 
for(i=0;i<=10;i++){
  if(i == 5){
    console.log("break now")
    break;
  };
};
console.log(i)


for( i = 0 ; i<=10;i++ ){
  if(i==5){
    console.log("continue");
    continue;
  }
}
console.log(i);


// class 30 differences betwwwn var , let , const .
var tbX = 0;
var tbX = 1010 ;
tbX = 43578734 ;
console.log(tbX);
/* var 1 er besi bar use kora jay
*/


//
let tYX = 10;
tYX = 3955;
console.log(tYX);
/*
  let tYX = "hunter";
  console.log(tYX);
  let tYX ="free";
  console.log(tYX);
  { let 1 barer besi use kora jayna};
*/
  

//
const aIm = "hunter20087";
console.log(aIm);
/*
const aIm = "hunter20087";
aIm = "hunter1465";
console.log(aIm);
*/



// class 31 scope
var huNT4 = "friends name"; //global scop
console.log(huNT4);

function me(){
  console.log(huNT4)
};
me()

//
/*function my(){
  var num9 = " hunter 99";
  console.log(num9)
}
my()
my()
console.log(num9);*/   // local scop
