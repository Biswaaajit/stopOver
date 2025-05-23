function formatDateWithDay(dateStr: string) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default formatDateWithDay;
