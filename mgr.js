define(['managerAPI'], function(Manager){

    var API = new Manager();

    API.addSettings('skip',true);
    API.addSettings('skin','demo');

    API.addGlobal({baseURL:'/implicit/user/ezlotnick/mgr.test/'});


    API.addTasksSet({
        allowRefresh: [{script:function(done, managerBeforeUnload){
            managerBeforeUnload.deactivate();
            done();
        }}],

        pip3: [{type:'pip',version:0.3, scriptUrl:'pip.js?234'}],
        pip4: [{type:'pip',version:0.4, scriptUrl:'pip.js?123'}],
        quest: [{type:'quest',scriptUrl:'quest.js'}]
    });


    API.addSequence([
        {inherit:'allowRefresh'},
        {inherit:'pip3', title:'pip 0.3'},
        {inherit:'pip4', title:'pip 0.4'},
        {inheirt:'quest', title: 'quest'}
    ]);

    return API.script;
});
