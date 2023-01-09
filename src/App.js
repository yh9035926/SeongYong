import React from "react";
import Customer from "./components/Customer";

const customer = [
  {
    id: "1",
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "910131",
    gender: "남자",
    jop: "대학생",
  },
  {
    id: "2",
    image: "http://placeimg.com/64/64/2",
    name: "곽민선",
    birthday: "910131",
    gender: "남자",
    jop: "대학생",
  },
  {
    id: "3",
    image: "http://placeimg.com/64/64/3",
    name: "황우천",
    birthday: "910131",
    gender: "남자",
    jop: "대학생",
  },
];

const App = () => {
  return (
    <>
      {customer.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            jop={c.jop}
          />
        );
      })}
    </>
  );
};

export default App;
