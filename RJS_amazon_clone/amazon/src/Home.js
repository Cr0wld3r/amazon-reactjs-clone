import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_backgroundImage"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
        />
        <div className="home_itemRow">
          <Product
            id={101}
            name="Pellentesque habitant morbi tristique senectus et netus et malesuada"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            rating={4}
          />
          <Product
            id={102}
            name="malesuada fames ac turpis egestas."
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
            rating={3}
          />
          <Product
            id={103}
            name="Aliquam tincidunt mauris eu"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
            rating={8}
          />
        </div>
        <div className="home_itemRow">
          <Product
            id={104}
            name="Nam dui mi"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
            rating={4}
          />
          <Product
            id={105}
            name="Donec eu libero sit amet quam egestas "
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525805_186x116_en_US._SY116_CB630079578_.jpg"
            rating={1}
          />
        </div>
        <div className="home_itemRow">
          <Product
            id={106}
            name="Pellentesque habitant morbi tristique senectus et netus et malesuada"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={3}
          />
          <Product
            id={107}
            name="Pellentesque habitant morbi tristique senectus et netus et malesuada"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
            rating={1}
          />
          <Product
            id={108}
            name="Pellentesque habitant morbi tristique senectus et netus et malesuada"
            price={12.58}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_backpack_1X._SY304_CB630082004_.jpg"
            rating={2}
          />
          <Product
            id={109}
            name="Pellentesque habitant morbi tristique senectus et netus et malesuada"
            price={12.58}
            image="https://m.media-amazon.com/images/I/61a6vb+BrHL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
