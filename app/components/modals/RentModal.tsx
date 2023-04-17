"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

enum steps {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(steps.CATEGORY);

  const onBack= ()=>{
    setStep((value)=> value-1);
  }

  const onNext=()=>{
    setStep((value)=> value+1)
  }
  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      actionLabel="Submit"
      onSubmit={rentModal.onClose}
    />
  );
};

export default RentModal;
