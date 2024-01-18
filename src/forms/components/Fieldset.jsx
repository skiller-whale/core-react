const Fieldset = ({ legend, children }) => (
  <fieldset className="flex flex-col gap-4">
    <legend className="text-2xl font-semibold mb-6">{legend}</legend>
    {children}
  </fieldset>
)

export default Fieldset
