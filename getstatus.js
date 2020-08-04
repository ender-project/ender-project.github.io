$.getJSON(
    "https://status.ender-bot.ml", //リクエストURL
    null,       //送信データ
    function(data, status) {
      // 通信成功時の処理
      document.write(data)
    }
  );