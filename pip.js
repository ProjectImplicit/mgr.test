define(['pipAPI'], function(APIconstructor) {

    var API = new APIconstructor();
    
    API.addSettings('base_url', '/implicit/user/ezlotnick/mgr.test/');
    
    API.addSequence([
        {
            input: [ {handle:'space',on:'space'} ],
            layout: [
                { media :'center' },
                { media :'click space to proceed', css: {color:'green',background:'yellow'}, location:{top:60} },
                { media :'top left', location:{top:0,left:0} },
                { media :'top right', location:{top:0,right:0} },
                { media :'bottom left', location:{bottom:0,left:0} },
                { media :'bottom right', location:{bottom:0,right:0} }
            ],
            interactions: [
                {
                    conditions: [ {type:'inputEquals',value:'space'} ],
                    actions: [ {type:'endTrial'} ]
                }
            ]
        },

        {
            input: [
                {handle:'leftClick',on:'click',stimHandle:'leftStim'},
                {handle:'rightClick',on:'click',stimHandle:'rightStim'}
            ],
            layout: [
                {media: {html:'<div>click me</div>'}, handle:'leftStim', size: {height:30, width:30}, location:{left:10}, css:{background:'blue'}},
                {media: {html:'<div>click me too</div>'}, handle:'rightStim', size: {height:30, width:30}, location:{right:10}, css:{background:'red'}}
            ],
            interactions: [
                {
                    conditions: [{type:'inputEquals',value:'leftClick'}],
                    actions: [{type:'setTrialAttr', setter:{left:true}}]
                },
                {
                    conditions: [{type:'inputEquals',value:'rightClick'}],
                    actions: [{type:'setTrialAttr', setter:{right:true}}]
                },
                {
                    conditions: [
                        {type:'trialEquals', property:'left', value:true},
                        {type:'trialEquals', property:'right', value:true}
                    ],
                    actions: [{type:'endTrial'}]
                }
            ]
        },

        {
            mixer: 'repeat',
            times: '10',
            data: [
                {
                    input: [ {handle:'finish',on:'timeout', duration:'250'} ],
                    layout: [
                        { media : 'Does the black box blink?', location:{top:20} },
                        { media :{image:'black.jpg'} }
                    ],
                    interactions: [
                        {
                            conditions: [ {type:'inputEquals',value:'finish'} ],
                            actions: [ {type:'endTrial'} ]
                        }
                    ]
                }
            ]
        }
        
        
    ]);

    return API.script;
});


