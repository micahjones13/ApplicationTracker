import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

const Home = props => {
  const [data, setData] = useState({ companies: [] });
  useEffect(() => {
    axios
      .get("http://localhost:5500/companies")
      .then(res => {
        console.log(res, "res");
        setData({ companies: res.data });
      })
      .catch(err => {
        console.log(err, "err");
      });
  }, []);
  return (
    <div>
      <h1>Application Tracker</h1>
      <Table data={data} />
      <button>Add Application</button>
    </div>
  );
};

export default Home;

/*


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5500/companies");
      setData(result.data);
    };
    fetchData();
  }, []);



  {data.companies.map(company => {
        return <p>{company.company_name}</p>;
      })}
*/
