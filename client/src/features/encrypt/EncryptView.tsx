import { FormProvider, useForm } from "react-hook-form";
import EncryptForm from "./renders/EncryptForm";

const EncryptView = () => {
  const rhf = useForm();

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <FormProvider {...rhf}>
        <EncryptForm onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
};

export default EncryptView;
