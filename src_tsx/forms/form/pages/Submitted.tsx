import Button from "../../components/Button";
import type { FormStatus } from "../state";

type Props = {
  visible: boolean;
  formStatus: FormStatus;
};

const Submitted = ({ visible, formStatus }: Props) => (
  <div className={visible ? "flex flex-col gap-12 items-center" : "hidden"}>
    {formStatus === "error" ? (
      <p className="text-4xl text-red-600 mt-32">
        Oops, something went wrong. Worse still, whoever wrote this error
        message doesn't care about you enough to have explained what.
      </p>
    ) : (
      <p className="text-4xl text-green-600 mt-32">
        Thanks! We'll be in touch with your holiday options soon.
      </p>
    )}
    <Button type="reset">Make Another Enquiry</Button>
  </div>
);

export default Submitted;
