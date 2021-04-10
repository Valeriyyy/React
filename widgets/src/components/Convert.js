import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedTranslation, setDebouncedTranslation] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (text) {
        setDebouncedTranslation(text);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTranslation,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(res.data.data.translations[0].translatedText);
      setTranslatedText(res.data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedTranslation]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
