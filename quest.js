define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {inherit:'selectOne'}
    ]);

    API.addPagesSet('selectOne', {
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

    return API.script;
});
