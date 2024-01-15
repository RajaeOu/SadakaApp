import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";

const NewArrivals = () => {
  const [recentAnnonces, setRecentAnnonces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8084/annonces/recent-annonces");
        const annoncesWithBase64 = response.data.map((annonce) => ({
          ...annonce,
          photo: {
            base64: `data:image/png;base64,${annonce.photo}`,
          },
        }));
        setRecentAnnonces(annoncesWithBase64);
      } catch (error) {
        console.error("Error fetching recent annonces", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="Annonces Récentes" />
      <Slider {...settings}>
        {recentAnnonces.map((annonce) => (
          <div key={annonce._id} className="px-2">
            <div className="w-100">
              <Product
                _id={annonce._id}
                img={annonce.photo?.base64}
                productName={annonce.titre}
                quantity={annonce.quantite}
                category={annonce.categorie?.nom}
                commune={annonce.commune?.commune}
                date={annonce.date}
                badge={true} // Always set badge to true
                des={annonce.description}
              >
                {annonce.photo?.base64 && (
                  <img
                    src={annonce.photo.base64}
                    alt={annonce.titre}
                    className="w-full h-auto"
                  />
                )}
              </Product>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
