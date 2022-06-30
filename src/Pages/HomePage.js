import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, message } from "antd";
import { useParams } from "react-router-dom";
import { getCategories, getProducts } from "../Store/actions/productaction";
import Loader from "../components/layout/Loader";
import MetaData from "../components/layout/MetaData";
import Product from "../components/Product/Product";

const { Option } = Select;

const HomePage = () => {
  const [current, setCurrent] = useState(1);
  const [offset, setOffset] = useState(0);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(30);
  const [category, setCategory] = useState("Hammasi");

  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  const {
    loading: CategoryLoading,
    error: CategoryError,
    categories,
  } = useSelector((state) => state.categories);

  const { keyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category === "Hammasi") {
      dispatch(getProducts(keyword, "", limit, offset));
    } else {
      dispatch(getProducts(keyword, category, limit, offset));
    }
    dispatch(getCategories());
    console.log(offset);
    if (error) {
      message.error(error);
    }
  }, [dispatch, offset, keyword, category, limit, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <MetaData title="Mahsulotlar" />
          <h1 id="products_heading">Barcha Mahsulotlar</h1>
          <section id="products" className="container mt-5">
            {!keyword && (
              <Select
                defaultValue={category}
                style={{
                  width: 200,
                }}
                onChange={(cat) => setCategory(cat)}
              >
                <Option value="Hammasi">HAMMASI</Option>
                {categories.map((category, id) => (
                  <Option key={id} value={category}>
                    {category.toUpperCase()}
                  </Option>
                ))}
              </Select>
            )}
            <div className="row">
              {keyword ? (
                <>
                  <div className="col-6 col-md-4 mt-5 mb-5">
                    <div className="px-5">
                      <div className="mt-5">
                        <h4 className="mb-3">Categories</h4>

                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                                fontSize: "20px",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <hr className="my-3" />
                    </div>
                  </div>
                  <div className="col-6 col-md-8">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product
                            product={product}
                            key={product._id}
                            col={4}
                          />
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                products &&
                products.map((product) => (
                  <Product product={product} key={product._id} col={3} />
                ))
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default HomePage;
