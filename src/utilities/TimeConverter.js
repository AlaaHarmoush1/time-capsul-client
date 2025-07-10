export const convertTo12HourFormat = (time) => {
  if (!time || typeof time !== 'string' || !/^\d{2}:\d{2}$/.test(time)) {
    return 'Invalid time';
  }

  const [hours, minutes] = time.split(':');
  let hour = parseInt(hours, 10);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour.toString().padStart(2, '0')}:${minutes} ${suffix}`;
};
