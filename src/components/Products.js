import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <input type="search" placeholder="search products" />
      <nav>
        <Link to="featured">Featured</Link>
        {/* <Link to="/products/featured">Featured</Link> */}
        <Link to="new">New</Link>
        {/* <Link to="/products/new">New</Link> */}
      </nav>
      <Outlet />
    </div>
  );
};
