#pragma strict
import UnityEngine.UI;
var scoreValue : int = 1;
var scoreValue_1 : int = 1;

function Update ()
{
    
}
 var explosion: GameObject;
 
 function OnCollisionEnter(col: Collision) {
     if (col.gameObject.tag == "Spider_1")
   {
     var expl = Instantiate(explosion, transform.position, Quaternion.identity);
     Destroy(col.gameObject);
     Destroy(gameObject);
     ScoreManager.score += scoreValue;
     ScoreManager_1.score_1 -= scoreValue_1;
     }
     }

