import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";

function AddMovieForm() {
 

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const validate = () => {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
      return false;
    } else {
      setIsDateError(false);
      setIsTitleError(false);
      return true;
    }
  };

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };
    dispatch(addMovie(movie));

    navigation("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  const { title, date, poster, type } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/550/350"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                value={date}
                onChange={handleChange}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
                onChange={handleChange}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Horor">Horor</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
              </select>
            </div>
            <div>
              <Button size="large" variant="secondary" full>
                Add Movie
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
