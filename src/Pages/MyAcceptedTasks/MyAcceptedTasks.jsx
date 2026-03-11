import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyAcceptedTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get("/accepted-jobs")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err))
      .finally(() => setPageLoading(false));
  }, []);

  const handleDone = (id) => {
    axiosSecure
      .delete(`/accepted-jobs/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setTasks(tasks.filter((task) => task._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = (id) => {
    axiosSecure
      .delete(`/accepted-jobs/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setTasks(tasks.filter((task) => task._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-10 px-4">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary">My Accepted Tasks</h2>

        <span className="badge badge-primary badge-lg">
          {tasks.length} Tasks
        </span>
      </div>

      {/* Loading */}
      {pageLoading ? (
        <div className="flex justify-center items-center my-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : !tasks.length ? (
        <div className="text-center text-gray-500 text-lg">
          No accepted tasks yet.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={task.image}
                alt={task.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    {task.description}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="badge badge-success">${task.budget}</span>

                    <span className="text-sm text-gray-500">
                      {task.clientName}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-2">
                    Posted: {new Date(task.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleDone(task._id)}
                    className="btn btn-success btn-sm flex-1"
                  >
                    ✅ Done
                  </button>

                  <button
                    onClick={() => handleCancel(task._id)}
                    className="btn btn-error btn-sm flex-1"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAcceptedTasks;
