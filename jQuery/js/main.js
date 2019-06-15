//Make paragraph Underlined
$("#makeUnderline").click(function(){
    if( $("#monPara").css("text-decoration")=="none solid rgb(0, 0, 0)")
    $("#monPara").css("text-decoration","underline")
    else
    $("#monPara").css("text-decoration","none solid rgb(0, 0, 0)")

})

//Make paragraph Bold
$("#makeBold").click(function(){
    if($("#monPara").css("font-weight")=="700")
    $("#monPara").css("font-weight","400")
    else
    $("#monPara").css("font-weight","700")

})

//Make paragraph Italic
$("#makeItalic").click(function(){
    if($("#monPara").css("font-style")=="normal")
    $("#monPara").css("font-style","italic")
    else
    $("#monPara").css("font-style","normal")
  
})
  
//Change font size
$("#fontsize").on("change",function(){
    $("#monPara").css("font-size",$("#fontsize").val())
})

//Change font family
$("#fonts").on("change",function(){
    $("#monPara").css("font-family",$("#fonts").val())
})