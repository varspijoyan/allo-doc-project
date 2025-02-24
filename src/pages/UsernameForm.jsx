import { useActionState } from "react";
import { getMe, updateMe } from "../services/api/auth";
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/authorizationActions";

export default function UsernameForm() {
  const dispatch = useDispatch();
  const [data, action, isPending] = useActionState(async (data, state) => {
    const first_name = state.get("first_name");
    const last_name = state.get("last_name");
    if (!first_name || !last_name) {
      return { data: {}, error: "first name or last name are required" };
    } else {
      try {
        const res = await updateMe(first_name, last_name);
        if (res.status === 200) {
          const userData = await getMe();
          dispatch(signIn({user: userData.result}));
        }
        return { data, error: null };
      } catch (error) {
        return { data: {}, error: "Something went wrong" };
      }
    }
  });
  return (
    <div className="username-form">
      <h1>Username form</h1>
      <form action={action}>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Enter your first name"
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Enter your last name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
