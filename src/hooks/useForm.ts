import { useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";

type genericData = {
  login: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  email: string | undefined;
};

type specificData = {
  userType: PF | PJ;
};

export type PFRole = "Engenheiro/Tecnólogo" | "Arquiteto/Designer";

export type PJRole = "Dono" | "Gerente" | "Sócio" | "Funcionário";

type PF = {
  role: PFRole | undefined;
};

type PJ = {
  role: PJRole | undefined;
};

export type userFormulary = {
  genericAuthData: genericData;
  specificAuthData: specificData;
};

export const useForm = () => {
  const { form, setForm } = useAuth();
  const onChange = useCallback(
    ({ target }: any) => {
      if (target.className.includes("setAuthData")) {
        setForm({
          genericAuthData: {
            ...form.genericAuthData,
            [target.name]: target.value as string | undefined,
          },
          specificAuthData: { ...form.specificAuthData },
        });
      }
    },
    [form, setForm]
  );
  const onSelectType = useCallback(
    ({ target }: any) => {
      setForm({
        genericAuthData: { ...form.genericAuthData },
        specificAuthData: {
          ...form.specificAuthData,
          [target.name]: { role: target.value } as PJ | PF,
        },
      });
    },
    [form, setForm]
  );
  const onSubmit = useCallback(() => {
    setForm(form);
  }, [form, setForm]);

  return {
    onChange,
    onSubmit,
    onSelectType,
  };
};
