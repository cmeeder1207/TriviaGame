// $(document).ready(function(){
// 	$(".userButton").click(function(){
// 	var questions = [
//     { question:
//         "whats 1+1",

//         answers: {
//             a: "0",
//             b:"2",
//             c:"not 2",
//         },
//           answer: "b"
//     },
//     { question:
//         "whats 3+2",

//         answers: {
//             a: "0",
//             b:"5",
//             c:"not 5",
//         },
//           answer:" b"
//     },
//     { question:
//         "whats 4+2",

//         answers: {
//             a: "0",
//             b:"6",
//             c:"not 6",
//         },
//           answer: "b"
//     },
//     { question:
//         "whats 5+2",

//         answers: {
//             a: "0",
//             b:"7",
//             c:"not 7",
//         },
//           answer: "b"
//     },

// ]




	
// 	});
// 	$(".btn2").click(function(){
// 		$("p").show();
// 	});
// });

$('#quiz').quiz({
    resultsScreen: '#results-screen',
    counter: false,
    homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'Is jQuery required for this plugin?',
        'options': [
          'Yes',
          'No'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
      },
      {
        'q': 'How do you use it?',
        'options': [
          'Include jQuery, that\'s it!',
          'Include jQuery and the plugin javascript.',
          'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Come on, it\'s not that easy!'
      },
      {
        'q': 'The plugin can be configured to require a perfect score.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
        'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
      },
      {
        'q': 'How do you specify the questions and answers?',
        'options': [
          'MySQL database',
          'In the HTML',
          'In the javascript configuration'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Refer to the documentation for the structure.',
        'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
      }
    ]
  });