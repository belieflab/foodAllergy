
<?php
// server side logic for dealing with stimuli
// as needed for the experiment





///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// *  make sure you know what you are doing with these buttons and levers; you may break the experiment  * ///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
?>

<script>
    
"use strict";

const negative = `stim/${version}/-.jpg`;
const positive = `stim/${version}/+.jpg`;

const negativeFeedback =
    `<div class='feedback-container'><img src='${negative}'></div>`;
const positiveFeedback =
    `<div class='feedback-container'><img src='${positive}'></div>`;

/* START TRAINING TRIAL FOR PARTICIPANTS */

// version number
const iteration = "corrected"; // fixed testing stimuli pairing per PRC ec3c20c

// feedback contrainer
let feedbackGenerator = '<p id="feedbackGenerator" style="color:black;"></p>';

// tracks total taps per trial
let totalConfidence = [0]; // must be 0 to compensate for participant should they miss first trial

// // user selection of allergy or no-allergy
let responseKey;

// trial index
let trialIterator = 1;

// durations of trial components:
const fixationDuration = 1000;
const stimuliDuration = 3000;
const feedbackDuration = 1000;

// progress bar container
let progressBar =
    '<div id="counter" class="w3-container" style="max-width: 600px; margin: 0 auto;"><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:black;"></p>';

// set the time remaining notification for participant
let timeRemaining =
    '<p id="timeRemaining" style="text-align:center; color:black;"></p>';

let stimArray = [];
for (let i = 1; i < 19; i++) {
    stimArray.push("stim/" + version + "/s" + i + fileExtension);
}

let shuffledStim = shuffleArray(stimArray); //shuffled array no repeats

// cues within shuffledStim: standard version (until 11), short (until 13). SCdO 07/may/2024
//                 0   1   2   3   4   5   6   7   8   9   10  11
// stim_shuffle = [A,  B,  C,  D,  E,  F,  G,  H,  I,  J,  K,  L]

let practice_stimuli = [
    {
        stimulus: shuffledStim[15],
        stimulus2: null,
        data: {
            test_part: "practice",
            correct_response: 48,
            incorrect_response: 49,
            stim_left: shuffledStim[15].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key
    {
        stimulus: shuffledStim[16],
        stimulus2: null,
        data: {
            test_part: "practice",
            correct_response: 48,
            incorrect_response: 49,
            stim_left: shuffledStim[16].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key
    {
        stimulus: shuffledStim[17],
        stimulus2: null,
        data: {
            test_part: "practice",
            correct_response: 49,
            incorrect_response: 48,
            stim_left: shuffledStim[17].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key
];

// cues within shuffledStim: standard version (until 11), short (until 13). SCdO 07/may/2024
//                 0   1   2   3   4   5   6   7   8   9   10  11
// stim_shuffle = [A,  B,  C,  D,  E,  F,  G,  H,  I,  J,  K,  L]
let learning_stimuli_standard = [
     // 1 key correct
    {
        stimulus: shuffledStim[0],
        stimulus2: null,
        data: {
            test_part: "learning",
            reaction: "allergy",
            trial_identity: "A+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[0].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[2],
        stimulus2: null,
        data: {
            test_part: "learning",
            reaction: "allergy",
            trial_identity: "C-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[2].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[4],
        stimulus2: null,
        data: {
            test_part: "learning",
            reaction: "allergy",
            trial_identity: "E+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[4].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[8],
        stimulus2: null,
        data: {
            test_part: "learning",
            reaction: "no-reaction",
            trial_identity: "I-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[8].slice(8),
            stim_right: "",
            version: iteration,
        },
    },
];

// cues within shuffledStim: standard version (until 11), short (until 13). SCdO 07/may/2024
//                 0   1   2   3   4   5   6   7   8   9   10  11
// stim_shuffle = [A,  B,  C,  D,  E,  F,  G,  H,  I,  J,  K,  L]
let blocking_stimuli_standard = [
    // 1 key correct
    {
        stimulus: shuffledStim[0],
        stimulus2: shuffledStim[1],
        data: {
            test_part: "blocking",
            reaction: "allergy",
            trial_identity: "AB+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy
            stim_left: shuffledStim[0].slice(8),
            stim_right: shuffledStim[1].slice(8),
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[2],
        stimulus2: shuffledStim[3],
        data: {
            test_part: "blocking",
            reaction: "allergy",
            trial_identity: "CD+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy
            stim_left: shuffledStim[2].slice(8),
            stim_right: shuffledStim[3].slice(8),
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[4],
        stimulus2: shuffledStim[5],
        data: {
            test_part: "blocking",
            reaction: "no-reaction",
            trial_identity: "EF-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[4].slice(8),
            stim_right: shuffledStim[5].slice(8),
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[6],
        stimulus2: shuffledStim[7],
        data: {
            test_part: "blocking",
            reaction: "no-reaction",
            trial_identity: "GH-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[6].slice(8),
            stim_right: shuffledStim[7].slice(8),
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[8],
        stimulus2: null,
        data: {
            test_part: "blocking",
            reaction: "allergy",
            trial_identity: "I+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[8].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[9],
        stimulus2: null,
        data: {
            test_part: "blocking",
            reaction: "allergy",
            trial_identity: "J+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[9].slice(8),
            stim_right: "",
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[10],
        stimulus2: null,
        data: {
            test_part: "blocking",
            reaction: "no-reaction",
            trial_identity: "K-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[10].slice(8),
            stim_right: "",
        },
    }, // 0 key
    {
        stimulus: shuffledStim[11],
        stimulus2: null,
        data: {
            test_part: "blocking",
            reaction: "no-reaction",
            trial_identity: "L-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[11].slice(8),
            stim_right: "",
        },
    }
];

// cues within shuffledStim: standard version (until 11), short (until 13). SCdO 07/may/2024
//                 0   1   2   3   4   5   6   7   8   9   10  11
// stim_shuffle = [A,  B,  C,  D,  E,  F,  G,  H,  I,  J,  K,  L]
let testing_stimuli_standard = [
    // 1 key correct
    {
        stimulus: shuffledStim[1],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "allergy",
            trial_identity: "B+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[1].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[3],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "allegy",
            trial_identity: "D+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[3].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[5],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "allergy",
            trial_identity: "F+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (0)
            stim_left: shuffledStim[5].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 1 key correct
    {
        stimulus: shuffledStim[7],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "allergy",
            trial_identity: "H+",
            correct_response: 49, // allergy (1)
            incorrect_response: 48, // no-allergy (2)
            stim_left: shuffledStim[7].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[8],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "no-reaction",
            trial_identity: "I-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[8].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[9],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "no-reaction",
            trial_identity: "J-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy (1)
            stim_left: shuffledStim[9].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[10],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "no-reaction",
            trial_identity: "K-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy
            stim_left: shuffledStim[10].slice(8),
            stim_right: "",
            version: iteration,
        },
    }, // 0 key correct
    {
        stimulus: shuffledStim[11],
        stimulus2: null,
        data: {
            test_part: "testing",
            reaction: "no-reaction",
            trial_identity: "L-",
            correct_response: 48, // no-allergy (0)
            incorrect_response: 49, // allergy
            stim_left: shuffledStim[11].slice(8),
            stim_right: "",
            version: iteration,
        },
    }
];

</script>