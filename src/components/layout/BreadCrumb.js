import { Breadcrumb as BreadCrumbAntd } from "antd";
import { Link } from "react-router-dom";

const BreadCrumb = ({ current }) => {
  return (
    <div className="container mt-5">
      <BreadCrumbAntd style={{ fontSize: "20px" }}>
        <BreadCrumbAntd.Item>
          <Link to="/">Products</Link>
        </BreadCrumbAntd.Item>

        <BreadCrumbAntd.Item>{current}</BreadCrumbAntd.Item>
      </BreadCrumbAntd>
    </div>
  );
};

export default BreadCrumb;
