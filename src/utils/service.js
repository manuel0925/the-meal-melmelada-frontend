import AxiosWrapper from "./axios";

export const getService = () => {

    let mainService = new AxiosWrapper({}, {
        baseURL:  ''
    });
    // API Request interceptor
    mainService.service.interceptors.request.use(config => {


        return config
    }, error => {

        Promise.reject(error)
    })

    return mainService.pure();
}

const service = getService()

export default service;