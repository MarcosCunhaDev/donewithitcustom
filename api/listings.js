import client from "./client";

export const endpoint = "/listings";

const getListings = () => {
  return client.get(endpoint);
};

const addListing = (listing, onProgress) => {
  const config = {
    onUploadProgress: function (progressEvent) {
      var percentCompleted = (
        (progressEvent.loaded * 100) /
        progressEvent.total
      ).toFixed(2);
      console.log(percentCompleted);
    },
  };
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: `image${index}`,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }
  return client.post(endpoint, data, {
    onUploadProgress: (progress) => onProgress(progress),
  });
};

export default {
  getListings,
  addListing,
};
