# cat_cookies
少ないソースでできている<br>
Chromium用ネスケ形式クッキー保存アドオン<br>
<br>
# つかいかた
1.<br>
chrome://extensions/ でパッケージ化されていない拡張機能を読み込むで<br>
cat_cookiesのディレクトリを選択<br>
<br>
2.<br>
cookieが欲しいページで拡張機能の猫のアイコンをクリックして<br>
cat eat cookieのボタンを押す<br>
<br>
# 注意点
yt_dlpでのクッキー使用の際にエラーが発生する場合はcookies.txt内のドメイン名の<br>
最初の文字がドットじゃないものが含まれると読み取りに失敗して動作をしないようです<br>
`www.youtube.com`等が含まれる場合は該当レコードを削除するか`.www.youtube.com`へ書き換えてください<br>
<br>
# 検証環境
chrome バージョン: 110.0.5481.178（Official Build） （64 ビット）<br>
