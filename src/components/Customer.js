import React from "react";

const Customer = (c) => {
  return (
    <div>
      <CustomerProfile id={c.id} image={c.image} name={c.name} />
      <CustomerInfo birthday={c.birthday} gender={c.gender} jop={c.jop} />
    </div>
  );
};

const CustomerProfile = (c) => {
  return (
    <div>
      <img src={c.image} alt="profile" />
      <h2>
        {c.name}({c.id})
      </h2>
    </div>
  );
};

const CustomerInfo = (c) => {
  return (
    <div>
      <p>{c.birthday}</p>
      <p>{c.gender}</p>
      <p>{c.jop}</p>
    </div>
  );
};

export default Customer;
