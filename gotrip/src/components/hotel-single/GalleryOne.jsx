import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import UploadFiles from "@/features/fileSlice";
import { useSelector } from "react-redux";

export default function GalleryOne({ hotel }) {
  const [hotelImages, setHotelImages] = useState({})
  const [hotelSingleImage, setHotelSingleImage] = useState({})
  const [isOpen, setOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const { hotels } = useSelector((state) => state.hotels);

  useEffect(() => {
    console.log("I am here")
    if (hotels && hotels.length > 0) {
      fetchHotelSingleImages(hotels)
      fetchHotelImages(hotels);
    }
  }, [hotels]);

  const fetchHotelImages = async (hotels) => {
    const responseImages = await UploadFiles.getHotelImages(hotels);
    setHotelImages(responseImages);
  };

  const fetchHotelSingleImages = async (hotels) => {
    const responseImages = await UploadFiles.getHotelSingleImage(hotels);
    setHotelSingleImage(responseImages);
  };

  const openCarousel = (index, open) => {
    setSelectedIndex(index);
    open();
  };

  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      /> */}
      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">{hotel?.title}</h1>
                </div>
                {/* End .col */}
                <div className="col-auto">
                  {Array.from({ length: hotel.rating }).map((_, i) => (
                    <i key={i} className="icon-star text-14 text-yellow-2"></i>
                  ))}
                </div>
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    {hotel?.location}
                  </div>
                </div>
                {/* <div className="col-auto">
                  <button
                    data-x-click="mapFilter"
                    className="text-blue-1 text-15 underline"
                  >
                    Show on map
                  </button>
                </div> */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-lg">
                    From{" "}
                    <span className="text-2xl lg:text-3xl text-blue-1 fw-500">
                    GBP £{hotel?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="col-auto">
                  <Link
                    to="/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div> */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <Gallery>
            <div className="galleryGrid -type-1 pt-30">
              <div className="galleryGrid__item relative d-flex">
                <Item
                  original={hotelSingleImage[hotel._id]}
                  thumbnail={hotelSingleImage[hotel._id]}
                  width={660}
                  height={660}
                >
                  {({ ref, open }) => (
                    <img
                      // src={hotel?.images[0]}
                      // src={hotelImages[hotel._id][0]}
                      src={hotelSingleImage[hotel._id]}
                      ref={ref}
                      onClick={open}
                      alt={`${hotel.title} – ${hotel.location} Image 1`}
                      role="button"
                      className="rounded-4"
                    />
                  )}
                </Item>
                {/* <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                  <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                    <i className="icon-heart text-16" />
                  </button>
                </div> */}
              </div>
              {/* End .galleryGrid__item */}

              {hotelImages[hotel._id] && hotelImages[hotel._id].slice(1).map((img, index) => {
                return (
                  <div
                    key={index}
                    className={`galleryGrid__item ${
                      index < 4 ? "d-block" : "d-none"
                    }`}
                  >
                    <Item
                      original={img}
                      thumbnail={img}
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={img}
                          alt={`${hotel.title} – ${hotel.location} Image ${index + 1}`}
                          className="rounded-4"
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
                );
              })}

              {/* {hotel.images.slice(5).map((img) => (
                <div key={img} className="galleryGrid__item d-none">
                  <Item original={img} thumbnail={img} width={450} height={375}>
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={img}
                        alt="image"
                        className="rounded-4"
                        role="button"
                      />
                    )}
                  </Item>
                </div>
              ))} */}

              {/* End .galleryGrid__item */}

              {/* <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/gallery/1/3.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
                <div className="absolute h-full col-12 flex-center">
                  <div
                    className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1 js-gallery"
                    role="button"
                    onClick={() => setOpen(true)}
                  >
                    <i className="icon-play text-16" />
                  </div>
                </div>
              </div> */}
              {/* End .galleryGrid__item */}

              {/* <div className="galleryGrid__item">
                <Item
                  original="/img/gallery/1/4.png"
                  thumbnail="/img/gallery/1/4.png"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/gallery/1/4.png"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div> */}
              {/* End .galleryGrid__item */}

              {/* <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/gallery/1/5.png"
                  alt="image"
                  className="rounded-4"
                />
                <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                  <Item
                    original="/img/gallery/1/5.png"
                    thumbnail="/img/gallery/1/5.png"
                    width={450}
                    height={375}
                  >
                    {({ ref, open }) => (
                      <div
                        className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                        ref={ref}
                        onClick={open}
                        role="button"
                      >
                        See All Photos
                      </div>
                    )}
                  </Item>
                </div>
              </div> */}
              {/* End .galleryGrid__item */}
            </div>
          </Gallery>
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
