export default function DateRangeFormatted({ startDate, endDate }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  let formattedStartDate = startDate === "" ? "" : formatDate(startDate);
  let formattedEndDate = endDate === "" ? "- Present" : formatDate(endDate);

  return (
    <>
      <p className="date-range">
        {formattedStartDate}
        {formattedStartDate === "" ? "" : formattedEndDate}
      </p>
    </>
  );
}
