chrome.storage.local.get(['text'], function(result){
    // console.log(result);
    document.getElementById("codex").innerText=result['text'];
});
