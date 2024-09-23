/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import { TailSpin } from "react-loader-spinner";

const HomePage = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [delayedLoading, setDelayedLoading] = useState(true);
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.posts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const toggleShowMore = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId], // Toggle the expanded state of the specific post
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedLoading(false); // After 1 second, stop the loader
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <>
      <CustomNavbar />
      {/* Search bar section */}
      <div className="container mt-3 d-flex justify-content-center">
        <form
          className="d-flex"
          style={{ width: "80%" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
            style={{ borderRadius: "20px", padding: "10px" }}
          />
        </form>
      </div>

      <div className="container mt-5">
        {loading || delayedLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <TailSpin color="#36d7b7" size={100} />
          </div>
        ) : (
          <div className="row">
            {items.map((post) => (
              <div className="col-md-4 mb-4" key={post.id}>
                <MDBCard style={{ width: "18rem" }}>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src={`https://picsum.photos/200?random=${post.id}`}
                      fluid
                      alt={post.title}
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>
                      {post.title.substring(0, 20)}...
                    </MDBCardTitle>
                    <MDBCardText>
                      <p>
                        {expandedPosts[post.id]
                          ? post.body
                          : post.body.substring(0, 40)}
                        ...
                        <a
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={() => toggleShowMore(post.id)}
                        >
                          {expandedPosts[post.id] ? " Show Less" : " Show More"}
                        </a>
                      </p>
                    </MDBCardText>
                    <Link to={`/item/${post.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
