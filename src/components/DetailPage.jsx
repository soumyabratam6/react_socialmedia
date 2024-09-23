/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBIcon
} from "mdb-react-ui-kit";
import CustomNavbar from "./CustomNavbar";
import { TailSpin } from "react-loader-spinner";
const DetailPage = () => {
  const Navigate= useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");
  const { id } = useParams();

  const post = useSelector((state) =>
    state.posts.items.find((p) => p.id === Number(id))
  );
  
  useEffect(() => {
    // Simulating a loading time, like fetching data from an API
    setTimeout(() => {
        setLoading(false); 
    }, 1000);
}, []);

  if (!post) return <p>Post not found</p>;
  // Function to navigate back to the home page
  const handleBack = () => {
    Navigate('/');
};
  return (
    <div>
      <CustomNavbar />
      {/* Back Button - Arrow at the Top */}
      <MDBContainer className="mt-3">
                <MDBBtn floating tag="a" className="shadow-1-strong" onClick={handleBack}>
                    <MDBIcon fas icon="arrow-left" />
                </MDBBtn>
            </MDBContainer>
      {/* Post Details Section */}
      {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <TailSpin color="#36d7b7" size={100} />
                </div>
            ) :(
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="8" className="mx-auto">
            <MDBCard className="w-80 h-80">
              <MDBCardImage
                src={`https://picsum.photos/600?random=${post.id}`}
                alt="Post Image"
                position="top"
                className="w-80"
              />
              <MDBCardBody>
                <MDBCardTitle>Post Number #{id}</MDBCardTitle>

                {/* Tabs for Details/User Info */}
                <MDBTabs pills className="mb-3">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => setActiveTab("details")}
                      active={activeTab === "details"}
                    >
                      Detail
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => setActiveTab("userinfo")}
                      active={activeTab === "userinfo"}
                    >
                      User Info
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                {activeTab === "details" && (
                  <MDBCardText>{post.body}</MDBCardText>
                )}

                {activeTab === "userinfo" && (
                  <MDBCardText>
                    <strong>User ID:</strong> {post.userId}
                  </MDBCardText>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* More Posts Section */}
        <MDBRow className="mt-5">
          <MDBCol md="12">
            <h2 className="mb-4">More Posts</h2>
          </MDBCol>

          {[...Array(3)].map((_, index) => (
            <MDBCol md="4" className="mb-4" key={index}>
              <MDBCard>
                <MDBCardImage
                  src={`https://picsum.photos/300?random=${index}`}
                  alt="Post Title"
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Post Title</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
            )}
    </div>
  );
};

export default DetailPage;
