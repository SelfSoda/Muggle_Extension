
chrome.contextMenus.create({
    'type':'normal',
    'title':'运行Python代码',
    'contexts':['selection'],
    'id':'run',
    'onclick':run_python
});

function run_python(info, tab){
    var str = info.selectionText;
    chrome.storage.local.set({'text':str}, function(){
        //do something
    });
    window.open("popup.html", "Run Your Script", "width=600,height=450,status=no,scrollbars=yes,resizable=no");
}


