var Num=150;
var stars = new Array();
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  
  for(i=0;i<=Num;i++)
  {
    y=random()*windowHeight;
    x=random()*windowWidth;
    point(x,y);
    point(x+1,y+1);
    point(x+1,y);
    point(x+1,y-1);
    point(x,y+1);
    point(x,y-1);
    point(x-1,y+1);
    point(x-1,y);
    point(x-1,y-1);
    var temp = new Array(x,y);
    stars[i]=temp;
  }
}

function draw() {
  // put drawing code here
  field=200;
  frameRate(20);
  fill(255,255,255);
  background(38,54,109);  
  x=mouseX;
  y=mouseY;
  var lines = new Array();
  for(i=0;i<=Num;i++)
  {
    var temp=stars[i];
    if(abs(x-temp[0])<field&&abs(y-temp[1])<field)
    {
      lines.push(temp);
    }
    if(lines.length>2)
    {
      line(lines[0][0],lines[0][1],lines[1][0],lines[1][0]);
      lines.shift();
    }
  }
}
