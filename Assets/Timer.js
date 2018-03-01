var min : int;
var sec : int;
var fraction : int;
var timecount : float;
var starttime : float;
var timeCounter : GUIText;
private var text : Text;  


function Start ()
{
    starttime = 300;
} 

function Awake ()
{
    // Set up the reference.
    text = GetComponent (Text);

}
 
function Update () {
    timecount = starttime - Time.time;
    min = (timecount/60f);
    sec = (timecount % 60f);
    fraction = ((timecount * 10) %10);
   
    text.text = "Remaining time: " + String.Format("{00:00}:{1:00}",min,sec);
    //text.text = String.Format("{00:00}:{1:00}:{2:00}",min,sec,fraction);
}