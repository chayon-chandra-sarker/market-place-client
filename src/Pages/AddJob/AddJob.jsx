import React, { use, useEffect, useRef, useState } from "react";
import Container from "../../Components/Container/Container";
import { AuthConText } from "../../Context/AuthConText";
import Swal from "sweetalert2";
import { FaEdit, FaPlus } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import JobUpdate from "../../Components/JobUpdate/JobUpdate";

const AddJob = () => {
  const [addJobs, setAddJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  const modalRef = useRef();
  const updateOpenModal = useRef();
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthConText);

  useEffect(() => {
    axiosSecure
      .get("/products")
      .then((res) => setAddJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setPageLoading(false));
  }, []);

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleJobSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newJob = {
      title: form.title.value,
      category: form.category.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      image: form.photoUrl.value,
      budget: parseInt(form.budget.value),
      experienceLevel: form.experienceLevel.value,
      clientName: form.clientName.value,
      userEmail: form.email.value,
      postedBy: form.name.value,
      createdAt: new Date().toISOString(),
    };

    axiosSecure.post("/products", newJob).then((res) => {
      if (res.data.insertedId) {
        newJob._id = res.data.insertedId;
        setAddJobs([...addJobs, newJob]);

        Swal.fire({
          icon: "success",
          title: "Job Posted Successfully",
          timer: 1500,
          showConfirmButton: false,
        });

        form.reset();
        modalRef.current.close();
      }
    });
  };

  const handleModalUpdate = (job) => {
    setSelectedJob(job);
    updateOpenModal.current.showModal();
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-10">
      <Container>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Manage Jobs
          </h1>

          <button
            onClick={handleModal}
            className="btn btn-primary flex items-center gap-2 shadow-md"
          >
            <FaPlus />
            Add Job
          </button>
        </div>

        {/* Loading */}
        {pageLoading ? (
          <div className="flex justify-center my-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (

          /* Table */
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
            <table className="table table-zebra">

              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Job</th>
                  <th>Posted By</th>
                  <th>Category</th>
                  <th>Summary</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {addJobs.map((addJob, index) => (
                  <tr key={addJob._id} className="hover">

                    <th>{index + 1}</th>

                    <td>
                      <div className="flex items-center gap-3">

                        <div className="avatar">
                          <div className="w-12 h-12 rounded-lg">
                            <img src={addJob.image} />
                          </div>
                        </div>

                        <div>
                          <div className="font-bold">
                            {addJob.title}
                          </div>

                          <div className="text-sm opacity-70">
                            ${addJob.budget}
                          </div>
                        </div>

                      </div>
                    </td>

                    <td>{addJob.postedBy}</td>

                    <td>
                      <span className="badge badge-outline badge-primary">
                        {addJob.category}
                      </span>
                    </td>

                    <td className="max-w-[200px] truncate">
                      {addJob.shortDescription}
                    </td>

                    <td>{addJob.userEmail}</td>

                    <td>
                      <button
                        onClick={() => handleModalUpdate(addJob)}
                        className="btn btn-sm btn-outline btn-info"
                      >
                        <FaEdit />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {/* Add Job Modal */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box max-w-xl">

            <h3 className="text-2xl font-bold text-center mb-4">
              Add New Job
            </h3>

            <form onSubmit={handleJobSubmit} className="space-y-3">

              <input
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />

              <input
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />

              <input
                name="title"
                placeholder="Job Title"
                required
                className="input input-bordered w-full"
              />

              <input
                name="shortDescription"
                placeholder="Short Description"
                required
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                placeholder="Full Description"
                required
                className="textarea textarea-bordered w-full"
              />

              <input
                name="photoUrl"
                placeholder="Photo URL"
                required
                className="input input-bordered w-full"
              />

              <select
                name="category"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Category</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>Graphic Designer</option>
                <option>Cyber Security</option>
                <option>Content Writer</option>
                <option>Video Editor</option>
              </select>

              <input
                type="number"
                name="budget"
                placeholder="Budget"
                required
                className="input input-bordered w-full"
              />

              <select
                name="experienceLevel"
                className="select select-bordered w-full"
                required
              >
                <option value="">Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>

              <input
                name="clientName"
                placeholder="Client Name"
                required
                className="input input-bordered w-full"
              />

              <div className="flex gap-3 pt-2">
                <button className="btn btn-primary flex-1">
                  Post Job
                </button>

                <button
                  type="button"
                  onClick={() => modalRef.current.close()}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </dialog>

        {/* Update Modal */}
        <dialog ref={updateOpenModal} className="modal">
          <JobUpdate
            job={selectedJob}
            closeModal={() => updateOpenModal.current.close()}
            setAddJobs={setAddJobs}
            addJobs={addJobs}
          />
        </dialog>

      </Container>
    </div>
  );
};

export default AddJob;