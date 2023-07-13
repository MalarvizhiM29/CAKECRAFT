import Panel from "./components/panel/Panel";
import Cake from "./components/cake/Cake";
import "./App.css";
import { useEffect, useState } from "react";
import Cakeform from "./components/cakeForm/Cakeform";

// const CAKES = [
//   {
//     // id:nanoid(),
//     image:
//       "https://cdn.shopify.com/s/files/1/0034/8343/5072/products/Web_ChocolateTruffle.jpg?v=1681449307",
//     name: "Choco truffle",
//     weight: "1/2 kg",
//     price: "₹300",
//   },
//   {
//     // id:nanoid(),
//     image:
//       "https://theobroma.in/cdn/shop/products/EgglessRedVelvetCake1.jpg?v=1632141306",
//     name: "Red Velvet",
//     weight: "1/2 kg",
//     price: "₹300",
//   },
//   {
//     // id:nanoid(),
//     image:
//       "https://bakewithshivesh.com/wp-content/uploads/2021/11/IMG_3947-scaled.jpg",
//     name: "White forest",
//     weight: "1 kg",
//     price: "₹500",
//   },
//   {
//     // id:nanoid(),
//     image:
//       "https://cdn.shopify.com/s/files/1/0516/2831/0688/products/0I4A5479copy_1200x1200.jpg?v=1641168101",
//     name: "Black forest",
//     weight: "1 kg",
//     price: "₹500",
//   },
//   {
//     // id:nanoid(),
//     image:
//       "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-special-butterscotch-cake-half-kg--109218-m.jpg",
//     name: "Butterscotch",
//     weight: "1/2 kg",
//     price: "₹300",
//   },
// ];

export default function App() {
  const [cakes, setCakes] = useState([]);

  const addCake = async (newObj) => {
    await fetch("http://localhost:2000/cakes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
    // newObj.id = nanoid();
    setCakes([...cakes, newObj]);
  };

  // const deleteCake = async (id) => {
  //   const URL = "http://localhost:2000/cakes/" + id;
  //   await fetch(URL, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };
  const getData = async () => {
    const res = await fetch("http://localhost:2000/cakes/get");
    const json = await res.json("");
    setCakes(json);
  };

  useEffect(() => {
    getData();
  }, []);
  // const deleteCake = (id) => {
  //   const filteredCakes = cakes.filter((cak) => cak.id != id);
  //   setCakes(filteredCakes);
  // };
  const [cakeform, setCakeform] = useState(false);
  const opencakeForm = () => {
    setCakeform(true);
  };
  const closecakeForm = () => {
    setCakeform(false);
  };
  return (
    <div className="App">
      <Panel opencakeForm={opencakeForm} closecakeForm={closecakeForm} />
      {cakeform ? (
        <Cakeform addCake={addCake} />
      ) : (
        <div className="cakePanel">
          {cakes.map((item) => (
            <Cake list={item} />
          ))}
        </div>
      )}
    </div>
  );
}
