export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
};
