import React, {useEffect} from "react";
import { Link } from "react-router-dom";

export default function MainPage() {

    useEffect(() => {
        const url = "http://localhost:3001/api/book?page=1";

        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json); 
            } catch (error) {
              console.log("error", error);
            }
          };

          fetchData();

    }, []);
    return (
        <div>
        </div>
    );
}