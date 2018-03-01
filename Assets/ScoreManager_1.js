static var score_1 : int;        // The player's score.

private var text : Text;       // Reference to the Text component.


function Awake ()
{
    // Set up the reference.
    text = GetComponent (Text);

    // Reset the score.
    score_1 = 12;
}


function Update ()
{
    // Set the displayed text to be the word "Score" followed by the score value.
    text.text = "Enemie remain: " + score_1;
}