function MsgBox({userName, textColor}){
    // let css = {color: {textColor}} ; 
    return(
        <h1 style={{color: textColor}}> Hellow, {userName} </h1>
    ) ;

}

export default MsgBox ; 