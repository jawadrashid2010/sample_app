
function updateCount(elem)
{
    var limit = 140;
    var elem_content = elem.value;
    var elem_len = elem_content.length;
    var len = 0;
    if(elem_len == 0)
    {
        len = limit;
    }
    else
    {
        len = limit - parseInt(elem_len);
    }
    
    if(len < 0)
    {
        len = 0;
    }

    document.getElementById("chars_left").innerHTML = len + '';
}

function limitLength(elem, event)
{
    var limit = 140;
    var elem_content = elem.value;
    var elem_len = parseInt(elem_content.length);
    
    var chCode = (event.charCode === undefined) ? event.keyCode : event.charCode;

    
    if (elem_len >= 140)
    {        
        elem.value = elem.value.substring(0, 140);
        if(chCode == 0)
        {
            return true;
        }
        return false;
    }
    return true;
}
