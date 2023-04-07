import { useReadingStore } from "~~/context/ModalsContext";
import ContractData from "./ExampleUi/ContractData";

const DataModal: React.FC = () => {
  const [reading, updateReading] = useReadingStore(state => [state.reading, state.updateReading]);

  const closeModal = () => {
    updateReading(false);
  };

  if (!reading) return null;

  return (
    <div
      className="fixed h-[500px] w-[400px] flex top-1/2 right-1/4 -translate-y-2/3 translate-x-1/4 flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary"
      onClick={closeModal}
    >
      <ContractData />
    </div>
  );
};

export default DataModal;
