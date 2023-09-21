  
  //******************************************/
 //   FOOD ALLERGY - KAMIN BLOCKING          /
//******************************************/

/* enable subjectID prompt */
// let workerId = prompt( 'subjectID' );

// let workerId = getParamFromURL( 'workerId' );


const qualtrics = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_0U3wW3G3HfY8Ie1?Q_JFE=qdg&workerId=";


const taskVersion="social";
let fileExtension;
let instructions1;
let instructions2;
let instructions3;
let instructions4;
let instructions5;
let feedbackNegative;
let feedbackPositive;
let responseOptions;
let question1;
let question2;


switch(taskVersion) {
  case "allergy":
   fileExtension='.jpg';
   instructions1='<h2 style="color:black;">In the first part of the experiment, you are asked to imagine that you are an allergist (someone who tries to discover the cause of allergic reactions in people).</h2>' +
    '<h3 style="color:black;">You have been presented with a new patient who suffers from allergic reactions following some meals, but not others.</h3> '+
    '<h3 style="color:black;">You arrange for them to eat a number of different meals, containing one or two foods, and observe whether or not they have an allergic reaction.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions2='<h2 style="color:black;">During the first part of the experiment, you will be shown pictures of the foods given to your patient for each meal.</h2>'+
    '<h3 style="color:black;">You will then be shown whether or not they suffered an allergic reaction after eating the meal.</h3>' + 
    '<h3 style="color:black;">When you see each meal, you will have three seconds to predict whether or not you believe they will suffer an allergic reaction after eating the meal.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions3='<h2 style="color:black;">To predict that a particular meal <strong><u>will not</strong></u> cause an allergy please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
   '<h2 style="color:black;">To predict that a meal <b><u>will cause</b></u> an allergic reaction please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
   '<p style="color:black;">Press either of the response keys to continue.</p>';
   instructions4='<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
   '<h3 style="color:black;">But hopefully, as you see more meals, you will learn which foods tend to make your patient have an allergic reaction.</h3>'+
   '<br>'+
   '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
   '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
   '<h3 style="color:black;">If you are very confident you should press and hold until the meal disappears from the screen.</h3>'+
   '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions5='<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the meal leaves the screen.</h2>'+
   '<br>'+
   '<h2 style="color:black;">Food <strong><u>does not</strong></u> cause an allergy &#8594 <q><strong>0</strong></q> key </h2>'+
   '<h2 style="color:black;">Food <strong><u>causes</strong></u> an allergy &#8594 <q><strong>1</strong></q> key</h2>'+
   '<p style="color:black;">Press the spacebar to begin the practice trials.</p>';
   feedbackNegative='<img src=stimuli/allergy/-.jpg ></img>';
   feedbackPositive='<img src=stimuli/allergy/+.jpg ></img>';
   responseOptions='1 Allergy&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0 No Reaction <br><br> Hold response key to indicate confidence level.';
   question1= "Did you consider the patient-doctor relationship when making choices?";
   question2= "Did it feel as though the foods were trying to trick you?";
   break;
  case "social":
    fileExtension='.png';
    instructions1='<h2 style="color:black;">In the first part of this experiment, you are asked to imagine that you are beginning a new job and your boss regularly evaluates you.</h2>' +
    '<h3 style="color:black;">You also have new co-workers, who you have to rely on for help with tasks. Nonetheless, some co-workers will actively wish for you to fail!</h3> '+
    '<h3 style="color:black;">Over the first part of this experiment, you will work with your new co-workers, 1-2 at a time, and observe whether they are helpful or sabotage your work.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';  
    instructions2='<h2 style="color:black;">During the first part of the experiment, you will be shown pictures of co-workers that you are currently working with.</h2>'+
    '<h3 style="color:black;">You will then be shown whether or not they helped you with your work or sabotaged you.</h3>' + 
    '<h3 style="color:black;">When you see co-workers, you will have three seconds to predict whether or not you believe they will sabotage you.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';  
    instructions3='<h2 style="color:black;">To predict that a co-worker <strong><u>will not</strong></u> sabotage you, please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
    '<h2 style="color:black;">To predict that a co-worker <b><u>will sabotage</b></u> you please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
    '<p style="color:black;">Press either of the response keys to continue.</p>';
    instructions4='<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
   '<h3 style="color:black;">But hopefully, as you work with more people, you will learn which people tend to sabotage you.</h3>'+
   '<br>'+
   '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
   '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
   '<h3 style="color:black;">If you are very confident you should press and hold until the person disappears from the screen.</h3>'+
   '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions5='<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the person leaves the screen.</h2>'+
   '<br>'+
   '<h2 style="color:black;">Co-worker <strong><u>does NOT</strong></u> sabotage you (helpful) &#8594 <q><strong>0</strong></q> key </h2>'+
   '<h2 style="color:black;">Co-worker <strong><u>does</strong></u> sabotage you &#8594 <q><strong>1</strong></q> key</h2>'+
   '<p style="color:black;">Press the spacebar to begin the practice trials.</p>';
   feedbackNegative='<img src=stimuli/social/-.jpg ></img>';
   feedbackPositive='<img src=stimuli/social/+.jpg ></img>';
   responseOptions='1 Sabotaged&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0 Helped <br><br> Hold response key to indicate confidence level.';
   question1= "Did you consider your relationships with co-workers throughout the task?";
   question2= "Did any of your co-workers deliberately sabotage you?"; 
   break;

  case "nonsocial_gain":
    fileExtension='.jpg';
    instructions1='<h2 style="color:black;">In the first part of the experiment, you are asked to earn as many points as possible.</h2>' +
    '<h3 style="color:black;">You will be presented with unique shapes.</h3> '+
    '<h3 style="color:black;">You will observe whether or not the shapes are followed by points .</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions2='<h3 style="color:black;">When you see each shape, you will have three seconds to predict whether or not you believe it will be followed by points.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions3='<h2 style="color:black;">To predict that a particular shape <strong><u>will not</strong></u> be followed by points, please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
   '<h2 style="color:black;">To predict that a shape <b><u>will</b></u> be followed by points please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
   '<p style="color:black;">Press either of the response keys to continue.</p>';
   instructions4='<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
   '<h3 style="color:black;">But hopefully, as you see more shapes, you will learn which shapes tend to be followed by points.</h3>'+
   '<br>'+
   '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
   '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
   '<h3 style="color:black;">If you are very confident you should press and hold until the shape disappears from the screen.</h3>'+
   '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions5='<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the shape leaves the screen.</h2>'+
   '<br>'+
   '<h2 style="color:black;">Shape <strong><u>is not</strong></u> followed by points &#8594 <q><strong>0</strong></q> key </h2>'+
   '<h2 style="color:black;">Shape <strong><u>is</strong></u> followed by points &#8594 <q><strong>1</strong></q> key</h2>'+
   '<p style="color:black;">Press the spacebar to begin the practice trials.</p>';
   feedbackNegative='<img src=stimuli/nonsocial_gain/-.jpg ></img>';
   feedbackPositive='<img src=stimuli/nonsocial_gain/+.jpg ></img>';
   responseOptions='1 Gain Points&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0 No Points <br><br> Hold response key to indicate confidence level.';
   question1= "Did you consider your relationship with the shapes when making choices?";;
   question2= "Did any of the shapes deliberately sabotage you?"; 
   break;
  case "nonsocial_loss":
    fileExtension='.jpg';
    instructions1='<h2 style="color:black;">In the first part of the experiment, you are asked to avoid losing any points.</h2>' +
    '<h3 style="color:black;">You will be presented with unique shapes.</h3> '+
    '<h3 style="color:black;">You will observe whether or not the shapes are followed by a loss of points .</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions2='<h3 style="color:black;">When you see each shape, you will have three seconds to predict whether or not you believe it will be followed by a loss of points.</h3>'+
    '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions3='<h2 style="color:black;">To predict that a particular shape <strong><u>will not</strong></u> be followed by a loss of points, please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
   '<h2 style="color:black;">To predict that a shape <b><u>will</b></u> be followed by a loss of points please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
   '<p style="color:black;">Press either of the response keys to continue.</p>';
   instructions4='<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
   '<h3 style="color:black;">But hopefully, as you see more shapes, you will learn which shapes tend to be followed by a loss of points.</h3>'+
   '<br>'+
   '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
   '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
   '<h3 style="color:black;">If you are very confident you should press and hold until the shape disappears from the screen.</h3>'+
   '<p style="color:black;">Press the spacebar to continue.</p>';
   instructions5='<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the shape leaves the screen.</h2>'+
   '<br>'+
   '<h2 style="color:black;">Shape <strong><u>is not</strong></u> followed by loss of points &#8594 <q><strong>0</strong></q> key </h2>'+
   '<h2 style="color:black;">Shape <strong><u>is</strong></u> followed by loss of points &#8594 <q><strong>1</strong></q> key</h2>'+
   '<p style="color:black;">Press the spacebar to begin the practice trials.</p>';
   feedbackNegative='<img src=stimuli/nonsocial_loss/-.jpg ></img>';
   feedbackPositive='<img src=stimuli/nonsocial_loss/+.jpg ></img>';
   responseOptions='1 Lose Points&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0 No Points<br><br> Hold response key to indicate confidence level.';
   question1= "Did you consider your relationship with the shapes when making choices?";;
   question2= "Did any of the shapes deliberately sabotage you?"; 
   break;
}
