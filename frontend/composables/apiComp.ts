export const useApiComp = async(apiRoute, method, params) => {

    let newHeader = {
      'access-control-allow-origin': "*",
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  
  const { data, pending, error, refresh } = await useFetch(apiRoute, {
    method: method,
    query: params,
    /*
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = newHeader || {}
      //options.headers.authorization = '...'
    },
    */
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      //Promise.resolve(response._data.Search)
      //return response._data.Search  
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    }
  })
  return toRaw(data)
}
