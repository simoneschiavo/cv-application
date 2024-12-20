export default function DateRangeFormatted({ startDate, endDate }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      <p className="date-range">
        {formatDate(startDate)} -{" "}
        {endDate === "" ? "Present" : formatDate(endDate)}
      </p>
    </>
  );
}
