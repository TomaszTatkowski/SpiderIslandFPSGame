// Instantiate a rigidbody then set the velocity

var projectile : Rigidbody;
var speed :float ;
var shoodsound:AudioClip;

function Update () {
    // Ctrl was pressed, launch a projectile
    if (Input.GetButtonDown("Fire2")) {
        // Instantiate the projectile at the position and rotation of this transform
        var clone : Rigidbody;
        clone = Instantiate(projectile, transform.position, transform.rotation);
			
        // Give the cloned object an initial velocity along the current 
        // object's Z axis
        clone.velocity = transform.TransformDirection (Vector3.forward * speed);
        GetComponent.<AudioSource>().PlayOneShot(shoodsound,0.7);
    }
}