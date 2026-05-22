export function timeLeft(expiresAt) {
  const expiry =
    new Date(expiresAt).getTime();

  const diff = expiry - Date.now();

  if (diff <= 0) {
    return "Expired";
  }

  const h = Math.floor(
    diff / 3600000
  );

  const m = Math.floor(
    (diff % 3600000) / 60000
  );

  if (h > 0) {
    return `${h}h ${m}m left`;
  }

  return `${m}m left`;
}

export function isUrgent(expiresAt) {
  const expiry =
    new Date(expiresAt).getTime();

  return (
    expiry - Date.now() <
    2 * 3600 * 1000
  );
}