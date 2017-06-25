define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {inherit:'selectOne'},
        {inherit:'dependency'},
        {inherit:'timer'}
    ]);

    API.addPagesSet('selectOne', {
        header: 'SelectOne sanity check',
        questions : {
            type: 'selectOne',
            style:'multiButtons',
            name:'item1',
            stem : 'On the whole, I am satisfied with myself.',
            answers : ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree'],
            autoSubmit:true
        },
        noSubmit:true
    });

    API.addPagesSet('timer', {
        header: 'Question timer',
        timer: {
            duration: 3,
            message: 'You are out of time, lets move on.'
        },
        questions: [{
            type: 'text',
            stem: 'Timer test',
            autoSubmit: true
        }],
        noSubmit: true
    });


    API.addPagesSet('dependency', {
        questions:[
            {type:'selectOne',name:'dependency',numericValues:true, answers: ['hide', 'show']},
            {
                remix: true,
                mixer:'branch',
                conditions: [ {compare: 2, to: 'current.questions.dependency.response'} ],
                data: [
                    {type:'info', description:'Now I\'m visibile'}
                ]
            }
        ]
    });

    return API.script;
});
