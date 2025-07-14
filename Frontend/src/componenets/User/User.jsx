import React, { useContext } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { UserDataContext } from "../../context/UserData";
import { useNavigate } from "react-router-dom";
import "./User.css"; // Optional: Add your styling here

const User = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  // ✅ Form Setup with validation
  const form = useForm({
    initialValues: {
      id: "",
      name: "",
      email: "",
      phone_no: "",
    },
    validate: {
      id: (value) => {
        if (value.trim() === "") return "ID is required";
        const numericId = Number(value);
        if (userData.some((user) => user.id === numericId)) {
          return "ID already exists ❌";
        }

        return null;
      },

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

  // ✅ Submit Handler
  const onSubmit = (values) => {
    const newUser = {
      ...values,
      id: Number(values.id),
    };

    setUserData((prev) => [...prev, newUser]);
    form.reset();
notifications.show({
  title: "Success",
  message: "User added successfully ✅",
  color: "green",
  classNames: {
    root: "custom-notify-root",
    title: "custom-notify-title",
    description: "custom-notify-message",
  },
});


    navigate("/table");
  };

  return (
    <form className="form-container" onSubmit={form.onSubmit(onSubmit)}>
      <h1>User Form</h1>

      {/* Id */}
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

      {/* Phone Number */}
      <label>
        Phone Number <span className="required">*</span>
      </label>
      <input type="text" {...form.getInputProps("phone_no")} />
      {form.errors.phone_no && <p className="error">{form.errors.phone_no}</p>}

      {/* Submit */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default User;
