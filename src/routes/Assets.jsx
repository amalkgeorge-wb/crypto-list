import SideMenu from "../Components/SideMenu/SideMenu";
import { useEffect, useState } from "react";
import grow from "../assets/images/growth.svg";
function Assets(params) {
  const [currentPrice, setCurrentPrice] = useState();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setCurrentPrice(data);
      // return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  const mappedArray =
    currentPrice &&
    Object.entries(currentPrice?.bpi).map(([key, value]) => {
      return {
        currencyCode: key,
        symbol: value.symbol,
        rate: value.rate_float,
        description: value.description,
      };
    });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SideMenu />
      </div>
      <div className="basis-5/6 bg-slate-900">
        <div>
          <h1 className="text-2xl font-bold text-white p-5">Assets: Bitcoin</h1>
          <div className="flex flex-row p-5">
            {mappedArray?.map((item) => (
              <div key={item?.currencyCode} className="basis-1/3">
                <div className="rounded-md bg-slate-700 mr-5">
                  <div className="flex justify-between pr-6">
                    <h1 className="text-2xl font-bold text-white p-6">
                      {item?.currencyCode}
                    </h1>
                    <img src={grow} alt="grow" />
                  </div>
                  <div className=" text-lime-300 text-xs ps-6">
                    {item?.description}
                  </div>

                  <div className="text-1xl font-bold text-white p-6">
                    {item?.currencyCode === "USD"
                      ? `$${item?.rate}`
                      : item?.currencyCode === "GBP"
                      ? `£${item?.rate}`
                      : `£${item?.rate}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assets;
