
/* create timeline */
let timeline = [];

/* define welcome message trial */
let welcome = {
    type: "html-keyboard-response",
    stimulus: '<h1 style="color:black;">Welcome to the experiment!</h1>'+
    '<p>Press any key to begin.</p>',
};



/* define instructions trial */
let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">In the first part of the experiment, you are asked to imagine that you are an allergist (someone who tries to discover the cause of allergic reactions in people).</h2>' +
            '<h3 style="color:black;">You have been presented with a new patient who suffers from allergic reactions following some meals, but not others.</h3> '+
            '<h3 style="color:black;">You arrange for them to eat a number of different meals, containing one or two foods, and observe whether or not they have an allergic reaction.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
    choices: [32], //ascii spacebar
};


let instructions_2 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">During the first part of the experiment, you will be shown pictures of the foods given to your patient for each meal.</h2>'+
            '<h3 style="color:black;">You will then be shown whether or not they suffered an allergic reaction after eating the meal.</h3>' + 
            '<h3 style="color:black;">When you see each meal, you will have three seconds to predict whether or not you believe they will suffer an allergic reaction after eating the meal.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
            choices: [32], //ascii spacebar
};


let instructions_3 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">To predict that a particular meal <strong><u>will not</strong></u> cause an allergy please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
            '<h2 style="color:black;">To predict that a meal <b><u>will cause</b></u> an allergic reaction please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
            '<p style="color:black;">Press either of the response keys to continue.</p>',
    choices: [48, 49], //ascii spacebar
};


let instructions_4 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
            '<h3 style="color:black;">But hopefully, as you see more meals, you will learn which foods tend to make your patient have an allergic reaction.</h3>'+
            '<br>'+
            '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
            '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
            '<h3 style="color:black;">If you are very confident you should press and hold until the meal disappears from the screen.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
    choices: [32],
};


let instructions_5 = {
type: "html-keyboard-response",
stimulus: '<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the meal leaves the screen.</h2>'+
        '<br>'+
        '<h2 style="color:black;">Food <strong><u>does not</strong></u> cause an allergy &#8594 <q><strong>0</strong></q> key </h2>'+
        '<h2 style="color:black;">Food <strong><u>causes</strong></u> an allergy &#8594 <q><strong>1</strong></q> key</h2>'+
        '<p style="color:black;">Press the spacebar to begin the practice trials.</p>',
choices: [32],
};


// create fixation point
let fixation = {
    // data: {test_part: 'fixation'},
    type: 'html-keyboard-response',
    stimulus: '<div style="color:black; font-size:60px;"></div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
}

// create  trials
let stimuli = {
    type: "html-keyboard-response",
    stimulus: function(){
            var html="<img src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
            "<img src='"+jsPsych.timelineVariable('stimulus2', true)+"'>";
            return html;
    }, 
    
    // jsPsych.timelineVariable('stimulus'),
    choices: [jsPsych.NO_KEYS], // key_press handled instead by responseKey
    trial_duration: 3000,
    // stimulus_duration: 3000,
    response_ends_trial: false,
    prompt: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
    data: jsPsych.timelineVariable('data'),
    on_load: function buttonPress(data){
        barFill = document.getElementById("fillUp");
        barFill.innerHTML = 'Hold response key to indicate confidence level.';
        document.getElementById("tapTap").focus(); //gives focus to the text box
        $(document).ready(function(){
            $("#tapTap").keypress(function(event){
                var keycode = event.which;
                if (barFill.innerHTML = 'Hold response key to indicate confidence level.') { // reused from eefrt, just needed a placeholder here
                  if (keycode == 48) {
                    document.getElementById("counter").setAttribute("onkeydown", "return moveConfidence()"); // event.charCode allows us to set specific keys to use
                    responseKey = 48;
                    // console.log(responseKey);
                  } else if (keycode == 49) {
                    document.getElementById("counter").setAttribute("onkeydown", "return moveConfidence()"); // event.charCode allows us to set specific keys to use
                    responseKey = 49;
                    // console.log(responseKey);
                  } else { // all other keys ignored
                    document.getElementById("counter").setAttribute("onkeydown", "return false"); // event.charCode allows us to set specific keys to use 
                  }
              }
            });
        });
    },
    on_finish: function(data){

    data.subjectkey = GUID;
    data.src_subject_id = workerId;
    data.site = siteNumber;
    data.interview_date = today;
    data.interview_age = ageAtAssessment;
    data.sex = sexAtBirth;
    data.phenotype = groupStatus;
    data.handedness = handedness;
    data.response = responseKey;

    if (responseKey == data.correct_response) {
        data.accuracy = 1;
        data.confidence = totalConfidence;
        responseKey = '';
    } else if (responseKey == data.incorrect_response) {
        data.accuracy = 0;
        data.confidence = totalConfidence;
        responseKey = '';
    } else {
        data.accuracy = '';
        data.confidence = '';
        responseKey = '';
    }
    data.index = trialIterator;
    trialIterator ++;
    }
};


