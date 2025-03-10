import axios from "axios";

/**
 * Service to call HTTP request via Axios
 */

const ApiService = {

  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${JwtService.getToken()}`;
    axios.defaults.headers.common[
      "Accept"
    ] = `application/json`;

    axios.defaults.headers.common[
      "Content-Type"
    ] = `application/json;charset=UTF-8`;
  },

  query(resource, params) {
    return axios.get(resource, params);
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`);
  },

/**
   * Send the GET HTTP request with proxy
   * @param resource
   * @returns {*}
   */
  getThirdParty(resource) {
    return axios.get(resource);
  },
  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return axios.delete(resource);
  }
};

export default ApiService;
