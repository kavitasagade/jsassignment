ask = (ques, yes, no)=> {
    if(confirm(ques)) yes();
    else no();
};
ask(
    "Do you agree",
    function () {
        alert("You agreed....");
    },
    function (){
        alert("You have cancelled the execution ....");
    }
);