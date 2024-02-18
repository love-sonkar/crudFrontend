import axios from "axios";

const url = "http://localhost:8080";

export class ServiceUser {
  async deleteUser(username) {
    try {
      const res = await axios.delete(`${url}/user/${username}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

const UserService = new ServiceUser();

export default UserService;
