import React from "react";
import { useParams } from "react-router-dom";

import { checkId } from "../data/accomodationData";

import Accomodation from "../pages/Accomodation";
import Error from "../pages/Error";

const IdChecker = () => {
  const { id } = useParams();
  return checkId(id) ? <Accomodation id={id} /> : <Error />;
};

export default IdChecker;
