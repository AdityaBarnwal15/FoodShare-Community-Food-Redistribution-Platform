import API from "./api";

export async function getListings() {
  const response = await API.get("/listings");

  return response.data;
}

export async function createListing(data) {
  const response = await API.post(
    "/listings",
    data
  );

  return response.data;
}

export async function claimListing(
  id,
  data
) {
  const response = await API.patch(
    `/listings/${id}/claim`,
    data
  );

  return response.data;
}