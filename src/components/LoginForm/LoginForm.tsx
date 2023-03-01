import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useLogInUserMutation } from "redux/user/userApi";
import { useTranslation } from "react-i18next";

import {
  Form,
  Input,
  ButtonEye,
  InputWrapper,
  Button,
} from "./LoginForm.styled.js";
import hidden from "img/eye-off.svg";
import view from "img/eye.svg";

interface FormElements extends HTMLFormControlsCollection {
  inputName: HTMLInputElement;
}
interface IFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
export interface ILogin {
  username: string;
  password: string;
}

export default function LoginForm() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const onMouseUp = () => setShow(false);

  const fake = { username: "admin", password: "12345" };

  // const [name, setName] = useState<string | undefined>("");
  // const [password, setPassword] = useState<string | undefined>("");
  const [formState, setFormState] = useState<ILogin>({
    username: "",
    password: "",
  });
  const [logInUser] = useLogInUserMutation();

  const handleSubmit = async (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    try {
      if (formState.username.toLowerCase() === fake.username.toLowerCase()) {
        await logInUser({
          name: formState.username,
          password: `${formState.password}6A`,
          email: "antey@man.co",
        });
        //   .then((resp) => {
        //   // resp?.error &&
        //   //   Notify.failure(
        //   //     `Error ${resp.error.status} - wrong email or password`,
        //   //     {
        //   //       timeout: 5000,
        //   //       fontSize: "18px",
        //   //     }
        //   //   );
        // });
      } else {
        Notify.failure(`Error  - wrong name or password`, {
          timeout: 5000,
          fontSize: "18px",
        });
      }
    } catch (error) {
      Notify.failure(` Something goes wrong: ${error}`);
      console.log(error);
    }
  };
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={formState.username}
          // onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          //   setName(e.target.value)
          // }
          onChange={handleChange}
          type="text"
          name="username"
          // placeholder={t("login.name")}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <InputWrapper>
          <Input
            type={show ? "text" : "password"}
            value={formState.password}
            name="password"
            // onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            //   setPassword(e.target.value)
            // }
            onChange={handleChange}
            // placeholder={t("login.password")}
            autoComplete="off"
            required
          />

          <ButtonEye
            type="button"
            name="show"
            onMouseDown={handleClick}
            onMouseUp={onMouseUp}
          >
            <img src={show ? view : hidden} alt="button isHidden password" />
          </ButtonEye>
        </InputWrapper>
        <Button type="submit">{t("login.enter")}</Button>
      </Form>
    </div>
  );
}
