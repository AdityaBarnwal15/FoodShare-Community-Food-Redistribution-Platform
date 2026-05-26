export function getSavedListings() {
  return JSON.parse(
    localStorage.getItem(
      "savedListings"
    ) || "[]"
  );
}

export function toggleSaved(
  listingId
) {
  const saved =
    getSavedListings();

  const exists =
    saved.includes(listingId);

  let updated;

  if (exists) {
    updated = saved.filter(
      (id) => id !== listingId
    );
  } else {
    updated = [
      ...saved,
      listingId,
    ];
  }

  localStorage.setItem(
    "savedListings",
    JSON.stringify(updated)
  );

  return updated;
}

export function isSaved(
  listingId
) {
  return getSavedListings().includes(
    listingId
  );
}