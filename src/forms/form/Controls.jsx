import Button from "../components/Button";
import { pages } from "./state";

const Controls = ({
  visible,
  page,
  pageStatus,
  formStatus,
  nextPage,
  previousPage,
}) => (
  <div className={visible ? "flex gap-3 items-center" : "hidden"}>
    <progress
      className="flex-1 color-white"
      value={pages.indexOf(page)}
      max={pages.length - 2}
    />
    <Button
      type="button"
      onClick={previousPage}
      disabled={pages.indexOf(page) === 0}
    >
      Previous
    </Button>
    {page === "confirmation" ? (
      <Button key="submit" type="submit">
        {formStatus === "submitting" ? "..." : "Submit"}
      </Button>
    ) : (
      <Button
        type="button"
        onClick={nextPage}
        disabled={pageStatus !== "valid"}
      >
        Next
      </Button>
    )}
  </div>
);

export default Controls;