// create feedback trials
let feedback = {
    // data: {test_part: 'feedback'},
    type: 'html-keyboard-response',
    // stimulus: function() {
    //     let last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;
    //     if (last_trial_accuracy == 1) {
    //         return '<div style="color:red; font-size:60px;">ALLERGIC REACTION!</div>'
    //     } else {
    //         return '<div style="color:green; font-size:60px;">NO REACTION</div>'
    //     }
    //   },
    stimulus: function() {
    let last_trial_feedback = jsPsych.data.get().last(1).values()[0].correct_response;
    if (last_trial_feedback == 49) { // if last correct_response == 49 (1 key)
        // return '<div style="color:red; font-size:60px;">ALLERGIC REACTION!</div>'
        return '<img src=stimuli/+.jpg ></img>'
    } else if (last_trial_feedback == 48) { // if last correct_response == 48 (0 key)
        // return '<div style="color:green; font-size:60px;">NO REACTION</div>'
        return '<img src=stimuli/-.jpg ></img>'
    }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    response_ends_trial: false,
    // post_trial_gap: jsPsych.randomization.sampleWithReplacement(isi, 5, [5,1]),
    post_trial_gap: 1000, //ISI
    on_finish: function(data){
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    // data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    
    }
};



/* END TRAINING TRIAL FOR PARTICIPANTS */



/* BEGIN EXPERIMENT */

let instructions_6 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">Let us begin!</h2>'+
            '<p style="color:black;">Press the spacebar when you are ready to start the experiment.</p>',
    choices: [32],

};

//COMPLETION MESSAGE: Completed Classification Phase

let save_data = {
    type: "html-keyboard-response",
    stimulus: "<p>Data saving...</p>"+
    '<div class="sk-cube-grid">'+
  '<div class="sk-cube sk-cube1"></div>'+
  '<div class="sk-cube sk-cube2"></div>'+
  '<div class="sk-cube sk-cube3"></div>'+
  '<div class="sk-cube sk-cube4"></div>'+
  '<div class="sk-cube sk-cube5"></div>'+
  '<div class="sk-cube sk-cube6"></div>'+
  '<div class="sk-cube sk-cube7"></div>'+
  '<div class="sk-cube sk-cube8"></div>'+
  '<div class="sk-cube sk-cube9"></div>'+
  '</div>'+
    "<p>Do not close this window until the text dissapears.</p>",
  
    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    on_finish: function(){
      saveData("kamin_" + workerId, jsPsych.data.get().csv());
      document.getElementById("unload").onbeforeunload='';
      $(document).ready(function(){
      $("body").addClass("showCursor"); // returns cursor functionality
  });
    }
  };


  
  let end = {
    type: "html-keyboard-response",
    stimulus:   "<p>Thank you!</p>"+
    "<p>You have successfully completed the experiment and your data has been saved.</p>"+
    "<p>To leave feedback on this task, please click the following link:</p>"+
    "<p><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
    // "<p>Please wait for the experimenter to continue.</p>"+
    "<p><i>You may now close the expriment window at anytime.</i></p>",
    choices: jsPsych.NO_KEYS,
    // trial_duration: 60000,
  };

// call main
$.getScript("exp/main.js");


