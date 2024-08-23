"use client";
import * as React from "react";
import { Button, ButtonWithIcon, OrangeButton } from "@/elements/ButtonElement";
import { Input, InputWithIcon } from "@/elements/InputElement";

const page = () => {
  return (
    <>
      <div className="w-full h-auto m-4 flex justify-center items-center text-center">
        <p className="text-2xl">Botones</p>
      </div>
      <div className="w-full h-full flex-col md:flex-row flex justify-center items-center px-4">
        <div className="w-full md:w-1/3  h-auto flex flex-col justify-center items-center">
          <Button
            $size="sm"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </Button>
          <Button
            $size="md"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </Button>
          <Button
            $size="lg"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </Button>
          <Button
            $size="lg"
            $type="secondary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </Button>
          <Button
            $size="lg"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
            disabled
          >
            Search
          </Button>
        </div>
        <div className="w-full md:w-1/3  h-auto flex flex-col justify-center items-center">
          <ButtonWithIcon
            $size="sm"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            icon="plus"
            type="submit"
          >
            Search
          </ButtonWithIcon>
          <ButtonWithIcon
            $size="md"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            icon="plus"
            type="submit"
          >
            Search
          </ButtonWithIcon>
          <ButtonWithIcon
            $size="lg"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            icon="plus"
            type="submit"
          >
            Search
          </ButtonWithIcon>
          <ButtonWithIcon
            $size="lg"
            $type="secondary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            icon="plus"
            type="submit"
          >
            Search
          </ButtonWithIcon>
          <ButtonWithIcon
            $size="lg"
            $type="secondary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            icon="plus"
            type="submit"
            disabled
          >
            Search
          </ButtonWithIcon>
        </div>
        <div className="w-full md:w-1/3  h-auto flex flex-col justify-center items-center">
          <OrangeButton
            $size="sm"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </OrangeButton>
          <OrangeButton
            $size="md"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </OrangeButton>
          <OrangeButton
            $size="lg"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </OrangeButton>
          <OrangeButton
            $size="lg"
            $type="secondary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
          >
            Search
          </OrangeButton>
          <OrangeButton
            $size="lg"
            $type="primary"
            $bgcolor="primary"
            $m=".6rem .3rem"
            type="submit"
            disabled
          >
            Search
          </OrangeButton>
        </div>
      </div>
      <div className="w-full h-auto m-4 flex justify-center items-center text-center">
        <p className="text-2xl">Inputs</p>
      </div>
      <div className="w-full h-full flex-col md:flex-row flex justify-center items-center px-4">
        <Input placeholder="Estrada de texto" />
        <InputWithIcon />
      </div>
    </>
  );
};

export default page;
