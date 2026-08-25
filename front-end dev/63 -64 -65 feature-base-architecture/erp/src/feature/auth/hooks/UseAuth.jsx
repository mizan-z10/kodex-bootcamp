import { useNavigate } from "react-router";
import { useAuthContext } from "../../../shared/hook/UseContextData";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Storage } from "../../../utils/localStorage";

export let useAuth = () => {
  const navigate = useNavigate();

  const { registeredAmin, setLogInAdmin, setRegisteredAdmin } =
    useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Handle admin login form submission
  const handleLoginFormSubmit = (data) => {
    console.log(data);

    // Find an admin with matching credentials
    const admin = registeredAmin.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );

    if (!admin) {
      alert("Invalid credentials");
      return;
    }

    // Store the authenticated admin in global auth state
    setLogInAdmin(admin);

    alert("Admin logged in successfully");
    Storage.set("logInAdmin", admin);


    reset();
  };

  // Handle new admin registration
  const handleRegisterFormSubmit = (data) => {
    console.log(data);

    // Create a new admin object with a unique ID
    const arrofdata = [
      ...registeredAmin,
      {
        ...data,
        id: nanoid(),
      },
    ];

    // Update admin list in global state
    setRegisteredAdmin(arrofdata);

    // Persist registered admins in localStorage
    Storage.set("registeredAdmin", arrofdata);

    alert("Admin registered successfully");

    reset();
  };

  return {
    navigate,
    handleLoginFormSubmit,
    handleRegisterFormSubmit,
    errors,
    register,
    handleSubmit,
    watch,
    reset,
  };
};
