let PROJECT_ID = "ngvsxill";
let DATASET = "production"
// let QUERY = encodeURIComponent('*[_type == "post"] | order(_createdAt desc)');

// const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`;
const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

const BlogApi = {

    getPosts:(setPostData, setShow) => {
        let QUERY = encodeURIComponent('*[_type == "post"] | order(_createdAt desc)');
        fetch(URL + QUERY)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data.result);
            setPostData(data.result);
            setShow(true);
        })
        .catch((error) => console.log(error));
    },

    getPostById:(id, setPostData, setShow) => {
        let QUERY = `*[_id == "${id}"]`
        let QUERY_STRING = encodeURIComponent(QUERY);
        fetch(URL + QUERY_STRING)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data.result);
            setPostData(data.result);
            setShow(true);
        })
        .catch((error) => console.log(error));
    },

    getImageUrl:() => {
        return imageUrl;
    }

}

export default BlogApi;
