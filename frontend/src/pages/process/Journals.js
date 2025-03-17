import React from "react";
import { Tooltip } from "antd";
import { Link } from "react-router-dom"
import Emerald from "../../assets/Emerald.png";
import ERIC from "../../assets/ERIC.png";
import SagePublishing from "../../assets/Sage Publishing.png";
import Scopus from "../../assets/Scopus.png";
import Springer from "../../assets/Springer.png";
import TaylorAndFrancis from "../../assets/Taylor and Francis.png";

const Journals = () => {
  return (
    <div>
      <section className="mt-16 p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24 grid grid-cols-1">
        <h1 className="text-3xl font-bold text-center">
          Your Gateway to Academic Research
        </h1>
        <h2 className="text-lg text-center font-medium px-5 mt-2">
          Find the right journals for your classroom and elevate school success.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 m-10">
          <div className="col-span-1 h-20">
            <Link to="https://www.emerald.com/insight/">            
              <Tooltip title="Emerald">
                <img
                  src={Emerald}
                  alt="Emerald"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>

          <div className="col-span-1 h-20">
            <Link to="https://eric.ed.gov/">            
              <Tooltip title="ERIC">
                <img
                  src={ERIC}
                  alt="ERIC"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>

          <div className="col-span-1 h-20">
            <Link to="https://www.sagepub.com/">            
              <Tooltip title="Sage Publishing">
                <img
                  src={SagePublishing}
                  alt="Sage Publishing"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>

          <div className="col-span-1 h-20">
            <Link to="https://www.elsevier.com/products/scopus">
              <Tooltip title="Scopus">
                <img
                  src={Scopus}
                  alt="Scopus"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>

          <div className="col-span-1 h-20">
            <Link to="https://link.springer.com/">
              <Tooltip title="Springer">
                <img
                  src={Springer}
                  alt="Springer"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>

          <div className="col-span-1 h-20">
            <Link to="https://taylorandfrancis.com/">
              <Tooltip title="Taylor and Francis">
                <img
                  src={TaylorAndFrancis}
                  alt="Taylor And Francis"
                  className="object-cover rounded-xl h-full w-full"
                />
              </Tooltip>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journals;
