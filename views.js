let introView = babeViews.intro({
    name: 'intro',
    trials: 1,
    title: "Welcome!",
    text:
        'This is a short survey about the course "Models of Langauge Evolution". The main purpose is to find out how participants would prefer to continue the course after the Christmas break. Currently, the suggestion was to have ca. 8 <strong>in-class student presentations</strong> on a recent research paper. Participants choose to either do such an in-class presentations (on their own) or do <strong>a post-class survey</strong> (if desired, in small groups).',
    buttonText: "Next"
});

let instructionsView = babeViews.instructions({
    name: 'instructions',
    trials: 1,
    title: "Instructions",
    text:
        "You will next see a few simple yes/no questions about the course. Please answer spontaneously based on your current opinion.",
    buttonText: "Let's do it!"
});



let mainView = babeViews.forcedChoice({
    name: 'main',
    trials: main_trials.length,
    trial_type: "main",
    data: main_trials
});

let postTestView = babeViews.postTest({
    name: 'posttest',
    trials: 1,
    title: "Additional Comments",
    text:
        "If you have any further comments, please give them here."
});

let thanksView = babeViews.thanks({
    name: 'thanks',
    trials: 1,
    title: "Thank you for taking part in this experiment!"
});

// customize the experiment by specifying a view order and a trial structure
// specify view order
const views_seq = [
    introView,
    instructionsView,
//    practiceView,
//    beginExpView,
    mainView,
    postTestView,
    thanksView
];


