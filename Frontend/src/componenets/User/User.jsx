import React, { useContext } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { UserDataContext } from "../../context/UserData";
import { useNavigate } from "react-router-dom";
import "./User.css"; // Add styles if needed

const User = () => {
  const { setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone_no: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 3 ? "Name must be at least 3 characters" : null,

      email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : "Invalid email format",

      phone_no: (value) =>
        /^\d{10}$/.test(value) ? null : "Phone number must be 10 digits",
    },
  });

  const onSubmit = (values) => {
    setUserData((prev) => [...prev, values]);
    form.reset();

    notifications.show({
      title: "Success",
      message: "User added successfully ✅",
      color: "green",
    });

    navigate("/table");
  };

  return (
    <form className="form-container" onSubmit={form.onSubmit(onSubmit)}>
      <h1>User Form</h1>

      <label>
        Id <span className="required">*</span>
      </label>
      <input type="text" {...form.getInputProps("id")} />
      {form.errors.id && <p className="error">{form.errors.id}</p>}
      {/* Name */}
      <label>
        Name <span className="required">*</span>
      </label>
      <input type="text" {...form.getInputProps("name")} />
      {form.errors.name && <p className="error">{form.errors.name}</p>}

      {/* Email */}
      <label>
        Email <span className="required">*</span>
      </label>
      <input type="email" {...form.getInputProps("email")} />
      {form.errors.email && <p className="error">{form.errors.email}</p>}

      {/* Phone */}
      <label>
        Phone Number <span className="required">*</span>
      </label>
      <input type="text" {...form.getInputProps("phone_no")} />
      {form.errors.phone_no && <p className="error">{form.errors.phone_no}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default User;
