document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('�������Ͷ��ɹ���www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('�������Ͷ��ɹ���www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('�������Ͷ��ɹ���www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('�������Ͷ��ɹ���www.17sucai.com');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('�������Ͷ��ɹ���www.17sucai.com');
    return false;
}