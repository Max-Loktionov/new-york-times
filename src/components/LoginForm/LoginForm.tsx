import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useLogInUserMutation } from "redux/user/userApi";
import { useTranslation } from "react-i18next";
import { ILogin } from "helpers/interfaces";
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

export default function LoginForm() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const onMouseUp = () => setShow(false);
  const [logInUser, { isLoading }] = useLogInUserMutation();
  console.log("isLoading", isLoading);
  const fake = { username: "admin", password: "12345" };

  const [formState, setFormState] = useState<ILogin>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    try {
      if (
        formState.username.toLowerCase() === fake.username.toLowerCase()
        // formState.password === fake.password
      ) {
        const loginData = await logInUser({
          name: formState.username,
          password: `${formState.password}6A`,
          email: "antey@man.co",
        });

        if ("error" in loginData) {
          Notify.failure(`Error  - wrong name or password `, {
            timeout: 6000,
            fontSize: "20px",
          });
        }
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
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="name"
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
            onChange={handleChange}
            placeholder="password"
            autoComplete="off"
            required
          />

          <ButtonEye
            type="button"
            name="show"
            onMouseDown={handleClick}
            onMouseUp={onMouseUp}
            onTouchStart={handleClick}
            onTouchEnd={onMouseUp}
          >
            <img src={show ? view : hidden} alt="button isHidden password" />
          </ButtonEye>
        </InputWrapper>
        <Button type="submit" disabled={isLoading}>
          {t("login.enter")}
        </Button>
      </Form>
    </div>
  );
}
