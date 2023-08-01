let PROJECT_ID = "ngvsxill";
let DATASET = "production"
let QUERY = encodeURIComponent('*[_type == "post"]');

const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

const BlogApi = {

    getOrders:(setPostData) => {
        fetch(URL)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data.result);
            setPostData(data.result);
        })
        .catch((error) => console.log(error));
    },

    getImageUrl:() => {
        return imageUrl;
    }

}

export default BlogApi;
