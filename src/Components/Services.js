import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../Style/Services.css";

export default function Services() {
  const [successMessage, setSuccessMessage] = React.useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      price: "",
      imgUrl: "",
    },
    onSubmit: (values, { resetForm }) => {
      let servicesId = uuidv4();
      const apiUrl = `https://techmave-react-projects-default-rtdb.asia-southeast1.firebasedatabase.app/services/${servicesId}.json`;
      const service = {
        ...values,
        status: "new",
        createdDate: new Date(),
        id: servicesId,
      };
      axios
        .put(apiUrl, service)
        .then((response) => {
          if (response.status === 200) {
            setSuccessMessage("Your service has been added to the website");
            resetForm({ values: "" });
          }
        })
        .catch((error) => {
          setSuccessMessage("There was an Error while sending the data");
        });
    },

    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Title cannot be blank";
      }
      if (!values.location) {
        errors.location = "location cannot be blank";
      }
      if (!values.price) {
        errors.price = "price cannot be blank";
      }
      if (!values.imgUrl) {
        errors.imgUrl = "Image Url cannot be blank";
      }
      return errors;
    },
  });

  return (
    <div className="form--main-div">
      <form onSubmit={formik.handleSubmit}>
        <h4>Add Your Services Below to Showcase on our website</h4>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <p className="form--error-message">{formik.errors.title}</p>
        ) : null}
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Location"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />
        {formik.touched.location && formik.errors.location ? (
          <p className="form--error-message">{formik.errors.location}</p>
        ) : null}
        <input
          id="price"
          type="text"
          name="price"
          placeholder="Price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <p className="form--error-message">{formik.errors.price}</p>
        ) : null}
        <input
          type="text"
          placeholder="Please update a URL of the image"
          name="imgUrl"
          id="imgUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imgUrl}
        />
        {formik.touched.imgUrl && formik.errors.imgUrl ? (
          <p className="form--error-message">{formik.errors.imgUrl}</p>
        ) : null}
        <button type="submit">Add Your Service</button>
      </form>
      {successMessage ? (
        <p>
          {successMessage} - Go back to <a href="/">home page</a>{" "}
        </p>
      ) : null}
    </div>
  );
}
