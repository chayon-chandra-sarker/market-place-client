import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const JobUpdate = ({ job, closeModal, addJobs, setAddJobs }) => {
  const axiosSecure = useAxiosSecure();

  const [updateData, setUpdateData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    image: "",
    budget: "",
    category: "",
    experienceLevel: "",
    clientName: "",
  });

  useEffect(() => {
    if (job) {
      setUpdateData({
        title: job.title,
        shortDescription: job.shortDescription,
        description: job.description,
        image: job.image,
        budget: job.budget,
        category: job.category,
        experienceLevel: job.experienceLevel,
        clientName: job.clientName,
      });
    }
  }, [job]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const res = await axiosSecure.patch(`/products/${job._id}`, updateData);

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Job Updated Successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      const updated = addJobs.map((j) =>
        j._id === job._id ? { ...j, ...updateData } : j
      );

      setAddJobs(updated);
      closeModal();
    }
  };

  return (
    <div className="modal-box max-w-3xl bg-white rounded-xl shadow-xl p-6">

      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Update Job
      </h2>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Job Title */}
        <div className="md:col-span-2">
          <label className="font-semibold">Job Title</label>
          <input
            type="text"
            name="title"
            value={updateData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Short Description */}
        <div className="md:col-span-2">
          <label className="font-semibold">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={updateData.shortDescription}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="font-semibold">Full Description</label>
          <textarea
            name="description"
            value={updateData.description}
            onChange={handleChange}
            rows="4"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="font-semibold">Photo URL</label>
          <input
            type="text"
            name="image"
            value={updateData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Budget */}
        <div>
          <label className="font-semibold">Budget ($)</label>
          <input
            type="number"
            name="budget"
            value={updateData.budget}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={updateData.category}
            onChange={handleChange}
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
        </div>

        {/* Experience */}
        <div>
          <label className="font-semibold">Experience Level</label>
          <select
            name="experienceLevel"
            value={updateData.experienceLevel}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>

        {/* Client Name */}
        <div className="md:col-span-2">
          <label className="font-semibold">Client Name</label>
          <input
            type="text"
            name="clientName"
            value={updateData.clientName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex gap-3 mt-3">

          <button className="btn btn-primary flex-1">
            Update Job
          </button>

          <button
            type="button"
            onClick={closeModal}
            className="btn btn-outline flex-1"
          >
            Cancel
          </button>

        </div>
      </form>
    </div>
  );
};

export default JobUpdate;