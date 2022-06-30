import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">Logo</Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          {/* <Route render={({ history }) => <Search history={history} />} /> */}
          <Search />
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
