"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../../connector/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { toastSuccess } from "../utils/theme";

function Contact() {
  const defaultFormData = {
    gname: "",
    title: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      name: formData?.gname,
      title: formData?.title,
      message: formData?.message,
      createdAt: Date.now(),
    };
    setDoc(doc(db, "messages", self.crypto.randomUUID()), data)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData(defaultFormData);
    toast.success("Message Sent", toastSuccess);
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">
              Ping us for any queries! or Tell us some tales, this response is
              stored in database
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="gname"
                  value={formData.gname}
                  placeholder="Your name"
                  className="input input-bordered"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  value={formData.title}
                  className="input input-bordered"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Content"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-infinity loading-sm"></span>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
