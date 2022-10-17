import fs from "fs";
let text = null;

const fsPromise = fs.promises;

try {
  text = fs.readFileSync("./text1.txt", "utf-8");
  console.log(text);
} catch (error) {
  console.log("파일 읽기 실패");
} finally {
  console.log("결과 값과 상관없이 실행");
}

fs.readFile("./text2.txt", "utf-8", (err, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
});

fsPromise
  .readFile("./text3.txt", "utf-8")
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });


  