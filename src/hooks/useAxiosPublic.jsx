import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://task-no-01-server.vercel.app",
});

const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
