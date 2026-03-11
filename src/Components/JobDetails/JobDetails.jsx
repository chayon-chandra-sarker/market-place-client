import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../Container/Container";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { toast } from "react-toastify";

const JobDetails = () => {
  const axiosSecure = useAxiosSecure();
  const jobDetailsProducts = useLoaderData();

  const {
    title,
    category,
    image,
    budget,
    shortDescription,
    postedBy,
    experienceLevel,
    clientName,
    userEmail,
    description,
    createdAt,
  } = jobDetailsProducts;

  const handleAccept = async () => {
    const acceptedJob = {
      jobId: jobDetailsProducts._id,
      title,
      category,
      image,
      budget,
      description,
      clientName,
      userEmail,
      status: "accepted",
      createdAt: new Date(),
    };

    axiosSecure
      .post("/accepted-jobs", acceptedJob)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success(
            <h5 className="text-green-500 text-lg font-semibold">
              Job Accepted Successfully!
            </h5>
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Image */}
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </div>

            {/* Job Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>

              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-semibold">💰 Budget:</span> ${budget}
                </p>

                <p>
                  <span className="font-semibold">📂 Category:</span> {category}
                </p>

                <p>
                  <span className="font-semibold">👤 Posted By:</span> {postedBy}
                </p>

                <p>
                  <span className="font-semibold">📊 Experience:</span>{" "}
                  {experienceLevel}
                </p>

                <p>
                  <span className="font-semibold">📝 Short Description:</span>{" "}
                  {shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Job Description
            </h3>

            <div className="space-y-3 text-lg">
              <p>
                <span className="font-semibold">Client:</span> {clientName}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {userEmail}
              </p>

              <p>
                <span className="font-semibold">Details:</span> {description}
              </p>

              <p>
                <span className="font-semibold">Posted Date:</span> {createdAt}
              </p>
            </div>

            {/* Accept Button */}
            <div className="flex justify-center mt-8">
              <Link
                to="/my-accepted-tasks"
                onClick={handleAccept}
                className="px-10 py-3 text-xl font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Accept Job
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetails;