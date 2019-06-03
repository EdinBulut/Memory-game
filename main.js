$(document).ready(function(){
    
    
    var wrapp = $('#wrapp');
    wrapp.append('<div class="container"></div>');
    var container = $('.container');
    var itemAr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    var testClicks = 0;
    var savedAr = [ ];
    var kraj = 0;
    
    for ( var i=0; i<16; i++){
        var rand = Math.floor(Math.random()*itemAr.length);
        container.append('<div class="box"> <div class="back">'+ itemAr [rand] +'</div> <div class="front"></div> </div>');
        itemAr.splice(rand,1);
    };
    
    
    var boxes = $('.box');
    start();
    
    function start() {
        boxes.click(function() {
        savedAr.push($(this));
        testClicks++;
        $(this).find('.front').css('transform', 'perspective(900px) rotateY(180deg)');
        $(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
            
        if (testClicks === 2 ){
            
            boxes.off();
            
            if ( savedAr[0].html() === savedAr[1].html() ){
                testClicks = 0;
                start();
                savedAr.length = 0;
                kraj++;
                if (kraj === 8) {
                    alert('Igra je gotova');
                };
            } else { 
                setTimeout ( function() {
                savedAr[0].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');    
                savedAr[0].find('.back').css('transform', 'perspective(900px) rotateY(180deg)'); 
                savedAr[1].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');    
                savedAr[1].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
                testClicks = 0;
                start();
                savedAr.length = 0;
                
                }, 800);
                
                    
                   };
            };
        
        });
    };
    
    
    
});