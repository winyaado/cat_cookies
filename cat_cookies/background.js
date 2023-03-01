
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.type) {
        case "eat_cookie":
            //現在アクティブなタブを取得
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                // 現在アクティブなタブtabs[0]
                console.log(tabs[0]);
                // 現在アクティブなタブで使用されているすべてのクッキーを取得する
                chrome.cookies.getAll({ url: tabs[0].url }, function(cookies) {
                    //ネスケ形式へ変換
                    var cookieString = '';
                    cookies.forEach(function(cookie) {
                        cookieString += cookie.domain + '\t';
                        cookieString += 'TRUE\t';
                        cookieString += cookie.path + '\t';
                        cookieString += cookie.secure ? 'TRUE\t' : 'FALSE\t';
                        cookieString += cookie.expirationDate ? Math.floor(cookie.expirationDate) : 0;
                        cookieString += '\t';
                        cookieString += cookie.name + '\t';
                        cookieString += cookie.value + '\n';
                    });  
                    //popup.js にデータを送る
                    sendResponse(cookieString);
                });
            });
            break;
        default:
            console.log("Error: Unkown request.")
            console.log(request);
        }

        return true;
    }
);

