/************************* 
 * Arrow_Simon_Vert Test *
 *************************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'arrow_simon_vert';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions_simonRoutineBegin());
flowScheduler.add(instructions_simonRoutineEachFrame());
flowScheduler.add(instructions_simonRoutineEnd());
const blocks_trainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_trainLoopBegin, blocks_trainLoopScheduler);
flowScheduler.add(blocks_trainLoopScheduler);
flowScheduler.add(blocks_trainLoopEnd);
flowScheduler.add(instructions_timingRoutineBegin());
flowScheduler.add(instructions_timingRoutineEachFrame());
flowScheduler.add(instructions_timingRoutineEnd());
const trials_train_timingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_train_timingLoopBegin, trials_train_timingLoopScheduler);
flowScheduler.add(trials_train_timingLoopScheduler);
flowScheduler.add(trials_train_timingLoopEnd);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=4D95157C', '');

  return Scheduler.Event.NEXT;
}


var instructions_simonClock;
var instruct_text_simon;
var instruct_resp_simon;
var trial_train_simonClock;
var train_trial_hand;
var fixation_simon;
var target_simon;
var trial_resp_simon;
var train_trial_num;
var color_blue;
var color_orange;
var feedbackClock;
var feedback_text;
var block_note_trainClock;
var train_block_one_text;
var train_block_later_text;
var train_block_note_resp;
var train_block_num;
var train_block_one;
var instructions_timingClock;
var instruct_text_timing;
var instruct_resp_timing;
var trial_train_timingClock;
var hand_timing;
var fixation_timing;
var dot1_timing;
var dot2_timing;
var dot3_timing;
var dot4_timing;
var trial_resp_timing;
var timing_trial_num;
var feedback_timingClock;
var feedback_text_timing;
var instructionsClock;
var instruct_text;
var instruct_resp;
var trialClock;
var trial_hand;
var fixation;
var dot1;
var dot2;
var dot3;
var dot4;
var target;
var trial_resp;
var accs;
var rews;
var too_slows;
var too_soons;
var trial_num;
var feedback_testClock;
var feedback_test_text;
var block_noteClock;
var block_one_text;
var block_later_text;
var block_note_resp;
var block_num;
var block_one;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions_simon"
  instructions_simonClock = new util.Clock();
  instruct_text_simon = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text_simon',
    text: 'You are about to begin a block of practice trials in a simple arrow response game.\n\nIn each trial, you will stare at a white cross in the center of the screen.\n\nAt a random time during the trial, a colored arrow will appear on the right, left, top, or bottom side of the screen. You will next press an arrow key to report the direction of the arrow. \n\nOn odd numbered trials (1, 3, 5, and so on) you will see a BLUE arrow on the left or right side and you will press the LEFT or RIGHT arrow key with your RIGHT hand:\n\n* If the arrow points LEFT, press the LEFT key with your right POINTER finger. \n* If the arrow points RIGHT, press the RIGHT key with your right MIDDLE finger.\n\nOn even numbered trials (2, 4, 6, and so on) you will see an ORANGE arrow on the top or bottom side and you will press the UP or DOWN arrow key with your LEFT hand. \n\n* If the arrow points UP, press the UP key with your left MIDDLE finger. \n* If the arrow points DOWN, press the DOWN key with your left POINTER finger.\n\nAfter each trial, you will receive feedback about how you did. Please try to respond as quickly and accurately as you can.\n\nWhen you are ready to begin the block of practice trials, please press the SPACE BAR. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instruct_resp_simon = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_train_simon"
  trial_train_simonClock = new util.Clock();
  train_trial_hand = new visual.TextStim({
    win: psychoJS.window,
    name: 'train_trial_hand',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color(undefined),  opacity: 0.0,
    depth: 0.0 
  });
  
  fixation_simon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_simon', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  target_simon = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target_simon', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : undefined, size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  trial_resp_simon = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  train_trial_num = 1;
  color_blue = '#a3d0fb';
  color_orange = '#f3af84';
  
  // Defaults (i.e., trial 1)
  //target_resp = 'o';
  //target_color = color_blue;
  //target_file = 'right_blue.png'
  //target_pos = [(-0.33), 0];
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "block_note_train"
  block_note_trainClock = new util.Clock();
  train_block_one_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'train_block_one_text',
    text: 'Nice job! You completed training block 1 of 2. Feel free to relax for a moment. And remember: \n\nOn odd numbered trials (1, 3, 5, and so on) you will see a BLUE arrow on the left or right side and you will press the LEFT or RIGHT arrow key with your RIGHT hand:\n\n* If the arrow points LEFT, press the LEFT key with your right POINTER finger. \n* If the arrow points RIGHT, press the RIGHT key with your right MIDDLE finger.\n\nOn even numbered trials (2, 4, 6, and so on) you will see an ORANGE arrow on the top or bottom side and you will press the UP or DOWN arrow key with your LEFT hand. \n\n* If the arrow points UP, press the UP key with your left MIDDLE finger. \n* If the arrow points DOWN, press the DOWN key with your left POINTER finger.\n\nPress the SPACE BAR when you are ready to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  train_block_later_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'train_block_later_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  train_block_note_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  train_block_num = 1;
  train_block_one = true;
  
  // Initialize components for Routine "instructions_timing"
  instructions_timingClock = new util.Clock();
  instruct_text_timing = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text_timing',
    text: 'Nice job! Now you are about to begin a block of practice trials in a rapid response timing game. \n\nIn this block, there are no colors that you need to respond to. Instead, in each trial you will see a colored cross in the center of the screen. Next, the cross will turn into a black dot that flashes three times. After the third flash, a WHITE DOT will appear at the center of the screen.\n\nYour new goal is to respond exactly when you see the WHITE DOT. \n\nYou can press the LEFT arrow key with your right pointer finger, the RIGHT arrow key with your right middle finger, the UP arrow key with your left middle finger, or the DOWN arrow key with your left pointer finger.\n\nWe recommend that you switch between using your right hand (left/right) and left hand (up/down), just as you did in the first phase of practice. This will help you prepare for the later test phase. \n\nAfter each trial, you will get feedback about how you did. \n\nWe will tell you if you were too slow or too fast or if you pressed the wrong key (e.g., you pressed left arrow key on an odd up/down trial). \n\nWhen you are ready to begin this block of practice trials, please press the SPACE BAR. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instruct_resp_timing = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_train_timing"
  trial_train_timingClock = new util.Clock();
  hand_timing = new visual.TextStim({
    win: psychoJS.window,
    name: 'hand_timing',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color(undefined),  opacity: 0.0,
    depth: 0.0 
  });
  
  fixation_timing = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_timing', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  dot1_timing = new visual.Polygon ({
    win: psychoJS.window, name: 'dot1_timing', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  dot2_timing = new visual.Polygon ({
    win: psychoJS.window, name: 'dot2_timing', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  dot3_timing = new visual.Polygon ({
    win: psychoJS.window, name: 'dot3_timing', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  dot4_timing = new visual.Polygon ({
    win: psychoJS.window, name: 'dot4_timing', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  trial_resp_timing = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  timing_trial_num = 1;
  // Initialize components for Routine "feedback_timing"
  feedback_timingClock = new util.Clock();
  feedback_text_timing = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text_timing',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text',
    text: 'Nice job! Now you are about to begin a block of trials in a timed arrow response game. You will respond to arrows like in the first phase of practice, but you will need to time your responses perfectly, like in the second phase of practice.\n\nAs in the first phase of practice, at a random time during the trial, a colored arrow will appear on the right, left, top, or bottom side of the screen. You will press a key to report the direction of the arrow. \n\nOn odd numbered trials (1, 3, 5, and so on) you will see a BLUE arrow on the left or right side and you will press the LEFT or RIGHT arrow key with your RIGHT hand:\n\n* If the arrow points LEFT, press the LEFT key with your right POINTER finger. \n* If the arrow points RIGHT, press the RIGHT key with your right MIDDLE finger.\n\nOn even numbered trials (2, 4, 6, and so on) you will see an ORANGE arrow on the top or bottom side and you will press the UP or DOWN arrow key with your LEFT hand. \n\n* If the arrow points UP, press the UP key with your left MIDDLE finger. \n* If the arrow points DOWN, press the DOWN key with your left POINTER finger.\n\nAs in the second phase of practice, each trial you will see a cross in the center of the screen. The cross will turn into a black dot that flashes three times. After the third flash, a WHITE DOT will appear at the center of the screen.\n\nPlease respond exactly when the WHITE DOT appears.\n\nWhen you are ready to begin the first block, please press the SPACE BAR. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instruct_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trial_hand = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_hand',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color(undefined),  opacity: 0.0,
    depth: 0.0 
  });
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  dot1 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot1', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  dot2 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot2', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  dot3 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot3', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  dot4 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot4', 
    edges: 1000, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : undefined, size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  trial_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  accs = [];
  rews = [];
  too_slows = [];
  too_soons = [];
  trial_num = 1;
  color_blue = '#a3d0fb';
  color_orange = '#f3af84';
  
  
  
  // Defaults (i.e., trial 1)
  //target_resp = 'o';
  //target_color = color_blue;
  //target_file = 'right_blue.png'
  //target_pos = [(-0.33), 0];
  // Initialize components for Routine "feedback_test"
  feedback_testClock = new util.Clock();
  feedback_test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_test_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "block_note"
  block_noteClock = new util.Clock();
  block_one_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_one_text',
    text: 'Nice job! You completed block 1 of 10. Feel free to relax for a moment. And remember: \n\nOn odd numbered trials (1, 3, 5, and so on) you will see a BLUE arrow on the left or right side and you will press the LEFT or RIGHT arrow key with your RIGHT hand:\n\n* If the arrow points LEFT, press the LEFT key with your right POINTER finger. \n* If the arrow points RIGHT, press the RIGHT key with your right MIDDLE finger.\n\nOn even numbered trials (2, 4, 6, and so on) you will see an ORANGE arrow on the top or bottom side and you will press the UP or DOWN arrow key with your LEFT hand. \n\n* If the arrow points UP, press the UP key with your left MIDDLE finger. \n* If the arrow points DOWN, press the DOWN key with your left POINTER finger.\n\nPress the SPACE BAR when you are ready to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  block_later_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_later_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  block_note_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  block_num = 1;
  block_one = true;
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instruct_resp_simon_allKeys;
var instructions_simonComponents;
function instructions_simonRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_simon'-------
    t = 0;
    instructions_simonClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruct_resp_simon.keys = undefined;
    instruct_resp_simon.rt = undefined;
    _instruct_resp_simon_allKeys = [];
    // keep track of which components have finished
    instructions_simonComponents = [];
    instructions_simonComponents.push(instruct_text_simon);
    instructions_simonComponents.push(instruct_resp_simon);
    
    for (const thisComponent of instructions_simonComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_simonRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_simon'-------
    // get current time
    t = instructions_simonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_text_simon* updates
    if (t >= 0.0 && instruct_text_simon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_text_simon.tStart = t;  // (not accounting for frame time here)
      instruct_text_simon.frameNStart = frameN;  // exact frame index
      
      instruct_text_simon.setAutoDraw(true);
    }

    
    // *instruct_resp_simon* updates
    if (t >= 0.0 && instruct_resp_simon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_resp_simon.tStart = t;  // (not accounting for frame time here)
      instruct_resp_simon.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_resp_simon.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp_simon.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp_simon.clearEvents(); });
    }

    if (instruct_resp_simon.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_resp_simon.getKeys({keyList: ['space'], waitRelease: false});
      _instruct_resp_simon_allKeys = _instruct_resp_simon_allKeys.concat(theseKeys);
      if (_instruct_resp_simon_allKeys.length > 0) {
        instruct_resp_simon.keys = _instruct_resp_simon_allKeys[0].name;  // just the first key pressed
        instruct_resp_simon.rt = _instruct_resp_simon_allKeys[0].rt;
        // was this correct?
        if (instruct_resp_simon.keys == '') {
            instruct_resp_simon.corr = 1;
        } else {
            instruct_resp_simon.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_simonComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_simonRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_simon'-------
    for (const thisComponent of instructions_simonComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (instruct_resp_simon.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         instruct_resp_simon.corr = 1;  // correct non-response
      } else {
         instruct_resp_simon.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('instruct_resp_simon.keys', instruct_resp_simon.keys);
    psychoJS.experiment.addData('instruct_resp_simon.corr', instruct_resp_simon.corr);
    if (typeof instruct_resp_simon.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruct_resp_simon.rt', instruct_resp_simon.rt);
        routineTimer.reset();
        }
    
    instruct_resp_simon.stop();
    // the Routine "instructions_simon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks_train;
var currentLoop;
function blocks_trainLoopBegin(blocks_trainLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks_train = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks_train'
  });
  psychoJS.experiment.addLoop(blocks_train); // add the loop to the experiment
  currentLoop = blocks_train;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlocks_train of blocks_train) {
    const snapshot = blocks_train.getSnapshot();
    blocks_trainLoopScheduler.add(importConditions(snapshot));
    const trials_train_simonLoopScheduler = new Scheduler(psychoJS);
    blocks_trainLoopScheduler.add(trials_train_simonLoopBegin, trials_train_simonLoopScheduler);
    blocks_trainLoopScheduler.add(trials_train_simonLoopScheduler);
    blocks_trainLoopScheduler.add(trials_train_simonLoopEnd);
    blocks_trainLoopScheduler.add(block_note_trainRoutineBegin(snapshot));
    blocks_trainLoopScheduler.add(block_note_trainRoutineEachFrame(snapshot));
    blocks_trainLoopScheduler.add(block_note_trainRoutineEnd(snapshot));
    blocks_trainLoopScheduler.add(endLoopIteration(blocks_trainLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials_train_simon;
function trials_train_simonLoopBegin(trials_train_simonLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_train_simon = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.csv',
    seed: undefined, name: 'trials_train_simon'
  });
  psychoJS.experiment.addLoop(trials_train_simon); // add the loop to the experiment
  currentLoop = trials_train_simon;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_train_simon of trials_train_simon) {
    const snapshot = trials_train_simon.getSnapshot();
    trials_train_simonLoopScheduler.add(importConditions(snapshot));
    trials_train_simonLoopScheduler.add(trial_train_simonRoutineBegin(snapshot));
    trials_train_simonLoopScheduler.add(trial_train_simonRoutineEachFrame(snapshot));
    trials_train_simonLoopScheduler.add(trial_train_simonRoutineEnd(snapshot));
    trials_train_simonLoopScheduler.add(feedbackRoutineBegin(snapshot));
    trials_train_simonLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    trials_train_simonLoopScheduler.add(feedbackRoutineEnd(snapshot));
    trials_train_simonLoopScheduler.add(endLoopIteration(trials_train_simonLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_train_simonLoopEnd() {
  psychoJS.experiment.removeLoop(trials_train_simon);

  return Scheduler.Event.NEXT;
}


function blocks_trainLoopEnd() {
  psychoJS.experiment.removeLoop(blocks_train);

  return Scheduler.Event.NEXT;
}


var trials_train_timing;
function trials_train_timingLoopBegin(trials_train_timingLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_train_timing = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 60, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_train_timing'
  });
  psychoJS.experiment.addLoop(trials_train_timing); // add the loop to the experiment
  currentLoop = trials_train_timing;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_train_timing of trials_train_timing) {
    const snapshot = trials_train_timing.getSnapshot();
    trials_train_timingLoopScheduler.add(importConditions(snapshot));
    trials_train_timingLoopScheduler.add(trial_train_timingRoutineBegin(snapshot));
    trials_train_timingLoopScheduler.add(trial_train_timingRoutineEachFrame(snapshot));
    trials_train_timingLoopScheduler.add(trial_train_timingRoutineEnd(snapshot));
    trials_train_timingLoopScheduler.add(feedback_timingRoutineBegin(snapshot));
    trials_train_timingLoopScheduler.add(feedback_timingRoutineEachFrame(snapshot));
    trials_train_timingLoopScheduler.add(feedback_timingRoutineEnd(snapshot));
    trials_train_timingLoopScheduler.add(endLoopIteration(trials_train_timingLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_train_timingLoopEnd() {
  psychoJS.experiment.removeLoop(trials_train_timing);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    blocksLoopScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopEnd);
    blocksLoopScheduler.add(block_noteRoutineBegin(snapshot));
    blocksLoopScheduler.add(block_noteRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(block_noteRoutineEnd(snapshot));
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(feedback_testRoutineBegin(snapshot));
    trialsLoopScheduler.add(feedback_testRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(feedback_testRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _trial_resp_simon_allKeys;
var target_onset;
var target_resp;
var target_file;
var target_side;
var target_pos;
var target_color;
var hand_text;
var trial_train_simonComponents;
function trial_train_simonRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_train_simon'-------
    t = 0;
    trial_train_simonClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trial_resp_simon.keys = undefined;
    trial_resp_simon.rt = undefined;
    _trial_resp_simon_allKeys = [];
    target_onset = Math.random() * (1 - 0) + 0;
    
    if (train_trial_num % 2 === 0) {
        target_resp = even_target_resp;
        target_file = even_target_file;
        target_side = even_target_side;
        target_pos = even_target_pos;
        target_color = color_orange;
        hand_text = 'VERTICAL';
    } else {
        target_resp = odd_target_resp;
        target_file = odd_target_file; 
        target_side = odd_target_side;
        target_pos = odd_target_pos;
        target_color = color_blue;
        hand_text = 'HORIZONTAL';
    }
    
    train_trial_hand.setText(hand_text);
    train_trial_hand.setColor(target_color);
    fixation_simon.setLineColor(target_color);
    fixation_simon.setFillColor(target_color);
    target_simon.setPos(eval(target_pos));
    target_simon.setImage(target_file);
    
    // keep track of which components have finished
    trial_train_simonComponents = [];
    trial_train_simonComponents.push(train_trial_hand);
    trial_train_simonComponents.push(fixation_simon);
    trial_train_simonComponents.push(target_simon);
    trial_train_simonComponents.push(trial_resp_simon);
    
    for (const thisComponent of trial_train_simonComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_train_simonRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_train_simon'-------
    // get current time
    t = trial_train_simonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *train_trial_hand* updates
    if (t >= 0.0 && train_trial_hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_trial_hand.tStart = t;  // (not accounting for frame time here)
      train_trial_hand.frameNStart = frameN;  // exact frame index
      
      train_trial_hand.setAutoDraw(true);
    }

    
    // *fixation_simon* updates
    if (t >= 0 && fixation_simon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_simon.tStart = t;  // (not accounting for frame time here)
      fixation_simon.frameNStart = frameN;  // exact frame index
      
      fixation_simon.setAutoDraw(true);
    }

    frameRemains = 0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_simon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_simon.setAutoDraw(false);
    }
    
    // *target_simon* updates
    if (t >= target_onset && target_simon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_simon.tStart = t;  // (not accounting for frame time here)
      target_simon.frameNStart = frameN;  // exact frame index
      
      target_simon.setAutoDraw(true);
    }

    
    // *trial_resp_simon* updates
    if (t >= 0 && trial_resp_simon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_resp_simon.tStart = t;  // (not accounting for frame time here)
      trial_resp_simon.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_resp_simon.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_resp_simon.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_resp_simon.clearEvents(); });
    }

    if (trial_resp_simon.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_resp_simon.getKeys({keyList: ['left', 'right', 'up', 'down', 'esc'], waitRelease: false});
      _trial_resp_simon_allKeys = _trial_resp_simon_allKeys.concat(theseKeys);
      if (_trial_resp_simon_allKeys.length > 0) {
        trial_resp_simon.keys = _trial_resp_simon_allKeys[0].name;  // just the first key pressed
        trial_resp_simon.rt = _trial_resp_simon_allKeys[0].rt;
        // was this correct?
        if (trial_resp_simon.keys == target_resp) {
            trial_resp_simon.corr = 1;
        } else {
            trial_resp_simon.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_train_simonComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var err;
var feedback_msg;
var feedback_color;
function trial_train_simonRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_train_simon'-------
    for (const thisComponent of trial_train_simonComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (trial_resp_simon.keys === undefined) {
      if (['None','none',undefined].includes(target_resp)) {
         trial_resp_simon.corr = 1;  // correct non-response
      } else {
         trial_resp_simon.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial_resp_simon.keys', trial_resp_simon.keys);
    psychoJS.experiment.addData('trial_resp_simon.corr', trial_resp_simon.corr);
    if (typeof trial_resp_simon.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_resp_simon.rt', trial_resp_simon.rt);
        routineTimer.reset();
        }
    
    trial_resp_simon.stop();
    if ((trial_resp_simon.keys === target_resp)) {
        err = 0;
        feedback_msg = "Correct!";
        feedback_color = "green";
    } else {
        err = 1;
        feedback_msg = "Incorrect.";
        feedback_color = "red";
    }
    
    train_trial_num = train_trial_num + 1;
    
    psychoJS.experiment.addData('kerr', err)
    psychoJS.experiment.addData('target_onset', target_onset)
    psychoJS.experiment.addData('target_color', target_color)
    psychoJS.experiment.addData('target_pos', target_pos)
    psychoJS.experiment.addData('target_file', target_file)
    psychoJS.experiment.addData('target_resp', target_resp)
    // the Routine "trial_train_simon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_text.setColor(new util.Color(feedback_color));
    feedback_text.setText(feedback_msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 1  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedback_text.status === PsychoJS.Status.STARTED || feedback_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _train_block_note_resp_allKeys;
var block_note_trainComponents;
function block_note_trainRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'block_note_train'-------
    t = 0;
    block_note_trainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    train_block_later_text.setText(train_block_note_text_msg);
    train_block_note_resp.keys = undefined;
    train_block_note_resp.rt = undefined;
    _train_block_note_resp_allKeys = [];
    trial_num = 1;
    // keep track of which components have finished
    block_note_trainComponents = [];
    block_note_trainComponents.push(train_block_one_text);
    block_note_trainComponents.push(train_block_later_text);
    block_note_trainComponents.push(train_block_note_resp);
    
    for (const thisComponent of block_note_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_note_trainRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'block_note_train'-------
    // get current time
    t = block_note_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *train_block_one_text* updates
    if ((train_block_one) && train_block_one_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_block_one_text.tStart = t;  // (not accounting for frame time here)
      train_block_one_text.frameNStart = frameN;  // exact frame index
      
      train_block_one_text.setAutoDraw(true);
    }

    
    // *train_block_later_text* updates
    if ((train_block_later) && train_block_later_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_block_later_text.tStart = t;  // (not accounting for frame time here)
      train_block_later_text.frameNStart = frameN;  // exact frame index
      
      train_block_later_text.setAutoDraw(true);
    }

    
    // *train_block_note_resp* updates
    if (t >= 0.0 && train_block_note_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_block_note_resp.tStart = t;  // (not accounting for frame time here)
      train_block_note_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { train_block_note_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { train_block_note_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { train_block_note_resp.clearEvents(); });
    }

    if (train_block_note_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = train_block_note_resp.getKeys({keyList: ['space', 'esc'], waitRelease: false});
      _train_block_note_resp_allKeys = _train_block_note_resp_allKeys.concat(theseKeys);
      if (_train_block_note_resp_allKeys.length > 0) {
        train_block_note_resp.keys = _train_block_note_resp_allKeys[0].name;  // just the first key pressed
        train_block_note_resp.rt = _train_block_note_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_note_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var train_block_later;
var train_block_note_text_msg;
function block_note_trainRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'block_note_train'-------
    for (const thisComponent of block_note_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('train_block_note_resp.keys', train_block_note_resp.keys);
    if (typeof train_block_note_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('train_block_note_resp.rt', train_block_note_resp.rt);
        routineTimer.reset();
        }
    
    train_block_note_resp.stop();
    train_block_num += 1;
    train_block_later = true;
    train_block_one = false;
    train_block_note_text_msg = (("Nice job! You completed training block " + train_block_num.toString()) + 
        " of 2. Feel free to relax for a moment.\n\nPress the SPACE BAR when you are ready to continue.");
    
    
    
     
    
    
    
    // the Routine "block_note_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruct_resp_timing_allKeys;
var instructions_timingComponents;
function instructions_timingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_timing'-------
    t = 0;
    instructions_timingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruct_resp_timing.keys = undefined;
    instruct_resp_timing.rt = undefined;
    _instruct_resp_timing_allKeys = [];
    // keep track of which components have finished
    instructions_timingComponents = [];
    instructions_timingComponents.push(instruct_text_timing);
    instructions_timingComponents.push(instruct_resp_timing);
    
    for (const thisComponent of instructions_timingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_timingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_timing'-------
    // get current time
    t = instructions_timingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_text_timing* updates
    if (t >= 0.0 && instruct_text_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_text_timing.tStart = t;  // (not accounting for frame time here)
      instruct_text_timing.frameNStart = frameN;  // exact frame index
      
      instruct_text_timing.setAutoDraw(true);
    }

    
    // *instruct_resp_timing* updates
    if (t >= 0.0 && instruct_resp_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_resp_timing.tStart = t;  // (not accounting for frame time here)
      instruct_resp_timing.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_resp_timing.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp_timing.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp_timing.clearEvents(); });
    }

    if (instruct_resp_timing.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_resp_timing.getKeys({keyList: ['space'], waitRelease: false});
      _instruct_resp_timing_allKeys = _instruct_resp_timing_allKeys.concat(theseKeys);
      if (_instruct_resp_timing_allKeys.length > 0) {
        instruct_resp_timing.keys = _instruct_resp_timing_allKeys[0].name;  // just the first key pressed
        instruct_resp_timing.rt = _instruct_resp_timing_allKeys[0].rt;
        // was this correct?
        if (instruct_resp_timing.keys == '') {
            instruct_resp_timing.corr = 1;
        } else {
            instruct_resp_timing.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_timingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_timingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_timing'-------
    for (const thisComponent of instructions_timingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (instruct_resp_timing.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         instruct_resp_timing.corr = 1;  // correct non-response
      } else {
         instruct_resp_timing.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('instruct_resp_timing.keys', instruct_resp_timing.keys);
    psychoJS.experiment.addData('instruct_resp_timing.corr', instruct_resp_timing.corr);
    if (typeof instruct_resp_timing.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruct_resp_timing.rt', instruct_resp_timing.rt);
        routineTimer.reset();
        }
    
    instruct_resp_timing.stop();
    // the Routine "instructions_timing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _trial_resp_timing_allKeys;
var trial_train_timingComponents;
function trial_train_timingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_train_timing'-------
    t = 0;
    trial_train_timingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trial_resp_timing.keys = undefined;
    trial_resp_timing.rt = undefined;
    _trial_resp_timing_allKeys = [];
    
    if (timing_trial_num % 2 === 0) {
        target_color = color_orange;
        hand_text = 'VERTICAL';
    } else {
        target_color = color_blue;
        hand_text = 'HORIZONTAL';
    }
    
    hand_timing.setText(hand_text);
    hand_timing.setColor(target_color);
    fixation_timing.setLineColor(target_color);
    fixation_timing.setFillColor(target_color);
    // keep track of which components have finished
    trial_train_timingComponents = [];
    trial_train_timingComponents.push(hand_timing);
    trial_train_timingComponents.push(fixation_timing);
    trial_train_timingComponents.push(dot1_timing);
    trial_train_timingComponents.push(dot2_timing);
    trial_train_timingComponents.push(dot3_timing);
    trial_train_timingComponents.push(dot4_timing);
    trial_train_timingComponents.push(trial_resp_timing);
    
    for (const thisComponent of trial_train_timingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_train_timingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_train_timing'-------
    // get current time
    t = trial_train_timingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hand_timing* updates
    if (t >= 0.0 && hand_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_timing.tStart = t;  // (not accounting for frame time here)
      hand_timing.frameNStart = frameN;  // exact frame index
      
      hand_timing.setAutoDraw(true);
    }

    
    // *fixation_timing* updates
    if (t >= 0.0 && fixation_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_timing.tStart = t;  // (not accounting for frame time here)
      fixation_timing.frameNStart = frameN;  // exact frame index
      
      fixation_timing.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_timing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_timing.setAutoDraw(false);
    }
    
    // *dot1_timing* updates
    if (t >= 1 && dot1_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot1_timing.tStart = t;  // (not accounting for frame time here)
      dot1_timing.frameNStart = frameN;  // exact frame index
      
      dot1_timing.setAutoDraw(true);
    }

    frameRemains = 1 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot1_timing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot1_timing.setAutoDraw(false);
    }
    
    // *dot2_timing* updates
    if (t >= 1.5 && dot2_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot2_timing.tStart = t;  // (not accounting for frame time here)
      dot2_timing.frameNStart = frameN;  // exact frame index
      
      dot2_timing.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot2_timing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot2_timing.setAutoDraw(false);
    }
    
    // *dot3_timing* updates
    if (t >= 2 && dot3_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot3_timing.tStart = t;  // (not accounting for frame time here)
      dot3_timing.frameNStart = frameN;  // exact frame index
      
      dot3_timing.setAutoDraw(true);
    }

    frameRemains = 2 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot3_timing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot3_timing.setAutoDraw(false);
    }
    
    // *dot4_timing* updates
    if (t >= 2.5 && dot4_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot4_timing.tStart = t;  // (not accounting for frame time here)
      dot4_timing.frameNStart = frameN;  // exact frame index
      
      dot4_timing.setAutoDraw(true);
    }

    
    // *trial_resp_timing* updates
    if (t >= 0 && trial_resp_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_resp_timing.tStart = t;  // (not accounting for frame time here)
      trial_resp_timing.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_resp_timing.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_resp_timing.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_resp_timing.clearEvents(); });
    }

    if (trial_resp_timing.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_resp_timing.getKeys({keyList: ['left', 'right', 'up', 'down', 'esc'], waitRelease: false});
      _trial_resp_timing_allKeys = _trial_resp_timing_allKeys.concat(theseKeys);
      if (_trial_resp_timing_allKeys.length > 0) {
        trial_resp_timing.keys = _trial_resp_timing_allKeys[0].name;  // just the first key pressed
        trial_resp_timing.rt = _trial_resp_timing_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_train_timingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rt;
var even_trial;
var even_resp;
function trial_train_timingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_train_timing'-------
    for (const thisComponent of trial_train_timingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_resp_timing.keys', trial_resp_timing.keys);
    if (typeof trial_resp_timing.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_resp_timing.rt', trial_resp_timing.rt);
        routineTimer.reset();
        }
    
    trial_resp_timing.stop();
    rt = trial_resp_timing.rt;
    even_trial = timing_trial_num % 2 === 0;
    even_resp = (trial_resp_timing.keys === 'up') || (trial_resp_timing.keys == 'down')
    
    if ((even_trial && !even_resp) || (!even_trial && even_resp)) {
        feedback_msg = "Wrong hand.";
        feedback_color = "red";
    } else {
        if ((rt < 2.4)) {
            feedback_msg = "Too fast.";
            feedback_color = "red";
        } else {
            if ((rt > 2.6)) {
                feedback_msg = "Too slow.";
                feedback_color = "red";
            } else {
                if (((rt >= 2.4) && (rt <= 2.6))) {
                    feedback_msg = "Perfect timing!";
                    feedback_color = "green";
                } else {
                    feedback_msg = "No response.";
                    feedback_color = "red";
                }
            }
        }
    }
    timing_trial_num += 1;
    // the Routine "trial_train_timing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_timingComponents;
function feedback_timingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_timing'-------
    t = 0;
    feedback_timingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_text_timing.setColor(new util.Color(feedback_color));
    feedback_text_timing.setText(feedback_msg);
    // keep track of which components have finished
    feedback_timingComponents = [];
    feedback_timingComponents.push(feedback_text_timing);
    
    for (const thisComponent of feedback_timingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_timingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_timing'-------
    // get current time
    t = feedback_timingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text_timing* updates
    if (t >= 0 && feedback_text_timing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text_timing.tStart = t;  // (not accounting for frame time here)
      feedback_text_timing.frameNStart = frameN;  // exact frame index
      
      feedback_text_timing.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text_timing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text_timing.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_timingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_timingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_timing'-------
    for (const thisComponent of feedback_timingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _instruct_resp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruct_resp.keys = undefined;
    instruct_resp.rt = undefined;
    _instruct_resp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruct_text);
    instructionsComponents.push(instruct_resp);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_text* updates
    if (t >= 0.0 && instruct_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_text.tStart = t;  // (not accounting for frame time here)
      instruct_text.frameNStart = frameN;  // exact frame index
      
      instruct_text.setAutoDraw(true);
    }

    
    // *instruct_resp* updates
    if (t >= 0.0 && instruct_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_resp.tStart = t;  // (not accounting for frame time here)
      instruct_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_resp.clearEvents(); });
    }

    if (instruct_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruct_resp_allKeys = _instruct_resp_allKeys.concat(theseKeys);
      if (_instruct_resp_allKeys.length > 0) {
        instruct_resp.keys = _instruct_resp_allKeys[0].name;  // just the first key pressed
        instruct_resp.rt = _instruct_resp_allKeys[0].rt;
        // was this correct?
        if (instruct_resp.keys == '') {
            instruct_resp.corr = 1;
        } else {
            instruct_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (instruct_resp.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         instruct_resp.corr = 1;  // correct non-response
      } else {
         instruct_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('instruct_resp.keys', instruct_resp.keys);
    psychoJS.experiment.addData('instruct_resp.corr', instruct_resp.corr);
    if (typeof instruct_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruct_resp.rt', instruct_resp.rt);
        routineTimer.reset();
        }
    
    instruct_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _trial_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trial_resp.keys = undefined;
    trial_resp.rt = undefined;
    _trial_resp_allKeys = [];
    target_onset = Math.random() + 1.5;
    
    if (trial_num % 2 === 0) {
        target_resp = even_target_resp;
        target_file = even_target_file;
        target_side = even_target_side;
        target_pos = even_target_pos;
        target_color = color_orange;
        hand_text = 'VERTICAL';
    } else {
        target_resp = odd_target_resp;
        target_file = odd_target_file; 
        target_side = odd_target_side;
        target_pos = odd_target_pos;
        target_color = color_blue;
        hand_text = 'HORIZONTAL';
    }
    
    trial_hand.setText(hand_text);
    trial_hand.setColor(target_color);
    fixation.setLineColor(target_color);
    fixation.setFillColor(target_color);
    target.setPos(eval(target_pos));
    target.setImage(target_file);
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_hand);
    trialComponents.push(fixation);
    trialComponents.push(dot1);
    trialComponents.push(dot2);
    trialComponents.push(dot3);
    trialComponents.push(dot4);
    trialComponents.push(target);
    trialComponents.push(trial_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_hand* updates
    if (t >= 0.0 && trial_hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_hand.tStart = t;  // (not accounting for frame time here)
      trial_hand.frameNStart = frameN;  // exact frame index
      
      trial_hand.setAutoDraw(true);
    }

    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *dot1* updates
    if (t >= 1 && dot1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot1.tStart = t;  // (not accounting for frame time here)
      dot1.frameNStart = frameN;  // exact frame index
      
      dot1.setAutoDraw(true);
    }

    frameRemains = 1 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot1.setAutoDraw(false);
    }
    
    // *dot2* updates
    if (t >= 1.5 && dot2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot2.tStart = t;  // (not accounting for frame time here)
      dot2.frameNStart = frameN;  // exact frame index
      
      dot2.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot2.setAutoDraw(false);
    }
    
    // *dot3* updates
    if (t >= 2 && dot3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot3.tStart = t;  // (not accounting for frame time here)
      dot3.frameNStart = frameN;  // exact frame index
      
      dot3.setAutoDraw(true);
    }

    frameRemains = 2 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dot3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dot3.setAutoDraw(false);
    }
    
    // *dot4* updates
    if (t >= 2.5 && dot4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot4.tStart = t;  // (not accounting for frame time here)
      dot4.frameNStart = frameN;  // exact frame index
      
      dot4.setAutoDraw(true);
    }

    
    // *target* updates
    if (t >= target_onset && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    
    // *trial_resp* updates
    if (t >= 1 && trial_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_resp.tStart = t;  // (not accounting for frame time here)
      trial_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_resp.clearEvents(); });
    }

    if (trial_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_resp.getKeys({keyList: ['left', 'right', 'up', 'downesc'], waitRelease: false});
      _trial_resp_allKeys = _trial_resp_allKeys.concat(theseKeys);
      if (_trial_resp_allKeys.length > 0) {
        trial_resp.keys = _trial_resp_allKeys[0].name;  // just the first key pressed
        trial_resp.rt = _trial_resp_allKeys[0].rt;
        // was this correct?
        if (trial_resp.keys == target_resp) {
            trial_resp.corr = 1;
        } else {
            trial_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var too_slow;
var too_soon;
var acc;
var feedback_test_msg;
var feedback_duration;
function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (trial_resp.keys === undefined) {
      if (['None','none',undefined].includes(target_resp)) {
         trial_resp.corr = 1;  // correct non-response
      } else {
         trial_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial_resp.keys', trial_resp.keys);
    psychoJS.experiment.addData('trial_resp.corr', trial_resp.corr);
    if (typeof trial_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_resp.rt', trial_resp.rt);
        routineTimer.reset();
        }
    
    trial_resp.stop();
    
    rt = trial_resp.rt;
    if (((rt >= 1.4) && (rt <= 1.6))) {
        too_slow = false;
        too_soon = false;
        if ((trial_resp.keys === target_resp)) {
            acc = 1;
            err = 0;
        } else {
            acc = 0;
            err = 1;
        }
    } else {
        if ((rt > 1.6)) {
            too_slow = true;
            too_soon = false;
            acc = 0;
        } else {
            too_slow = false;
            too_soon = true;
            acc = 0;
        }
    }
    accs += acc;
    too_slows += too_slow;
    too_soons += too_soon;
    
    if (too_slow) {
        feedback_test_msg = "Too Slow";
        feedback_duration = .5;
        feedback_color = 'red';
    } else {
        if (too_soon) {
            feedback_test_msg = "Too Fast";
            feedback_duration = .5;
            feedback_color = 'red';
        } else {
            if ((trial_resp.corr != 1)) {
                feedback_test_msg = "Wrong key";
                feedback_duration = .5;
                feedback_color = 'red'
            } else {
                feedback_test_msg = "Perfect!";
                feedback_duration = .5;
                feedback_color = 'green';
            }
        }
    }
    
    psychoJS.experiment.addData('trial_num', trial_num)
    psychoJS.experiment.addData('target_onset', target_onset)
    psychoJS.experiment.addData('target_color', target_color)
    psychoJS.experiment.addData('target_pos', target_pos)
    psychoJS.experiment.addData('target_file', target_file)
    psychoJS.experiment.addData('target_resp', target_resp)
    psychoJS.experiment.addData('kerr', err)
    psychoJS.experiment.addData('too_slow', too_slow)
    psychoJS.experiment.addData('too_soon', too_soon)
    
    
    trial_num = trial_num + 1;
    
    
    
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_testComponents;
function feedback_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_test'-------
    t = 0;
    feedback_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_test_text.setColor(new util.Color(feedback_color));
    feedback_test_text.setText(feedback_test_msg);
    // keep track of which components have finished
    feedback_testComponents = [];
    feedback_testComponents.push(feedback_test_text);
    
    for (const thisComponent of feedback_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_test'-------
    // get current time
    t = feedback_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_test_text* updates
    if (t >= 0 && feedback_test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_test_text.tStart = t;  // (not accounting for frame time here)
      feedback_test_text.frameNStart = frameN;  // exact frame index
      
      feedback_test_text.setAutoDraw(true);
    }

    frameRemains = 1  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedback_test_text.status === PsychoJS.Status.STARTED || feedback_test_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedback_test_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_test'-------
    for (const thisComponent of feedback_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _block_note_resp_allKeys;
var block_noteComponents;
function block_noteRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'block_note'-------
    t = 0;
    block_noteClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block_later_text.setText(block_note_text_msg);
    block_note_resp.keys = undefined;
    block_note_resp.rt = undefined;
    _block_note_resp_allKeys = [];
    trial_num = 1;
    // keep track of which components have finished
    block_noteComponents = [];
    block_noteComponents.push(block_one_text);
    block_noteComponents.push(block_later_text);
    block_noteComponents.push(block_note_resp);
    
    for (const thisComponent of block_noteComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_noteRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'block_note'-------
    // get current time
    t = block_noteClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_one_text* updates
    if ((block_one) && block_one_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_one_text.tStart = t;  // (not accounting for frame time here)
      block_one_text.frameNStart = frameN;  // exact frame index
      
      block_one_text.setAutoDraw(true);
    }

    
    // *block_later_text* updates
    if ((block_later) && block_later_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_later_text.tStart = t;  // (not accounting for frame time here)
      block_later_text.frameNStart = frameN;  // exact frame index
      
      block_later_text.setAutoDraw(true);
    }

    
    // *block_note_resp* updates
    if (t >= 0.0 && block_note_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_note_resp.tStart = t;  // (not accounting for frame time here)
      block_note_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_note_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_note_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_note_resp.clearEvents(); });
    }

    if (block_note_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_note_resp.getKeys({keyList: ['space', 'esc'], waitRelease: false});
      _block_note_resp_allKeys = _block_note_resp_allKeys.concat(theseKeys);
      if (_block_note_resp_allKeys.length > 0) {
        block_note_resp.keys = _block_note_resp_allKeys[0].name;  // just the first key pressed
        block_note_resp.rt = _block_note_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_noteComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var block_later;
var block_note_text_msg;
function block_noteRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'block_note'-------
    for (const thisComponent of block_noteComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_note_resp.keys', block_note_resp.keys);
    if (typeof block_note_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_note_resp.rt', block_note_resp.rt);
        routineTimer.reset();
        }
    
    block_note_resp.stop();
    block_num += 1;
    block_later = true;
    block_one = false;
    block_note_text_msg = (("Nice job! You completed block " + block_num.toString()) + 
        " of 10. Feel free to relax for a moment. And remember: \n\n* If a BLUE arrow points LEFT, press the LEFT arrow key with your right POINTER finger\n* If a BLUE arrow points RIGHT, press the RIGHT arrow key with your right MIDDLE finger, and \n\n* If an ORANGE arrow points UP, press the UP arrow key with your left MIDDLE finger\n* If an ORANGE arrow points DOWN, press the DOWN arrow key with your left POINTER finger. \n\nPress the SPACE BAR when you are ready to continue.");
    
    
    
     
    
    
    
    // the Routine "block_note" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
