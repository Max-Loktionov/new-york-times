import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useLogInUserMutation } from "redux/user/userApi";

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
  yourInputName: HTMLInputElement;
}
interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const onMouseUp = () => setShow(false);

  const fake = { username: "admin", password: "12345" };

  const [name, setName] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [logInUser, { isLoading }] = useLogInUserMutation();

  const handleSubmit = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    try {
      if (name.toLowerCase() === fake.username.toLowerCase()) {
        await logInUser({
          name,
          password: `${password}6A`,
          email: "antey@man.co",
        }).then((resp) => {
          resp?.error &&
            Notify.failure(
              `Error ${resp.error.status} - wrong email or password`,
              {
                timeout: 5000,
                fontSize: "18px",
              }
            );
        });
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setName(e.target.value)
          }
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <InputWrapper>
          <Input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
            placeholder="password"
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
        <Button type="submit">Log in</Button>
      </Form>
    </div>
  );
}
