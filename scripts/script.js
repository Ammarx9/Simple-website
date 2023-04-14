function valid_login(){
    var vaild = true;
// name
    if(document.getElementById("user").value.search(/^\w{4,}$/ig)!=0){
        vaild = false;
        document.getElementById("user-er").style.visibility = "visible";

    }
    else{
        document.getElementById("user-er").style.visibility = "hidden";
    }

    // password
    if(document.getElementById("password").value.search(/^\w{6,}$/ig)!=0){
        vaild = false;
        document.getElementById("password-er").style.visibility = "visible";
    }
    else{
        document.getElementById("password-er").style.visibility = "hidden";

    }
    return vaild;



}



function vaild_Purchase (){
    var vaild = true;

    // model
    if(document.getElementById("model").value =="select model scanner"){
        vaild = false;
        document.getElementById("model-P-er").style.visibility = "visible"
    }
    else{

        document.getElementById("model-P-er").style.visibility = "hidden"

    }

    // number of devices
    
    if(document.getElementById("number-devices").value.search(/^\d$/ig)!=0){
        vaild = false;
        document.getElementById("number-P-devices-er").style.visibility = "visible"

    }
    else{
        document.getElementById("number-P-devices-er").style.visibility = "hidden"
    }

    // name
    if(document.getElementById("name").value.search(/^[A-Z]{6,}$/ig)!=0){
        vaild = false;
        document.getElementById("name-P-er").style.visibility = "visible"
        

    }
    else{
        document.getElementById("name-P-er").style.visibility = "hidden"
        


    }

    // phone
    if(document.getElementById("phone").value.search(/(^9665\d{8}$)/ig)!=0){
        vaild = false;
        document.getElementById("phone-P-er").style.visibility = "visible"
        
    }
    else{
        document.getElementById("phone-P-er").style.visibility = "hidden"
        

    }
    // email

    if(document.getElementById("email").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!=0){
        vaild = false;
        document.getElementById("email-P-er").style.visibility = "visible"

    }
    else{
        document.getElementById("email-P-er").style.visibility = "hidden"


    }

    // adders
    if(document.getElementById("adderss").value.search(/^\w{5,}$/ig)!=0){
        vaild = false;
        document.getElementById("address-P-er").style.visibility = "visible"

    }
    else{
        document.getElementById("address-P-er").style.visibility = "hidden"

    }

    // payment type
    var pay = false;
    var pay_box = document.getElementById("Purchase-f")
    for(var i = 0 ;i<pay_box.paymethod.length;i++){
        if(pay_box.paymethod[i].checked == true){
        pay = true;
        break;
        }
    }
    if(pay ==false){
        vaild = false;
        document.getElementById("payment-P-er").style.visibility = "visible"

    }
    else{
        document.getElementById("payment-P-er").style.visibility = "hidden"

    }

    return vaild
}


function vaild_feedback (num){
    var vaild = true;

    // name
    if(document.getElementById("name").value.search(/^[A-Z]{6,}$/ig)!=0){
        vaild = false;
        document.getElementById("name-F-er").style.visibility = "visible"
        

    }
    else{
        document.getElementById("name-F-er").style.visibility = "hidden"
        


    }
    // check if the name have num
    // if(num == 1){
    //     vaild = false;
    //     document.getElementById("name-F-digerr").style.visibility = "visible"

    // }
    // else{
    //     document.getElementById("name-F-digerr").style.visibility = "hidden"

    // }


    
    // phone
    if(document.getElementById("phone").value.search(/^(9665\d{8})$/ig)!=0){
        vaild = false;
        document.getElementById("phone-F-er").style.visibility = "visible"
        
    }
    else{
        document.getElementById("phone-F-er").style.visibility = "hidden"
        

    }


    // email

    if(document.getElementById("email").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!=0){
        vaild = false;
        document.getElementById("email-F-er").style.visibility = "visible"

    }
    else{
        document.getElementById("email-F-er").style.visibility = "hidden"


    }


    // topics
    if(document.getElementById("topics").value =="topics"){
        vaild = false;
        document.getElementById("topics-F-er").style.visibility = "visible"
    }
    else{

        document.getElementById("topics-F-er").style.visibility = "hidden"

    }

    // message
    

    if(document.getElementById("message").value ==""){
        vaild = false;
        document.getElementById("message-F-er").style.visibility = "visible"

    }
    else{
        document.getElementById("message-F-er").style.visibility = "hidden"


    }





    return vaild;

}


function foucs (col){
    col.style.backgroundColor = "yellow"
    
}

function blurr(col){
    col.style.backgroundColor = "white"
}


// name-F-digerr
// name-P-digerr
function name_dig_vaild_F (){
   

    if(document.getElementById("name").value.search(/\d/g)!=-1){
       
            document.getElementById("name-F-digerr").style.visibility = "visible"
    
        }
        else{
            document.getElementById("name-F-digerr").style.visibility = "hidden"
    
        }
       

}

function name_dig_vaild_P(){
    
    

    if(document.getElementById("name").value.search(/\d/g)!=-1){
        
            document.getElementById("name-P-digerr").style.visibility = "visible"
    
        }
        else{
            document.getElementById("name-P-digerr").style.visibility = "hidden"
    
        }
        

}