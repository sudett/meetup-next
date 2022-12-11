import React, { useRef, Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useMeetupContext } from "../contexts/MeetupContext";

import styles from "./new-meetup.module.css";

const NewMeetup = () => {
  const router = useRouter();
  const { dispatch } = useMeetupContext();

  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      address: addressRef.current.value,
      img: imageRef.current.value,
      desc: descriptionRef.current.value,
    };

    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: "add-meetup",
      payload: meetupData,
    });

    titleRef.current.value = "";
    addressRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";

    router.replace("/");
  };

  return (
    <Fragment>
      <Head>
        <meta name="description" content="Add your own meetup" />
        <title>New Meetup</title>
      </Head>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="title">
            Meetup Title
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            ref={titleRef}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="address">
            Meetup Address
          </label>
          <input
            className={styles.input}
            type="text"
            id="address"
            ref={addressRef}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="image">
            Meetup Image
          </label>
          <input
            className={styles.input}
            type="text"
            id="image"
            ref={imageRef}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="description">
            Meetup Description
          </label>
          <textarea
            className={styles.input}
            id="description"
            rows={5}
            ref={descriptionRef}
          />
        </div>
        <button className={styles.btn}>Add Meetup</button>
      </form>
    </Fragment>
  );
};

export default NewMeetup;
