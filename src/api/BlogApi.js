let PROJECT_ID = "ngvsxill";
let DATASET = "production"
let QUERY = encodeURIComponent('*[_type == "posts"]');

let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

