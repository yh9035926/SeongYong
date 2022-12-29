import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  response.end(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP 모듈 테스트</title>
    </head>
    <body>
        <h2>http 모듈 테스트</h2>
    </body>
    </html>`
  );
});

server.listen(3000, () => {
  console.log("3000번 포트로 서버 실행중");
});
