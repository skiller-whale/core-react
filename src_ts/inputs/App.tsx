import BookingForm from "./BookingForm";
import Header from "./Header";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <BookingForm />
    </div>
  );
};

export default App;
