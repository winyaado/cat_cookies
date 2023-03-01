// popup.js

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("send-message").addEventListener("click", function() {
		// background.js にメッセージを送信
		chrome.runtime.sendMessage({ type: "eat_cookie"}, function(response) {
			// ネスケ文字列をblobへ変換
			var blob = new Blob([response], { type: 'text/plain' });
			var downloadUrl = window.webkitURL.createObjectURL(blob);
			// ダウンロード用オブジェクトを作成
			var link = document.createElement('a');
			link.setAttribute('href', downloadUrl);
			// ダウンロードを実行
			link.setAttribute('download', 'cookies.txt');
			link.click();
			// メモリ解放
			window.webkitURL.revokeObjectURL(downloadUrl);
		});
	});
});
