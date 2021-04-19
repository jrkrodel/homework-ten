import * as MODEL from "../model/model.js";

function init() {

    $("nav a").click(function(event){
    let btnId = this.id;
    let contentId = btnId + "Content";
    if(btnId == "home") { 
            MODEL.removeBlackNav();
            MODEL.getPageContent(contentId, MODEL.addPromoListeners);
        } else if(btnId == "tours") {
            MODEL.removeWhiteNav();
            MODEL.getPageContent(contentId, MODEL.addTourListeners);
        } else {
            MODEL.removeWhiteNav();
            MODEL.getPageContent(contentId);
        }
    });
}

$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent",MODEL.addPromoListeners);
})
