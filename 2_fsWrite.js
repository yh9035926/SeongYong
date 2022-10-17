import fs from "fs";

const fsPromise = fs.promises;
const data = "오늘 저녁은 닭갈비입니다. Hello NodeJs!";

fs.writeFile("./text1.txt", data, "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("파일이 정상적으로 저장되었습니다.");
  }
});

fsPromise
  .writeFile("./text2.txt", data, "utf-8")
  .then(() => {
    console.log("파일이 정상적으로 저장되었습니다");
  })
  .catch((error) => {
    console.log(error);
  });

try {
  fs.writeFileSync("./text3.txt", data, "utf-8");
} catch (error) {
  console.log(error);
}
