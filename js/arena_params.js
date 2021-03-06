/* **************************************************************************************

Parameters for  Arena Task
(c) Timo Flesch, 2016/17 
Summerfield Lab, Experimental Psychology Department, University of Oxford

************************************************************************************** */
var html_dissim           = "stimeval_page.html";
var html_thanksalot       = "thanks_page.html";

var FLAG_DEBUG = 1;

var params_vis 	= {};
var params_exp 	= {};
var params_ui   = {};
var stim 		= {};
var numbers 	= {};
var board 		= {};


function arena_setParams() {
	
	// CANVAS
	board.width   =                    window.innerWidth;
	board.height  =                   window.innerHeight;
	board.centre  =   [Math.floor(0.5*window.innerWidth), 
	                 Math.floor(0.5*window.innerHeight)];
	board.radius  =                    0.40*board.height;
	board.rect 	  =       [0,0,board.width,board.height];
	

	// VISUALS 
	params_vis.stimSize           =  0.3*board.radius;
	params_vis.circle             =                {};
	params_vis.circle.colour      =            'grey';
	params_vis.circle.opacity     =               '1';
	params_vis.grid               =                {};
	params_vis.grid.paintGrid     =                 0;  // toggle grid
	params_vis.grid.spacing       =  0.2*board.radius;  // grid spacing in deg
	params_vis.grid.thickness     =                 2;  // grid line width
	params_vis.grid.colour        =           'black';  // grid colour

	// USER INTERFACE
	params_ui.button              =           {};
	params_ui.button.fill         = 'lightblue';
	params_ui.button.stroke       =    '#3b4449';
	params_ui.button.width        =            2;
	params_ui.button.font         =  "Helvetica";
	params_ui.button.fontsize     =         "12";

	params_ui.button.glow         =           {};
	params_ui.button.glow.opacity =       '0.55';
	params_ui.button.glow.colour  =       'blue';
	params_ui.button.glow.width   =          '2';


	// EXPERIMENT 	
	params_exp.stimDir     =                     '../stims/transparent/';	
	params_exp.numTrials   =                                          2;
	params_exp.numStimuli  =                                         16;
	params_exp.numTotal    = params_exp.numTrials*params_exp.numStimuli;


	// STIMULI
	stim.obj         = []; // container for stim objects
	stim.coordsOrig  = []; // saves coordinates of stim objects
	stim.coordsFinal = []; // submitted stimulus coordinates	
	
	stim.stimVect  =  set_exp_stimVect();
	stim.stimNames = set_exp_fileNames();


	// TRIAL COUNTERS
	numbers.trialCount = 1;
	numbers.stimCount  = 0;
}